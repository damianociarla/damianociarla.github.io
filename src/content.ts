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
    cvLabel: string;
    cvAction: string;
  };
  footer: string;
};

export const copy: Record<Language, SiteCopy> = {
  it: {
    meta: {
      title: 'Damiano Ciarla | Technical Leader, Software Architect & AI Engineer',
      description:
        'Vent’anni nel software tra leadership tecnica, modernizzazione di piattaforme, startup acquisite e AI applicata. Sempre hands-on.',
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
      eyebrow: 'TECHNICAL LEADER // SOFTWARE ARCHITECT // AI ENGINEER',
      title: 'Damiano\nCiarla',
      body:
        'Vent’anni nel software. Guido modernizzazioni, costruisco piattaforme e trasformo l’AI in prodotti reali. Sempre con le mani nel codice.',
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
          copy: 'Co-fondo Deliverart e ne guido l’evoluzione end-to-end: prodotto, architettura, cloud e delivery crescono come un solo sistema.',
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
      sdkTitle: 'Una piattaforma modernizzata senza fermare il prodotto.',
      sdkCopy:
        'Frontend Next.js, API Symfony e API Platform, servizi su AWS ECS, test automatici e CI/CD. Un’evoluzione progressiva dell’intera piattaforma, con SDK TypeScript per mantenere coerenti domini, web app e integrazioni.',
      sdkSignal: 'frontend · api · cloud · test · delivery',
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
          title: 'Platform modernization',
          copy: 'Evoluzione progressiva di frontend, API, cloud e delivery senza fermare il prodotto.',
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
      title: 'La tecnologia conta quando cambia il lavoro reale.',
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
          eyebrow: 'VERISURE // CONSULENZA SENIOR',
          title: 'Lead acquisition che cresce senza esporre la complessità.',
          copy:
            'Dal 2018 contribuisco all’analisi, allo sviluppo e alla modernizzazione dei sistemi di lead acquisition per il mercato italiano. Il mio lavoro collega flussi multicanale e processi commerciali, con focus su automazione, affidabilità e continuità operativa.',
          metrics: [
            { value: 'MULTICANALE', label: 'flussi connessi end-to-end' },
            { value: 'AUTOMATION', label: 'meno attività manuali' },
            { value: 'CONTINUITÀ', label: 'evoluzione senza fermare l’operatività' },
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
      title: 'Vuoi fare una chiacchierata?',
      copy:
        'Hai un progetto interessante e vuoi parlarne? Pensi che possiamo collaborare? Scrivimi.',
      personalLabel: 'OPEN CHANNEL',
      personalTitle: 'Scrivimi.',
      personalCopy:
        'Lavoro, idee, prodotti, speaking o problemi tecnici difficili: parto sempre da una conversazione.',
      personalAction: 'scrivimi',
      cvLabel: 'SERVE LA VERSIONE CLASSICA?',
      cvAction: 'Scarica il CV italiano',
    },
    footer: 'Built with TypeScript, WebGL and an unreasonable respect for details.',
  },
  en: {
    meta: {
      title: 'Damiano Ciarla | Technical Leader, Software Architect & AI Engineer',
      description:
        'Twenty years in software across technical leadership, platform modernization, acquired startups and applied AI. Still hands-on.',
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
      eyebrow: 'TECHNICAL LEADER // SOFTWARE ARCHITECT // AI ENGINEER',
      title: 'Damiano\nCiarla',
      body:
        'Twenty years in software. I lead modernization, build platforms and turn AI into real products. Still hands-on.',
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
          copy: 'I co-found Deliverart and lead its end-to-end evolution: product, architecture, cloud and delivery grow as one system.',
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
      sdkTitle: 'A platform modernized without stopping the product.',
      sdkCopy:
        'Next.js frontends, Symfony and API Platform APIs, services on AWS ECS, automated tests and CI/CD. A progressive evolution of the whole platform, with TypeScript SDKs keeping domains, web apps and integrations consistent.',
      sdkSignal: 'frontend · api · cloud · tests · delivery',
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
          title: 'Platform modernization',
          copy: 'Progressive evolution of frontends, APIs, cloud and delivery without stopping the product.',
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
      title: 'Technology matters when it changes real work.',
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
          eyebrow: 'VERISURE // SENIOR CONSULTING',
          title: 'Lead acquisition that grows without exposing its complexity.',
          copy:
            'Since 2018 I have contributed to the analysis, development and modernization of lead acquisition systems for the Italian market. My work connects multichannel flows and commercial processes, with a focus on automation, reliability and operational continuity.',
          metrics: [
            { value: 'MULTICHANNEL', label: 'flows connected end-to-end' },
            { value: 'AUTOMATION', label: 'less manual work' },
            { value: 'CONTINUITY', label: 'evolution without stopping operations' },
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
      title: 'Want to have a chat?',
      copy:
        'Have an interesting project you want to discuss? Think we could work together? Write to me.',
      personalLabel: 'OPEN CHANNEL',
      personalTitle: 'Write to me.',
      personalCopy:
        'Roles, ideas, products, speaking or difficult technical problems: I always start with a conversation.',
      personalAction: 'start a conversation',
      cvLabel: 'NEED THE CLASSIC VERSION?',
      cvAction: 'Download the English CV',
    },
    footer: 'Built with TypeScript, WebGL and an unreasonable respect for details.',
  },
};
