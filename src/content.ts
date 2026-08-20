export type Language = 'it' | 'en';

type Era = {
  year: string;
  label: string;
  title: string;
  copy: string;
  signal: string;
};

type Capability = {
  index: string;
  title: string;
  copy: string;
};

type CaseStudy = {
  code: string;
  eyebrow: string;
  title: string;
  copy: string;
  metrics: Array<{ value: string; label: string }>;
  href?: string;
  linkLabel?: string;
};

export type SiteCopy = {
  meta: { title: string; description: string };
  nav: { story: string; work: string; capabilities: string; contact: string };
  utility: { skip: string; language: string; scroll: string; open: string };
  boot: string[];
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    status: string;
  };
  story: {
    eyebrow: string;
    title: string;
    intro: string;
    eras: Era[];
  };
  openSource: {
    eyebrow: string;
    value: string;
    unit: string;
    title: string;
    copy: string;
    note: string;
    link: string;
    docsLink: string;
  };
  deliverart: {
    eyebrow: string;
    title: string;
    copy: string;
    acquisition: string;
    sdkLabel: string;
    sdkTitle: string;
    sdkCopy: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    items: Capability[];
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    cases: CaseStudy[];
  };
  human: {
    eyebrow: string;
    title: string;
    copy: string;
    items: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    copy: string;
    personalLabel: string;
    personalTitle: string;
    personalCopy: string;
    personalAction: string;
    businessLabel: string;
    businessTitle: string;
    businessCopy: string;
    businessAction: string;
    cvLabel: string;
    cvAction: string;
  };
  footer: string;
};

