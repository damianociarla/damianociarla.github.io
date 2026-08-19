import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

type WebGLStageProps = {
  progress: React.MutableRefObject<number>;
  reducedMotion: boolean;
};

type CoreProps = WebGLStageProps;

const amber = new THREE.Color('#f3a63a');
const blue = new THREE.Color('#39a9ff');
const ice = new THREE.Color('#bde7ff');

function TechnologyCore({ progress, reducedMotion }: CoreProps) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);
  const coreMaterial = useRef<THREE.MeshPhysicalMaterial>(null);
  const shellMaterial = useRef<THREE.MeshBasicMaterial>(null);
  const particles = useRef<THREE.Points>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const targetColor = useMemo(() => new THREE.Color(), []);

  const particlePositions = useMemo(() => {
    const count = 620;
    const positions = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const theta = index * 2.399963229728653;
      const normalized = (index + 0.5) / count;
      const phi = Math.acos(1 - 2 * normalized);
      const radius = 2.15 + Math.sin(index * 12.71) * 0.45;

      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index * 3 + 1] = radius * Math.cos(phi);
      positions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    return positions;
  }, []);

  useFrame((state, delta) => {
    const value = reducedMotion ? 0.82 : progress.current;
    const time = state.clock.getElapsedTime();
    const colorMix = THREE.MathUtils.smoothstep(value, 0.42, 0.8);

    targetColor.copy(amber).lerp(blue, colorMix);

    if (group.current) {
      group.current.rotation.y += delta * (0.07 + value * 0.11);
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        -0.18 + state.pointer.y * 0.08,
        0.025,
      );
      group.current.position.x = THREE.MathUtils.lerp(
        group.current.position.x,
        state.pointer.x * 0.14 + (value > 0.12 ? 2.15 : 1.35),
        0.025,
      );
      group.current.position.y = Math.sin(time * 0.35) * (reducedMotion ? 0 : 0.08);
    }

    if (core.current) {
      const pulse = 1 + Math.sin(time * 1.1) * (reducedMotion ? 0 : 0.025);
      core.current.scale.setScalar(pulse * (0.9 + value * 0.18));
      core.current.rotation.z = time * 0.035;
    }

    if (shell.current) {
      shell.current.rotation.x = -time * 0.04;
      shell.current.rotation.z = time * 0.055;
      shell.current.scale.setScalar(1.08 + value * 0.1);
    }

    if (coreMaterial.current) {
      coreMaterial.current.color.lerp(targetColor, 0.045);
      coreMaterial.current.emissive.lerp(targetColor, 0.045);
      coreMaterial.current.emissiveIntensity = 0.18 + value * 0.42;
      coreMaterial.current.roughness = 0.68 - value * 0.38;
      coreMaterial.current.transmission = value * 0.28;
    }

    if (shellMaterial.current) {
      shellMaterial.current.color.lerp(targetColor, 0.045);
      shellMaterial.current.opacity = 0.24 + value * 0.2;
    }

    if (particles.current) {
      particles.current.rotation.y = -time * (0.018 + value * 0.02);
      particles.current.rotation.z = time * 0.012;
      particles.current.scale.setScalar(0.88 + value * 0.34);
    }

    if (ringA.current && ringB.current) {
      ringA.current.rotation.z = time * 0.11;
      ringB.current.rotation.x = time * -0.08;
      ringA.current.visible = value > 0.34;
      ringB.current.visible = value > 0.57;
    }
  });

  return (
    <group ref={group} position={[1.35, 0, 0]}>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.18, 5]} />
        <meshPhysicalMaterial
          ref={coreMaterial}
          color={amber}
          emissive={amber}
          emissiveIntensity={0.18}
          roughness={0.68}
          metalness={0.18}
          clearcoat={0.6}
          clearcoatRoughness={0.38}
          transparent
          opacity={0.82}
        />
      </mesh>

      <mesh ref={shell} scale={1.09}>
        <icosahedronGeometry args={[1.18, 2]} />
        <meshBasicMaterial
          ref={shellMaterial}
          color={amber}
          wireframe
          transparent
          opacity={0.28}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={ice}
          size={0.018}
          sizeAttenuation
          transparent
          opacity={0.58}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <mesh ref={ringA} rotation={[Math.PI / 2.8, 0.2, 0]} visible={false}>
        <torusGeometry args={[1.72, 0.008, 8, 180]} />
        <meshBasicMaterial color={blue} transparent opacity={0.45} />
      </mesh>

      <mesh ref={ringB} rotation={[0.3, Math.PI / 2, 0]} visible={false}>
        <torusGeometry args={[1.95, 0.006, 8, 180]} />
        <meshBasicMaterial color={ice} transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

export function WebGLStage({ progress, reducedMotion }: WebGLStageProps) {
  return (
    <div className="webgl-stage" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        fallback={<div className="webgl-fallback" />}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[-4, 3, 5]} intensity={2.2} color="#fff3d6" />
        <pointLight position={[3, -1, 2]} intensity={5} color="#168ee8" distance={7} />
        <TechnologyCore progress={progress} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
