import { lazy, Suspense, useLayoutEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { copy, type Language } from './content';

const WebGLStage = lazy(() =>
  import('./WebGLStage').then((module) => ({ default: module.WebGLStage })),
);

gsap.registerPlugin(ScrollTrigger);

const personalMail =
  'mailto:damiano.ciarla@gmail.com?subject=Ciao%20Damiano%2C%20parliamo';

function getInitialLanguage(): Language {
  const stored = window.localStorage.getItem('damiano-language');
  if (stored === 'it' || stored === 'en') return stored;
  return window.navigator.language.toLowerCase().startsWith('it') ? 'it' : 'en';
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useLayoutEffect(() => {
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

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const page = useRef<HTMLDivElement>(null);
  const scrollProgress = useRef(0);
  const bootPlayed = useRef(false);
  const reducedMotion = useReducedMotion();
  const text = useMemo(() => copy[language], [language]);

  const changeLanguage = (next: Language) => {
    setLanguage(next);
    window.localStorage.setItem('damiano-language', next);
  };

  useLayoutEffect(() => {
    document.documentElement.lang = language;
    document.title = text.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', text.meta.description);
  }, [language, text]);

  useLayoutEffect(() => {
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

      if (!bootPlayed.current) {
        bootPlayed.current = true;
        const boot = gsap.timeline();
        boot
          .fromTo(
            '.boot-line',
            { opacity: 0, x: -8 },
            { opacity: 1, x: 0, duration: 0.2, stagger: 0.16 },
          )
          .to('.boot-sequence', {
            opacity: 0,
            duration: 0.45,
            delay: 0.28,
            pointerEvents: 'none',
          })
          .fromTo(
            '.hero-line',
            { yPercent: 112 },
            { yPercent: 0, duration: 1.05, stagger: 0.08, ease: 'power4.out' },
            '-=0.2',
          )
          .fromTo(
            '.hero-copy, .hero-actions, .hero-meta',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.72, stagger: 0.1, ease: 'power3.out' },
            '-=0.65',
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

      <Suspense fallback={<div className="webgl-stage webgl-loading" aria-hidden="true" />}>
        <WebGLStage progress={scrollProgress} reducedMotion={reducedMotion} />
      </Suspense>
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
          <a href="#work">{text.nav.work}</a>
          <a href="#capabilities">{text.nav.capabilities}</a>
          <a href="#contact">{text.nav.contact}</a>
        </nav>
        <div className="language-switch" aria-label={text.utility.language}>
          <button
            type="button"
            className={language === 'it' ? 'active' : ''}
            onClick={() => changeLanguage('it')}
            aria-pressed={language === 'it'}
          >
            IT
          </button>
          <span>/</span>
          <button
            type="button"
            className={language === 'en' ? 'active' : ''}
            onClick={() => changeLanguage('en')}
            aria-pressed={language === 'en'}
          >
            EN
          </button>
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
              <a className="action action-primary" href="#story">
                {text.hero.primary}
                <ArrowIcon />
              </a>
              <a className="action action-quiet" href={personalMail}>
                {text.hero.secondary}
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

        <section className="open-source section">
          <div className="metric-stage reveal">
            <p className="eyebrow">{text.openSource.eyebrow}</p>
            <div className="giant-metric">
              <span>{text.openSource.value}</span>
              <small>{text.openSource.unit}</small>
            </div>
          </div>
          <div className="metric-copy reveal">
            <h2>{text.openSource.title}</h2>
            <p>{text.openSource.copy}</p>
            <span className="data-note">{text.openSource.note}</span>
            <div className="open-source-links">
              <a
                className="text-link"
                href="https://github.com/damianociarla/node-ffmpeg"
                target="_blank"
                rel="noreferrer"
              >
                {text.openSource.link}
                <ExternalIcon />
              </a>
              <a
                className="text-link"
                href="https://damianociarla.github.io/node-ffmpeg/"
                target="_blank"
                rel="noreferrer"
              >
                {text.openSource.docsLink}
                <ExternalIcon />
              </a>
            </div>
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
          </div>
          <div className="sdk-proof reveal">
            <span>{text.deliverart.sdkLabel}</span>
            <h3>{text.deliverart.sdkTitle}</h3>
            <p>{text.deliverart.sdkCopy}</p>
            <code>{text.deliverart.sdkSignal}</code>
          </div>
        </section>

        <section className="capabilities section" id="capabilities">
          <div className="section-heading reveal">
            <p className="eyebrow">{text.capabilities.eyebrow}</p>
            <h2>{text.capabilities.title}</h2>
          </div>
          <div className="capability-list">
            {text.capabilities.items.map((item) => (
              <article className="capability-row reveal" key={item.index}>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
          <p className="stack-line reveal">
            TypeScript · Node.js · React · APIs · SDKs · AI/LLM · Agents · Cloud · Serverless
          </p>
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
            <a className="contact-route reveal" href={personalMail}>
              <span>{text.contact.personalLabel}</span>
              <h3>{text.contact.personalTitle}</h3>
              <p>{text.contact.personalCopy}</p>
              <code>$ {text.contact.personalAction}</code>
              <ArrowIcon />
            </a>
            <a
              className="contact-route reveal"
              href="https://erintechlabs.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span>{text.contact.businessLabel}</span>
              <h3>{text.contact.businessTitle}</h3>
              <p>{text.contact.businessCopy}</p>
              <code>{text.contact.businessAction}</code>
              <ExternalIcon />
            </a>
          </div>
          <div className="cv-row reveal">
            <span>{text.contact.cvLabel}</span>
            <a
              href={language === 'it' ? '/cv/damiano-ciarla-cv-it.pdf' : '/cv/damiano-ciarla-cv-en.pdf'}
              download
            >
              {text.contact.cvAction}
              <ArrowIcon />
            </a>
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
          <a href={personalMail}>Email</a>
        </div>
        <span>© {new Date().getFullYear()} Damiano Ciarla</span>
      </footer>
    </div>
  );
}

export default App;