export const copy: Record<Language, SiteCopy> = {
  it: {
    meta: {
      title: 'Damiano Ciarla | Technical Entrepreneur & AI Programmer',
      description:
        'Vent’anni nel software tra leadership tecnica, startup, prodotti, architetture e AI applicata. Ancora con le mani nel codice.',
    },
    nav: {
      story: 'Percorso',
      work: 'Lavoro',
      capabilities: 'Capacità',
      contact: 'Contatto',
    },
    utility: {
      skip: 'Vai al contenuto',
      language: 'Cambia lingua',
      scroll: 'Scorri per evolvere',
      open: 'Apri',
    },
    boot: [
      'boot sequence // 2006',
      'loading curiosity........ ok',
      'mounting production....... ok',
      'hands_on_mode............. always',
    ],
    hero: {
      eyebrow: 'TECHNICAL ENTREPRENEUR // AI PROGRAMMER',
      title: 'Damiano\nCiarla',
      body:
        'Vent’anni nel software. Ho trasformato codice in prodotti, team e aziende. Oggi costruisco con l’AI, ancora con le mani nel codice.',
      primary: 'Esplora il percorso',
      secondary: 'Parliamo',
      status: 'Roma / remote anywhere',
    },
    story: {
      eyebrow: '01 // GIT LOG DI UNA CARRIERA',
      title: 'Non ho osservato il cambiamento. Ci ho compilato dentro.',
      intro:
        'Dal primo codice alla leadership tecnica, da una startup acquisita ai prodotti AI: ogni era ha cambiato gli strumenti, mai la voglia di costruire.',
      eras: [
        {
          year: '2006',
          label: 'INIT',
          title: 'La prima riga',
          copy: 'Inizio a programmare. Il software smette presto di essere solo tecnologia: diventa il mio modo di risolvere problemi.',
          signal: 'curiosity > credentials',
        },
        {
          year: '2007—16',
          label: 'PRODUCTION',
          title: 'Imparare mentre tutto gira',
          copy: 'Java, PHP, JavaScript, piattaforme web, sistemi condivisi e open source. Dieci anni per costruire profondità direttamente in produzione.',
          signal: 'ship / learn / repeat',
        },
        {
          year: '2017—24',
          label: 'SCALE',
          title: 'Dal codice all’azienda',
          copy: 'Co-fondo Deliverart e ne guido la tecnologia. Prodotto, team e business diventano un solo sistema da far evolvere.',
          signal: 'code → product → company',
        },
        {
          year: '2025—NOW',
          label: 'AUGMENT',
          title: 'Costruire nell’era AI',
          copy: 'Fondo ErinTechLabs e porto l’AI dentro prodotti e processi reali: dati, vincoli, supervisione e risultati misurabili.',
          signal: 'human × machine',
        },
      ],
    },
    openSource: {
      eyebrow: '02 // OPEN SOURCE, ACTIVE AGAIN',
      value: '3.8M',
      unit: 'download legacy / 12 mesi',
      title: 'Dal 2012 al 2026. Il legacy si evolve.',
      copy:
        'I 3,8 milioni di download appartengono alla versione storica. Nel 2026 ho modernizzato node-ffmpeg in TypeScript e rilasciato la v1.0.0 per Node.js 24, ESM e CommonJS, con una nuova suite di test e documentazione completa.',
      note: 'v1.0.0 · rilasciata il 20 agosto 2026 · 629 stelle · 140 fork',
      link: 'Vedi il repository',
      docsLink: 'Esplora la documentazione',
    },
    deliverart: {
      eyebrow: '03 // FOUNDER MODE',
      title: 'Una startup costruita, cresciuta e acquisita.',
      copy:
        'Ho co-fondato Deliverart nel 2016 e l’ho guidata come CTO, trasformando la complessità del food delivery in una piattaforma operativa. Dopo l’acquisizione da parte di TeamSystem, continuo a guidarne l’evoluzione tecnologica dall’interno.',
      acquisition: 'TEAMSystem // 40% 2024 → 100% 2026',
      sdkLabel: 'CURRENT BUILD',
      sdkTitle: 'Un ecosistema SDK TypeScript, non un client usa-e-getta.',
      sdkCopy:
        'Core estendibile a plugin, contratti fortemente tipizzati, validazione runtime e pacchetti organizzati per dominio: architettura pensata per evolvere insieme al prodotto.',
    },
    capabilities: {
      eyebrow: '04 // WHAT I DO',
      title: 'Guido. Progetto. Costruisco.',
      items: [
        {
          index: '01',
          title: 'Technical leadership',
          copy: 'Tecnologia, prodotto, team e business nella stessa direzione.',
        },
        {
          index: '02',
          title: 'Architecture & platforms',
          copy: 'API, SDK, integrazioni e sistemi complessi che restano leggibili mentre crescono.',
        },
        {
          index: '03',
          title: 'Applied AI',
          copy: 'AI connessa a dati, regole, persone e un risultato che si può misurare.',
        },
        {
          index: '04',
          title: 'Hands-on execution',
          copy: 'Dalla direzione tecnica al codice funzionante e alla produzione.',
        },
      ],
    },
    work: {
      eyebrow: '05 // SELECTED SYSTEMS IN THE WILD',
      title: 'L’AI conta quando cambia il lavoro reale.',
      intro:
        'Tre esempi tra i tanti sistemi che ho progettato e sviluppato. Contesti diversi, stesso filo conduttore: trasformare complessità e dati in decisioni più chiare.',
      cases: [
        {
          code: 'CASE_01',
          eyebrow: 'WORKFORCE INTELLIGENCE // ANONIMO',
          title: 'Turni più equi. Da giorni a secondi.',
          copy:
            'Un motore di pianificazione che bilancia regole aziendali, vincoli operativi ed equità tra dipendenti, ricalcolando il piano mese dopo mese.',
          metrics: [
            { value: '99.7%', label: 'vincoli soddisfatti' },
            { value: '12 mesi', label: 'orizzonte validato 2026' },
            { value: 'secondi', label: 'da più giorni-uomo' },
          ],
        },
        {
          code: 'CASE_02',
          eyebrow: 'ERINTECHLABS // PRODUCT',
          title: 'Documento Facile',
          copy:
            'Un’app che traduce bollette, buste paga e comunicazioni in informazioni comprensibili, collega periodi comparabili e segnala ciò che cambia davvero.',
          metrics: [
            { value: 'AI', label: 'lettura contestuale' },
            { value: 'STORICO', label: 'confronti e trend' },
            { value: 'HUMAN', label: 'controllo sempre visibile' },
          ],
          href: 'https://documentofacile.it/',
          linkLabel: 'Scopri il prodotto',
        },
        {
          code: 'CASE_03',
          eyebrow: 'VERISURE // MARTECH',
          title: 'Lead acquisition su scala enterprise.',
          copy:
            'Dal 2018 analizzo e sviluppo sistemi che collegano canali, microservizi e processi marketing per il mercato italiano.',
          metrics: [
            { value: '100K+', label: 'lead ogni anno' },
            { value: '≈10', label: 'sistemi e canali' },
            { value: '8 anni', label: 'di evoluzione continua' },
          ],
        },
      ],
    },
    human: {
      eyebrow: '06 // HUMAN RUNTIME',
      title: 'Non tutto deve andare in produzione.',
      copy:
        'Quando non costruisco software, costruisco cose in legno, gioco a tennis e apprezzo una buona birra. Possibilmente in quest’ordine. Non necessariamente.',
      items: ['falegnameria', 'tennis', 'birra'],
    },
    contact: {
      eyebrow: '07 // CHOOSE YOUR PROTOCOL',
      title: 'Costruiamo qualcosa di ambizioso.',
      copy:
        'Un prodotto, una trasformazione tecnica o una conversazione che vale il tempo di entrambi.',
      personalLabel: 'PERSONAL CHANNEL',
      personalTitle: 'Vuoi offrirmi un lavoro?',
      personalCopy: 'Ruoli interessanti, speaking, collaborazioni personali o semplicemente una buona conversazione.',
      personalAction: 'hire damiano',
      businessLabel: 'COMPANY CHANNEL',
      businessTitle: 'Hai un sistema da sbloccare?',
      businessCopy: 'Consulenza, software custom, integrazioni e AI applicata passano da ErinTechLabs.',
      businessAction: 'Vai a ErinTechLabs',
      cvLabel: 'SERVE LA VERSIONE CLASSICA?',
      cvAction: 'Scarica il CV italiano',
    },
    footer: 'Built with TypeScript, WebGL and an unreasonable respect for details.',
  },
  en: {
    meta: {
      title: 'Damiano Ciarla | Technical Entrepreneur & AI Programmer',
      description:
        'Twenty years in software across technical leadership, startups, products, architecture and applied AI. Still hands-on.',
    },
    nav: {
      story: 'Story',
      work: 'Work',
      capabilities: 'Capabilities',
      contact: 'Contact',
    },
    utility: {
      skip: 'Skip to content',
      language: 'Change language',
      scroll: 'Scroll to evolve',
      open: 'Open',
    },
    boot: [
      'boot sequence // 2006',
      'loading curiosity........ ok',
      'mounting production....... ok',
      'hands_on_mode............. always',
    ],
    hero: {
      eyebrow: 'TECHNICAL ENTREPRENEUR // AI PROGRAMMER',
      title: 'Damiano\nCiarla',
      body:
        'Twenty years in software. I turned code into products, teams and companies. Today I build with AI, still hands-on.',
      primary: 'Explore the story',
      secondary: 'Let’s talk',
      status: 'Rome / remote anywhere',
    },
    story: {
      eyebrow: '01 // A CAREER GIT LOG',
      title: 'I did not watch technology change. I compiled inside it.',
      intro:
        'From first code to technical leadership, from an acquired startup to AI products: every era changed the tools, never the urge to build.',
      eras: [
        {
          year: '2006',
          label: 'INIT',
          title: 'The first line',
          copy: 'I start programming. Software quickly stops being just technology and becomes my way of solving problems.',
          signal: 'curiosity > credentials',
        },
        {
          year: '2007—16',
          label: 'PRODUCTION',
          title: 'Learning while everything runs',
          copy: 'Java, PHP, JavaScript, web platforms, shared systems and open source. Ten years of building depth directly in production.',
          signal: 'ship / learn / repeat',
        },
        {
          year: '2017—24',
          label: 'SCALE',
          title: 'From code to company',
          copy: 'I co-found Deliverart and lead its technology. Product, team and business become one system to evolve.',
          signal: 'code → product → company',
        },
        {
          year: '2025—NOW',
          label: 'AUGMENT',
          title: 'Building in the AI era',
          copy: 'I found ErinTechLabs and bring AI into real products and operations: data, constraints, oversight and measurable outcomes.',
          signal: 'human × machine',
        },
      ],
    },
    openSource: {
      eyebrow: '02 // OPEN SOURCE, ACTIVE AGAIN',
      value: '3.8M',
      unit: 'legacy downloads / 12 months',
      title: 'From 2012 to 2026. Legacy, evolved.',
      copy:
        'The 3.8 million downloads belong to the historical release. In 2026, I modernized node-ffmpeg in TypeScript and released v1.0.0 for Node.js 24, ESM and CommonJS, with a new test suite and complete documentation.',
      note: 'v1.0.0 · released August 20, 2026 · 629 stars · 140 forks',
      link: 'View the repository',
      docsLink: 'Explore the documentation',
    },
    deliverart: {
      eyebrow: '03 // FOUNDER MODE',
      title: 'A startup built, scaled and acquired.',
      copy:
        'I co-founded Deliverart in 2016 and led it as CTO, turning food-delivery complexity into an operational platform. After its acquisition by TeamSystem, I continue to guide its technological evolution from within.',
      acquisition: 'TEAMSystem // 40% 2024 → 100% 2026',
      sdkLabel: 'CURRENT BUILD',
      sdkTitle: 'A TypeScript SDK ecosystem, not a disposable client.',
      sdkCopy:
        'A plugin-extensible core, strongly typed contracts, runtime validation and domain-oriented packages: architecture designed to evolve with the product.',
    },
    capabilities: {
      eyebrow: '04 // WHAT I DO',
      title: 'I lead. I design. I build.',
      items: [
        {
          index: '01',
          title: 'Technical leadership',
          copy: 'Technology, product, teams and business moving in the same direction.',
        },
        {
          index: '02',
          title: 'Architecture & platforms',
          copy: 'APIs, SDKs, integrations and complex systems that stay legible as they grow.',
        },
        {
          index: '03',
          title: 'Applied AI',
          copy: 'AI connected to data, rules, people and an outcome you can measure.',
        },
        {
          index: '04',
          title: 'Hands-on execution',
          copy: 'From technical direction to working code and production delivery.',
        },
      ],
    },
    work: {
      eyebrow: '05 // SELECTED SYSTEMS IN THE WILD',
      title: 'AI matters when it changes real work.',
      intro:
        'Three examples from the many systems I have designed and built. Different contexts, same thread: turning complexity and data into clearer decisions.',
      cases: [
        {
          code: 'CASE_01',
          eyebrow: 'WORKFORCE INTELLIGENCE // ANONYMOUS',
          title: 'Fairer shifts. From days to seconds.',
          copy:
            'A planning engine balancing company rules, operational constraints and employee fairness, recalculating the schedule month after month.',
          metrics: [
            { value: '99.7%', label: 'constraints satisfied' },
            { value: '12 months', label: '2026 horizon validated' },
            { value: 'seconds', label: 'down from person-days' },
          ],
        },
        {
          code: 'CASE_02',
          eyebrow: 'ERINTECHLABS // PRODUCT',
          title: 'Documento Facile',
          copy:
            'An app that turns bills, payslips and official notices into understandable information, connects comparable periods and flags what truly changed.',
          metrics: [
            { value: 'AI', label: 'contextual reading' },
            { value: 'HISTORY', label: 'comparisons and trends' },
            { value: 'HUMAN', label: 'control stays visible' },
          ],
          href: 'https://documentofacile.it/',
          linkLabel: 'Explore the product',
        },
        {
          code: 'CASE_03',
          eyebrow: 'VERISURE // MARTECH',
          title: 'Enterprise-scale lead acquisition.',
          copy:
            'Since 2018 I have analyzed and developed systems connecting channels, microservices and marketing operations for the Italian market.',
          metrics: [
            { value: '100K+', label: 'leads every year' },
            { value: '≈10', label: 'systems and channels' },
            { value: '8 years', label: 'of continuous evolution' },
          ],
        },
      ],
    },
    human: {
      eyebrow: '06 // HUMAN RUNTIME',
      title: 'Not everything needs to ship.',
      copy:
        'When I am not building software, I build things from wood, play tennis and enjoy a good beer. Preferably in that order. Not necessarily.',
      items: ['woodworking', 'tennis', 'beer'],
    },
    contact: {
      eyebrow: '07 // CHOOSE YOUR PROTOCOL',
      title: 'Let’s build something ambitious.',
      copy:
        'A product, a technical transformation or a conversation worth both our time.',
      personalLabel: 'PERSONAL CHANNEL',
      personalTitle: 'Want to offer me a job?',
      personalCopy: 'Interesting roles, speaking, personal collaborations or simply a good conversation.',
      personalAction: 'hire damiano',
      businessLabel: 'COMPANY CHANNEL',
      businessTitle: 'Have a system to unblock?',
      businessCopy: 'Consulting, custom software, integrations and applied AI go through ErinTechLabs.',
      businessAction: 'Visit ErinTechLabs',
      cvLabel: 'NEED THE CLASSIC VERSION?',
      cvAction: 'Download the English CV',
    },
    footer: 'Built with TypeScript, WebGL and an unreasonable respect for details.',
  },
};
