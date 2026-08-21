import { lazy, Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { copy, type Language } from './content';

const WebGLStage = lazy(() =>
  import('./WebGLStage').then((module) => ({ default: module.WebGLStage })),
);

gsap.registerPlugin(ScrollTrigger);

const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'it';
  return window.location.pathname.endsWith('/en.html') ? 'en' : 'it';
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window === 'undefined'
      ? true
      : window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useBrowserLayoutEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return reduced;
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 16 16 8M9 8h7v7" />
    </svg>
  );
}

type AppProps = {
  initialLanguage?: Language;
  staticRender?: boolean;
};

export function App({ initialLanguage, staticRender = false }: AppProps) {
  const [language] = useState<Language>(() => initialLanguage ?? getInitialLanguage());
  const [showWebGL, setShowWebGL] = useState(!staticRender);
  const page = useRef<HTMLDivElement>(null);
  const scrollProgress = useRef(0);
  const bootPlayed = useRef(false);
  const reducedMotion = useReducedMotion();
  const text = useMemo(() => copy[language], [language]);
  const personalContactUrl = useMemo(
    () =>
      language === 'it'
        ? 'mailto:damiano.ciarla@gmail.com?subject=Parliamo%20dal%20portfolio'
        : 'mailto:damiano.ciarla@gmail.com?subject=Portfolio%20conversation',
    [language],
  );
  const cvUrl =
    language === 'it'
      ? '/cv/damiano-ciarla-cv-it.pdf'
      : '/cv/damiano-ciarla-cv-en.pdf';

  useEffect(() => {
    if (!staticRender) return undefined;
    const frame = window.requestAnimationFrame(() => setShowWebGL(true));
    return () => window.cancelAnimationFrame(frame);
  }, [staticRender]);

  useBrowserLayoutEffect(() => {
    if (!page.current) return undefined;

    const context = gsap.context(() => {
      ScrollTrigger.create({
        start: 0,
        end: () => ScrollTrigger.maxScroll(window),
        onUpdate: (instance) => {
          scrollProgress.current = instance.progress;
          document.documentElement.style.setProperty(
            '--scroll-progress',
            String(instance.progress),
          );
        },
      });

      if (reducedMotion) {
        gsap.set('.boot-sequence', { display: 'none' });
        gsap.set('.hero-line, .hero-copy, .hero-actions, .hero-meta, .reveal', {
          opacity: 1,
          y: 0,
        });
        return;
      }

      const hasSeenBoot = (() => {
        try {
          return window.sessionStorage.getItem('dc_boot_seen') === '1';
        } catch {
          return false;
        }
      })();

      if (!bootPlayed.current && !hasSeenBoot) {
        bootPlayed.current = true;
        try {
          window.sessionStorage.setItem('dc_boot_seen', '1');
        } catch {
          // The animation still works when storage is unavailable.
        }
        const boot = gsap.timeline();
        boot
          .fromTo(
            '.boot-line',
            { opacity: 0, x: -8 },
            { opacity: 1, x: 0, duration: 0.08, stagger: 0.06 },
          )
          .to('.boot-sequence', {
            opacity: 0,
            duration: 0.18,
            delay: 0.06,
            pointerEvents: 'none',
          })
          .fromTo(
            '.hero-line',
            { yPercent: 112 },
            { yPercent: 0, duration: 0.85, stagger: 0.06, ease: 'power4.out' },
            '-=0.08',
          )
          .fromTo(
            '.hero-copy, .hero-actions, .hero-meta',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: 'power3.out' },
            '-=0.55',
          );
      } else {
        gsap.set('.boot-sequence', { opacity: 0, pointerEvents: 'none' });
        gsap.set('.hero-line, .hero-copy, .hero-actions, .hero-meta', {
          opacity: 1,
          y: 0,
          yPercent: 0,
        });
      }

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 34 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 84%',
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('.era-row').forEach((element) => {
        gsap.fromTo(
          element.querySelector('.era-progress'),
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: 'left center',
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top 72%',
              end: 'bottom 42%',
              scrub: 0.5,
            },
          },
        );
      });
    }, page);

    return () => context.revert();
  }, [language, reducedMotion]);

  return (
    <div className="site" ref={page}>
      <a className="skip-link" href="#main">
        {text.utility.skip}
      </a>

      {showWebGL ? (
        <Suspense fallback={<div className="webgl-stage webgl-loading" aria-hidden="true" />}>
          <WebGLStage progress={scrollProgress} reducedMotion={reducedMotion} />
        </Suspense>
      ) : null}
      <div className="ambient-grid" aria-hidden="true" />
      <div className="progress-rail" aria-hidden="true">
        <span />
      </div>

      <div className="boot-sequence" aria-hidden="true">
        <div className="boot-log">
          {text.boot.map((line) => (
            <span className="boot-line" key={line}>
              {line}
            </span>
          ))}
        </div>
      </div>

      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Damiano Ciarla - home">
          <span>DC</span>
          <span className="brand-cursor" aria-hidden="true" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#story">{text.nav.story}</a>
          <a href="#projects">{text.nav.projects}</a>
          <a href="#work">{text.nav.work}</a>
          <a href="#contact">{text.nav.contact}</a>
        </nav>
        <a className="mobile-contact" href="#contact">
          {text.nav.mobileContact}
        </a>
        <div className="language-switch" aria-label={text.utility.language}>
          <a
            href="/"
            hrefLang="it"
            lang="it"
            className={language === 'it' ? 'active' : ''}
            aria-current={language === 'it' ? 'page' : undefined}
          >
            IT
          </a>
          <span>/</span>
          <a
            href="/en.html"
            hrefLang="en"
            lang="en"
            className={language === 'en' ? 'active' : ''}
            aria-current={language === 'en' ? 'page' : undefined}
          >
            EN
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-content">
            <p className="eyebrow hero-copy">{text.hero.eyebrow}</p>
            <h1 aria-label="Damiano Ciarla">
              {text.hero.title.split('\n').map((line) => (
                <span className="hero-line-mask" key={line}>
                  <span className="hero-line">{line}</span>
                </span>
              ))}
            </h1>
            <p className="hero-body hero-copy">{text.hero.body}</p>
            <div className="hero-actions">
              <a className="action action-primary" href="#now">
                {text.hero.primary}
                <ArrowIcon />
              </a>
              <a
                className="action action-quiet"
                href={personalContactUrl}
              >
                {text.hero.secondary}
              </a>
            </div>
            <div className="hero-links hero-copy" aria-label="Profile links">
              <a href="https://github.com/damianociarla" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/damianociarla/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href={cvUrl} download>
                {text.hero.cv}
              </a>
            </div>
          </div>
          <div className="hero-meta">
            <span>{text.hero.status}</span>
            <span className="scroll-cue">
              {text.utility.scroll}
              <i aria-hidden="true" />
            </span>
          </div>
        </section>

        <section className="now section" id="now" aria-labelledby="now-title">
          <div className="now-heading reveal">
            <p className="eyebrow">{text.now.eyebrow}</p>
            <h2 id="now-title">{text.now.title}</h2>
            <p>{text.now.copy}</p>
          </div>
          <div className="current-list">
            {text.now.items.map((item) => (
              <article className="current-row reveal" key={item.organization}>
                <h3>{item.organization}</h3>
                <div>
                  <strong>{item.role}</strong>
                  <span>{item.nature}</span>
                </div>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
          <p className="now-target reveal">{text.now.target}</p>
        </section>

        <section className="story section" id="story">
          <div className="section-heading reveal">
            <p className="eyebrow">{text.story.eyebrow}</p>
            <h2>{text.story.title}</h2>
            <p className="section-intro">{text.story.intro}</p>
          </div>

          <div className="era-list">
            {text.story.eras.map((era) => (
              <article className="era-row" key={era.year}>
                <div className="era-progress" aria-hidden="true" />
                <div className="era-time">
                  <span>{era.year}</span>
                  <small>{era.label}</small>
                </div>
                <h3>{era.title}</h3>
                <p>
                  {era.copy}
                  {era.href && era.linkLabel ? (
                    <>
                      {' '}
                      <a className="text-link era-link" href={era.href} target="_blank" rel="noreferrer">
                        {era.linkLabel}
                        <ExternalIcon />
                      </a>
                    </>
                  ) : null}
                </p>
                <code>{era.signal}</code>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-heading reveal">
            <p className="eyebrow">{text.projects.eyebrow}</p>
            <h2>{text.projects.title}</h2>
            <p className="section-intro">{text.projects.intro}</p>
          </div>

          <div className="project-list">
            {text.projects.items.map((project) => (
              <article className="project-row reveal" key={project.title}>
                <i className="project-scan" aria-hidden="true" />
                <div className="project-index">
                  <span>{project.index}</span>
                  <small>{project.label}</small>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                  {project.signalHref ? (
                    <a
                      className="project-signal"
                      href={project.signalHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <code>{project.signal}</code>
                      <ExternalIcon />
                    </a>
                  ) : (
                    <code>{project.signal}</code>
                  )}
                </div>
                <div className="project-links">
                  <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                    {project.linkLabel}
                    <ExternalIcon />
                  </a>
                  {project.secondaryHref && project.secondaryLabel ? (
                    <a
                      className="text-link"
                      href={project.secondaryHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.secondaryLabel}
                      <ExternalIcon />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="deliverart section">
          <div className="deliverart-main reveal">
            <p className="eyebrow">{text.deliverart.eyebrow}</p>
            <h2>{text.deliverart.title}</h2>
            <p>{text.deliverart.copy}</p>
            <div className="acquisition-line">
              <span>{text.deliverart.acquisition}</span>
              <i aria-hidden="true" />
            </div>
            <dl className="deliverart-proof">
              {text.deliverart.proof.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="sdk-proof reveal">
            <span>{text.deliverart.sdkLabel}</span>
            <h3>{text.deliverart.sdkTitle}</h3>
            <p>{text.deliverart.sdkCopy}</p>
            <code>{text.deliverart.sdkSignal}</code>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="section-heading reveal">
            <p className="eyebrow">{text.work.eyebrow}</p>
            <h2>{text.work.title}</h2>
            <p className="section-intro">{text.work.intro}</p>
          </div>
          <div className="case-list">
            {text.work.cases.map((item) => (
              <article className="case-study reveal" key={item.code}>
                <div className="case-id">
                  <span>{item.code}</span>
                  <small>{item.eyebrow}</small>
                </div>
                <div className="case-body">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  {item.href && item.linkLabel ? (
                    <a
                      className="text-link"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.linkLabel}
                      <ExternalIcon />
                    </a>
                  ) : null}
                </div>
                <dl className="case-metrics">
                  {item.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt>{metric.value}</dt>
                      <dd>{metric.label}</dd>
                    </div>
                  ))}
                </dl>
                {item.note ? <p className="case-note">{item.note}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="human section">
          <div className="human-copy reveal">
            <p className="eyebrow">{text.human.eyebrow}</p>
            <h2>{text.human.title}</h2>
            <p>{text.human.copy}</p>
          </div>
          <div className="human-loop reveal" aria-label={text.human.items.join(', ')}>
            {[...text.human.items, ...text.human.items].map((item, index) => (
              <span key={`${item}-${index}`}>
                {item}
                <i aria-hidden="true" />
              </span>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-heading reveal">
            <p className="eyebrow">{text.contact.eyebrow}</p>
            <h2>{text.contact.title}</h2>
            <p>{text.contact.copy}</p>
          </div>
          <div className="contact-routes">
            <a
              className="contact-route contact-route-primary reveal"
              href={personalContactUrl}
            >
              <span>{text.contact.personalLabel}</span>
              <h3>{text.contact.personalTitle}</h3>
              <p>{text.contact.personalCopy}</p>
              <strong className="contact-email">{text.contact.email}</strong>
              <code>$ {text.contact.personalAction}</code>
              <ArrowIcon />
            </a>
          </div>
          <div className="cv-row reveal">
            <span>{text.contact.cvLabel}</span>
            <div className="cv-links">
              <a href={cvUrl} download>
                {text.contact.cv}
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{text.footer}</p>
        <div>
          <a href="https://github.com/damianociarla" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/damianociarla/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href={personalContactUrl}>
            Email
          </a>
        </div>
        <span>© {new Date().getFullYear()} Damiano Ciarla</span>
      </footer>
    </div>
  );
}

export default App;
