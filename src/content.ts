export type Language = 'it' | 'en';

type Era = {
  year: string;
  label: string;
  title: string;
  copy: string;
  signal: string;
  href?: string;
  linkLabel?: string;
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
    sdkSignal: string;
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
      eyebrow: 'VENT’ANNI DI SOFTWARE',
      title: 'Non ho osservato il cambiamento. Ci ho compilato dentro.',
      intro:
        'Dal primo codice alla leadership tecnica, da una startup acquisita ai prodotti AI. Gli strumenti hanno continuato a cambiare. La mia voglia di costruire no.',
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
          copy: 'Java, PHP, JavaScript, piattaforme web e open source. Dieci anni di crescita costruendo sistemi reali.',
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
          href: 'https://erintechlabs.com/',
          linkLabel: 'Visita ErinTechLabs',
        },
      ],
    },
    openSource: {
      eyebrow: 'OPEN SOURCE // ACTIVE AGAIN',
      value: '3.8M',
      unit: 'download npm / 12 mesi',
      title: 'Dal 2012 alla 1.0. Una nuova fase per node-ffmpeg.',
      copy:
        'La versione storica ha generato 3,8 milioni di download negli ultimi dodici mesi. Nel 2026 ho modernizzato node-ffmpeg in TypeScript e rilasciato la v1.0.0 per Node.js 24, ESM e CommonJS, con nuovi test e documentazione.',
      note: 'v1.0.0 · rilasciata il 20 agosto 2026 · 629 stelle · 140 fork',
      link: 'Vedi il repository',
      docsLink: 'Esplora la documentazione',
    },
    deliverart: {
      eyebrow: 'DELIVERART // STORIA DA FOUNDER',
      title: 'Una startup costruita, cresciuta e acquisita.',
      copy:
        'Ho co-fondato Deliverart nel 2016 e l’ho guidata come CTO, trasformando la complessità del food delivery in una piattaforma operativa. Dopo l’acquisizione da parte di TeamSystem, continuo a guidarne l’evoluzione tecnologica dall’interno.',
      acquisition: 'TEAMSystem // 40% 2024 → 100% 2026',
      sdkLabel: 'COSA HO COSTRUITO',
      sdkTitle: 'Una piattaforma SDK TypeScript per Deliverart.',
      sdkCopy:
        'Ho progettato e sviluppato un ecosistema di SDK che offre a web app, servizi e integrazioni un accesso coerente ai domini del prodotto. Contratti tipizzati, validazione runtime e un’architettura a plugin permettono alla piattaforma di crescere senza diventare un monolite.',
      sdkSignal: '1 piattaforma · più domini di prodotto',
    },
    capabilities: {
      eyebrow: 'COSA FACCIO',
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
      eyebrow: 'SISTEMI SELEZIONATI',
      title: 'L’AI conta quando cambia il lavoro reale.',
      intro:
        'Tre esempi tra i tanti sistemi che ho progettato e sviluppato. Contesti diversi, stesso filo conduttore: trasformare complessità e dati in decisioni più chiare.',
      cases: [
        {
          code: 'CASE_01',
          eyebrow: 'PIANIFICAZIONE TURNI CON AI // CASO ANONIMIZZATO',
          title: 'Un sistema AI che crea turni mensili più equi in pochi secondi.',
          copy:
            'Ho progettato un sistema di pianificazione che trasforma regole aziendali, vincoli operativi e criteri di equità in un calendario mensile bilanciato. Ricalcola continuamente le assegnazioni per ridurre errori, squilibri e contestazioni.',
          metrics: [
            { value: '99.7%', label: 'regole e vincoli di equità soddisfatti' },
            { value: '12 mesi', label: 'intero piano 2026 testato' },
            { value: 'pochi secondi', label: 'invece di giorni di lavoro manuale' },
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
      eyebrow: 'OLTRE IL CODICE',
      title: 'Non tutto deve andare in produzione.',
      copy:
        'Quando non costruisco software, costruisco cose in legno, gioco a tennis e apprezzo una buona birra. Possibilmente in quest’ordine. Non necessariamente.',
      items: ['falegnameria', 'tennis', 'birra'],
    },
    contact: {
      eyebrow: 'PARLIAMO',
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
      eyebrow: 'TWENTY YEARS IN SOFTWARE',
      title: 'I did not watch technology change. I compiled inside it.',
      intro:
        'From first code to technical leadership, from an acquired startup to AI products. The tools kept changing. My drive to build never did.',
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
          copy: 'Java, PHP, JavaScript, web platforms and open source. Ten years of learning by building real systems.',
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
          href: 'https://erintechlabs.com/',
          linkLabel: 'Visit ErinTechLabs',
        },
      ],
    },
    openSource: {
      eyebrow: 'OPEN SOURCE // ACTIVE AGAIN',
      value: '3.8M',
      unit: 'npm downloads / 12 months',
      title: 'From 2012 to 1.0. A new chapter for node-ffmpeg.',
      copy:
        'The historical release generated 3.8 million downloads over the last twelve months. In 2026, I modernized node-ffmpeg in TypeScript and released v1.0.0 for Node.js 24, ESM and CommonJS, with new tests and documentation.',
      note: 'v1.0.0 · released August 20, 2026 · 629 stars · 140 forks',
      link: 'View the repository',
      docsLink: 'Explore the documentation',
    },
    deliverart: {
      eyebrow: 'DELIVERART // FOUNDER STORY',
      title: 'A startup built, scaled and acquired.',
      copy:
        'I co-founded Deliverart in 2016 and led it as CTO, turning food-delivery complexity into an operational platform. After its acquisition by TeamSystem, I continue to guide its technological evolution from within.',
      acquisition: 'TEAMSystem // 40% 2024 → 100% 2026',
      sdkLabel: 'WHAT I BUILT',
      sdkTitle: 'A TypeScript SDK platform for Deliverart.',
      sdkCopy:
        'I designed and built an SDK ecosystem that gives web apps, services and integrations a consistent way to access product domains. Typed contracts, runtime validation and a plugin architecture let the platform grow without becoming a monolith.',
      sdkSignal: '1 platform · multiple product domains',
    },
    capabilities: {
      eyebrow: 'WHAT I DO',
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
      eyebrow: 'SELECTED SYSTEMS',
      title: 'AI matters when it changes real work.',
      intro:
        'Three examples from the many systems I have designed and built. Different contexts, same thread: turning complexity and data into clearer decisions.',
      cases: [
        {
          code: 'CASE_01',
          eyebrow: 'AI SHIFT PLANNING // ANONYMIZED CASE',
          title: 'An AI system that builds fairer monthly shifts in seconds.',
          copy:
            'I designed a planning system that turns company rules, operational constraints and fairness criteria into a balanced monthly schedule. It continuously recalculates assignments to reduce errors, imbalances and disputes.',
          metrics: [
            { value: '99.7%', label: 'rules and fairness constraints satisfied' },
            { value: '12 months', label: 'full 2026 plan tested' },
            { value: 'seconds', label: 'instead of days of manual planning' },
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
      eyebrow: 'BEYOND CODE',
      title: 'Not everything needs to ship.',
      copy:
        'When I am not building software, I build things from wood, play tennis and enjoy a good beer. Preferably in that order. Not necessarily.',
      items: ['woodworking', 'tennis', 'beer'],
    },
    contact: {
      eyebrow: 'LET’S TALK',
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
