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

type Project = {
  index: string;
  label: string;
  title: string;
  copy: string;
  signal: string;
  signalHref?: string;
  href: string;
  linkLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

type CaseStudy = {
  code: string;
  eyebrow: string;
  title: string;
  copy: string;
  metrics: Array<{ value: string; label: string }>;
  note?: string;
  href?: string;
  linkLabel?: string;
};

export type SiteCopy = {
  meta: { title: string; description: string };
  nav: { story: string; projects: string; work: string; contact: string; mobileContact: string };
  utility: { skip: string; language: string; scroll: string; open: string };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    status: string;
    cv: string;
  };
  now: {
    eyebrow: string;
    title: string;
    copy: string;
    target: string;
    items: Array<{ organization: string; role: string; nature: string; copy: string }>;
  };
  story: {
    eyebrow: string;
    title: string;
    intro: string;
    eras: Era[];
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Project[];
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
    sourceHref: string;
    sourceLabel: string;
    proof: Array<{ label: string; value: string }>;
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
    email: string;
    cvLabel: string;
    cv: string;
  };
  footer: string;
};

export const copy: Record<Language, SiteCopy> = {
  it: {
    meta: {
      title: 'Damiano Ciarla | Co-founder & Technology Leader',
      description:
        'Co-founder e technology leader hands-on. Ho guidato Deliverart dalla startup all’acquisizione TeamSystem e oggi costruisco piattaforme e sistemi di applied AI.',
    },
    nav: {
      story: 'Percorso',
      projects: 'Progetti',
      work: 'Lavoro',
      contact: 'Contatto',
      mobileContact: 'Scrivimi',
    },
    utility: {
      skip: 'Vai al contenuto',
      language: 'Cambia lingua',
      scroll: 'Scopri il percorso',
      open: 'Apri',
    },
    hero: {
      eyebrow: 'CO-FOUNDER // TECHNOLOGY LEADER // HANDS-ON',
      title: 'Damiano\nCiarla',
      body:
        'Ho guidato Deliverart dalla fase startup all’acquisizione completa da TeamSystem. Da vent’anni costruisco piattaforme, prodotti e sistemi di applied AI senza allontanarmi dal codice.',
      primary: 'Vedi il mio impatto',
      secondary: 'Parliamo',
      status: 'Roma · disponibile da remoto',
      cv: 'Curriculum',
    },
    now: {
      eyebrow: 'COSA GUIDO OGGI',
      title: 'Tre contesti. Un unico modello operativo.',
      copy:
        'Responsabilità end-to-end su prodotto, architettura e delivery, fino a risultati misurabili.',
      target:
        'Aperto a ruoli CTO o Head of Engineering in aziende di prodotto che stanno evolvendo piattaforme complesse. Disponibile anche per incarichi selezionati di advisory strategico.',
      items: [
        {
          organization: 'Deliverart',
          role: 'Co-founder · CTO fondatore · Technology Lead attuale',
          nature: 'RUOLO OPERATIVO CONTINUATIVO',
          copy: 'Guido un team di 4 persone e resto responsabile dell’evoluzione tecnologica del prodotto dopo l’acquisizione completa da parte di TeamSystem.',
        },
        {
          organization: 'ErinTechLabs',
          role: 'Founder · Applied AI & Product Engineering',
          nature: 'INIZIATIVA IMPRENDITORIALE INDIPENDENTE',
          copy: 'Sviluppo prodotti di applied AI e sistemi software su misura, dalla definizione del problema alla produzione.',
        },
        {
          organization: 'Verisure Italia',
          role: 'Independent Senior Consultant',
          nature: 'INCARICO DI CONSULENZA',
          copy: 'Supporto sistemi business-critical di lead acquisition per il mercato italiano dal 2018.',
        },
      ],
    },
    story: {
      eyebrow: 'VENT’ANNI DI SOFTWARE',
      title: 'Vent’anni a costruire software mentre tecnologie e aziende cambiavano.',
      intro:
        'Dal primo codice alla leadership tecnica, fino a una startup acquisita e ai prodotti AI. Ogni fase ha aggiunto responsabilità, non distanza dal software.',
      eras: [
        {
          year: '2006',
          label: 'INIT',
          title: 'La prima riga',
          copy: 'Inizio a programmare. Il software smette presto di essere solo tecnologia: diventa il mio modo di risolvere problemi.',
          signal: 'learn / build / ship',
        },
        {
          year: '2007—16',
          label: 'PRODUCTION',
          title: 'Dieci anni in produzione',
          copy: 'Java, PHP, JavaScript, piattaforme web e open source. Sistemi operativi, integrazioni e prodotti usati ogni giorno.',
          signal: 'ship / learn / repeat',
        },
        {
          year: '2016—OGGI',
          label: 'SCALE',
          title: 'Da startup ad acquisizione',
          copy: 'Co-fondo Deliverart, ne guido la tecnologia come CTO e accompagno prodotto e piattaforma fino all’acquisizione completa da TeamSystem.',
          signal: 'founder → CTO → acquisition',
        },
        {
          year: '2025—OGGI',
          label: 'AUGMENT',
          title: 'Costruire nell’era AI',
          copy: 'Fondo ErinTechLabs e porto l’AI dentro prodotti e processi reali: dati, vincoli, supervisione e risultati misurabili.',
          signal: 'human × machine',
          href: 'https://erintechlabs.com/',
          linkLabel: 'Visita ErinTechLabs',
        },
      ],
    },
    projects: {
      eyebrow: 'PROGETTI SELEZIONATI',
      title: 'Cose che puoi aprire, usare e ispezionare.',
      intro:
        'Tre progetti rappresentativi del mio modo di lavorare: problemi concreti, architettura leggibile e software che si può usare davvero.',
      items: [
        {
          index: '01',
          label: 'OPEN SOURCE // ACCESSIBILITY TOOLING',
          title: 'FocusPath',
          copy:
            'Ho progettato e rilasciato uno scanner visuale per la navigazione da tastiera. Segue il focus reale in Chromium, rileva problemi deterministici e genera report HTML portabili.',
          signal: 'TypeScript / Playwright / CLI / API / MIT',
          href: 'https://damianociarla.github.io/focuspath/',
          linkLabel: 'Prova FocusPath',
          secondaryHref: 'https://github.com/damianociarla/focuspath',
          secondaryLabel: 'Codice sorgente',
        },
        {
          index: '02',
          label: 'OPEN SOURCE // NODE.JS',
          title: 'node-ffmpeg',
          copy:
            'Mantengo il progetto pubblicato per la prima volta nel 2012. Nel 2026 ne ho guidato la modernizzazione in TypeScript e il rilascio v1.0 per Node.js 24, ESM e CommonJS.',
          signal: '3.8M download npm / ultimi 12 mesi / agosto 2026',
          signalHref: 'https://www.npmjs.com/package/ffmpeg',
          href: 'https://damianociarla.github.io/node-ffmpeg/',
          linkLabel: 'Esplora la documentazione',
          secondaryHref: 'https://github.com/damianociarla/node-ffmpeg',
          secondaryLabel: 'Codice sorgente',
        },
        {
          index: '03',
          label: 'ERINTECHLABS // AI PRODUCT',
          title: 'Documento Facile',
          copy:
            'Sto costruendo un prodotto che applica l’AI alla lettura e al confronto di documenti personali, con normalizzazione dei dati, storico e controllo umano visibile.',
          signal: 'LLM integration / document pipeline / human oversight',
          href: 'https://documentofacile.it/',
          linkLabel: 'Scopri il prodotto',
        },
      ],
    },
    deliverart: {
      eyebrow: 'DELIVERART // STORIA DA FOUNDER',
      title: 'Una startup costruita, cresciuta e acquisita.',
      copy:
        'Ho co-fondato Deliverart nel 2016 e l’ho guidata come CTO, trasformando la complessità del food delivery in una piattaforma operativa. Dopo l’acquisizione da parte di TeamSystem, continuo a guidarne l’evoluzione tecnologica dall’interno.',
      acquisition: 'TeamSystem // 40% 2024 → 100% 2026',
      sdkLabel: 'COSA HO COSTRUITO',
      sdkTitle: 'Una piattaforma modernizzata senza interrompere il servizio.',
      sdkCopy:
        'Frontend Next.js, API Symfony e API Platform, servizi su AWS ECS, test automatici e CI/CD. Un’evoluzione progressiva dell’intera piattaforma, con SDK TypeScript per mantenere coerenti domini, web app e integrazioni.',
      sdkSignal: 'frontend · api · cloud · test · delivery',
      sourceHref: 'https://www.teamsystem.com/media/files/1742_V1--300626--NOTACONS--DEF.pdf',
      sourceLabel: 'Fonte pubblica TeamSystem',
      proof: [
        { label: 'LEADERSHIP', value: 'Team di 4 persone · hiring, onboarding e roadmap' },
        { label: 'ACQUISIZIONE', value: 'Due diligence e integrazione tecnologica TeamSystem' },
        { label: 'DELIVERY', value: 'Rilasci in produzione anche più volte al giorno' },
      ],
    },
    work: {
      eyebrow: 'SISTEMI SELEZIONATI',
      title: 'La tecnologia conta quando cambia il lavoro reale.',
      intro:
        'Due contesti professionali in cui architettura e delivery hanno prodotto risultati verificabili.',
      cases: [
        {
          code: 'CASE_01',
          eyebrow: 'PIANIFICAZIONE TURNI CON AI // CASO ANONIMIZZATO',
          title: 'Turni mensili bilanciati in pochi secondi.',
          copy:
            'In un test sull’intero piano annuale 2026, il sistema ha trasformato regole, vincoli operativi e criteri di equità in turnazioni mensili bilanciate, generando ogni pianificazione in pochi secondi.',
          metrics: [
            { value: 'mensile', label: 'pianificazione ricalcolata a ogni ciclo' },
            { value: '12 mesi', label: 'dataset di pianificazione 2026' },
            { value: 'pochi secondi', label: 'invece di giorni di lavoro manuale' },
          ],
        },
        {
          code: 'CASE_02',
          eyebrow: 'LEAD ACQUISITION ENTERPRISE // CASO ANONIMIZZATO',
          title: 'Lead acquisition multicanale, dall’analisi alla produzione.',
          copy:
            'In un incarico enterprise continuativo sul mercato italiano contribuisco all’analisi, allo sviluppo e alla modernizzazione di un ecosistema che gestisce volumi annui di lead a sei cifre su canali a doppia cifra.',
          metrics: [
            { value: '6 CIFRE/ANNO', label: 'ordine di grandezza del volume di lead' },
            { value: 'DOPPIA CIFRA', label: 'canali di acquisizione collegati' },
            { value: 'DELIVERY', label: 'nuovi flussi rilasciati più rapidamente' },
          ],
        },
      ],
    },
    human: {
      eyebrow: 'OLTRE IL CODICE',
      title: 'Non tutto deve andare in produzione.',
      copy:
        'Quando non costruisco software, costruisco cose in legno, gioco a tennis e apprezzo una buona birra. Possibilmente in quest’ordine.',
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
        'Lavoro, idee, prodotti, conferenze e interventi tecnici o problemi difficili: parto sempre da una conversazione.',
      personalAction: 'scrivimi',
      email: 'damiano.ciarla@gmail.com',
      cvLabel: 'CURRICULUM',
      cv: 'Scarica il curriculum',
    },
    footer: 'Built with TypeScript, WebGL and attention to detail.',
  },
  en: {
    meta: {
      title: 'Damiano Ciarla | Co-founder & Technology Leader',
      description:
        'Co-founder and hands-on technology leader. I led Deliverart from startup to TeamSystem acquisition and now build platforms and applied AI systems.',
    },
    nav: {
      story: 'Story',
      projects: 'Projects',
      work: 'Work',
      contact: 'Contact',
      mobileContact: 'Contact',
    },
    utility: {
      skip: 'Skip to content',
      language: 'Change language',
      scroll: 'Explore the story',
      open: 'Open',
    },
    hero: {
      eyebrow: 'CO-FOUNDER // TECHNOLOGY LEADER // HANDS-ON',
      title: 'Damiano\nCiarla',
      body:
        'I led Deliverart from startup to full acquisition by TeamSystem. For twenty years I have built platforms, products and applied AI systems without stepping away from the code.',
      primary: 'See my impact',
      secondary: 'Let’s talk',
      status: 'Rome, Italy · open to remote roles across Europe',
      cv: 'Curriculum',
    },
    now: {
      eyebrow: 'WHAT I LEAD TODAY',
      title: 'Three contexts. One operating model.',
      copy:
        'End-to-end ownership across product, architecture and delivery, through to measurable outcomes.',
      target:
        'Open to CTO or Head of Engineering roles in product companies modernizing complex platforms. Available for selected strategic advisory engagements.',
      items: [
        {
          organization: 'Deliverart',
          role: 'Co-founder · Founding CTO · Current Technology Lead',
          nature: 'ONGOING LEADERSHIP ROLE',
          copy: 'I lead a four-person team and remain responsible for the product’s technological evolution following its full acquisition by TeamSystem.',
        },
        {
          organization: 'ErinTechLabs',
          role: 'Founder · Applied AI & Product Engineering',
          nature: 'INDEPENDENT VENTURE',
          copy: 'I build applied AI products and custom systems, from problem definition through production delivery.',
        },
        {
          organization: 'Verisure Italy',
          role: 'Independent Senior Consultant',
          nature: 'CONSULTING ENGAGEMENT',
          copy: 'I have supported business-critical lead acquisition systems for the Italian market since 2018.',
        },
      ],
    },
    story: {
      eyebrow: 'TWENTY YEARS IN SOFTWARE',
      title: 'Twenty years building software through technological and business change.',
      intro:
        'From my first code to technical leadership, an acquired startup and AI products. Each phase added responsibility without taking me away from software.',
      eras: [
        {
          year: '2006',
          label: 'INIT',
          title: 'The first line',
          copy: 'I start programming. Software quickly stops being just technology and becomes my way of solving problems.',
          signal: 'learn / build / ship',
        },
        {
          year: '2007—16',
          label: 'PRODUCTION',
          title: 'Ten years in production',
          copy: 'Java, PHP, JavaScript, web platforms and open source. Operational systems, integrations and products used every day.',
          signal: 'ship / learn / repeat',
        },
        {
          year: '2016—PRESENT',
          label: 'SCALE',
          title: 'From startup to acquisition',
          copy: 'I co-founded Deliverart, led its technology as CTO and took its product and platform through to full acquisition by TeamSystem.',
          signal: 'founder → CTO → acquisition',
        },
        {
          year: '2025—PRESENT',
          label: 'AUGMENT',
          title: 'Building in the AI era',
          copy: 'I founded ErinTechLabs and bring AI into real products and operations: data, constraints, oversight and measurable outcomes.',
          signal: 'human × machine',
          href: 'https://erintechlabs.com/',
          linkLabel: 'Visit ErinTechLabs',
        },
      ],
    },
    projects: {
      eyebrow: 'SELECTED PROJECTS',
      title: 'Things you can open, use and inspect.',
      intro:
        'Three projects that represent how I work: concrete problems, legible architecture and software people can actually use.',
      items: [
        {
          index: '01',
          label: 'OPEN SOURCE // ACCESSIBILITY TOOLING',
          title: 'FocusPath',
          copy:
            'I designed and released a visual keyboard-navigation scanner. It follows the real focus path in Chromium, flags deterministic issues and generates portable HTML reports.',
          signal: 'TypeScript / Playwright / CLI / API / MIT',
          href: 'https://damianociarla.github.io/focuspath/',
          linkLabel: 'Try FocusPath',
          secondaryHref: 'https://github.com/damianociarla/focuspath',
          secondaryLabel: 'Source code',
        },
        {
          index: '02',
          label: 'OPEN SOURCE // NODE.JS',
          title: 'node-ffmpeg',
          copy:
            'I maintain the project first released in 2012. In 2026 I led its TypeScript modernization and v1.0 release for Node.js 24, ESM and CommonJS.',
          signal: '3.8M npm downloads / past 12 months / August 2026',
          signalHref: 'https://www.npmjs.com/package/ffmpeg',
          href: 'https://damianociarla.github.io/node-ffmpeg/',
          linkLabel: 'Explore the documentation',
          secondaryHref: 'https://github.com/damianociarla/node-ffmpeg',
          secondaryLabel: 'Source code',
        },
        {
          index: '03',
          label: 'ERINTECHLABS // AI PRODUCT',
          title: 'Documento Facile',
          copy:
            'I am building a product that applies AI to reading and comparing personal documents, with data normalization, historical comparison and visible human oversight.',
          signal: 'LLM integration / document pipeline / human oversight',
          href: 'https://documentofacile.it/',
          linkLabel: 'Explore the product',
        },
      ],
    },
    deliverart: {
      eyebrow: 'DELIVERART // FOUNDER STORY',
      title: 'A startup built, scaled and acquired.',
      copy:
        'I co-founded Deliverart in 2016 and led it as CTO, turning food-delivery complexity into an operational platform. After its acquisition by TeamSystem, I continue to guide its technological evolution from within.',
      acquisition: 'TeamSystem // 40% 2024 → 100% 2026',
      sdkLabel: 'WHAT I BUILT',
      sdkTitle: 'A platform modernized without disrupting operations.',
      sdkCopy:
        'Next.js frontends, Symfony and API Platform APIs, services on AWS ECS, automated tests and CI/CD. A progressive evolution of the whole platform, with TypeScript SDKs keeping domains, web apps and integrations consistent.',
      sdkSignal: 'frontend · api · cloud · tests · delivery',
      sourceHref: 'https://www.teamsystem.com/media/files/1742_V1--300626--NOTACONS--DEF.pdf',
      sourceLabel: 'Public TeamSystem source',
      proof: [
        { label: 'LEADERSHIP', value: 'Four-person team · hiring, onboarding and roadmap' },
        { label: 'ACQUISITION', value: 'Technical due diligence and TeamSystem integration' },
        { label: 'DELIVERY', value: 'Production releases multiple times per day' },
      ],
    },
    work: {
      eyebrow: 'SELECTED SYSTEMS',
      title: 'Technology matters when it changes real work.',
      intro:
        'Two professional contexts where architecture and delivery produced verifiable outcomes.',
      cases: [
        {
          code: 'CASE_01',
          eyebrow: 'AI SHIFT PLANNING // ANONYMIZED CASE',
          title: 'Balanced monthly schedules generated in seconds.',
          copy:
            'In a test covering the full 2026 annual plan, the system turned company rules, operational constraints and fairness criteria into balanced monthly schedules, generating each plan in seconds.',
          metrics: [
            { value: 'monthly', label: 'planning recalculated at every cycle' },
            { value: '12 months', label: '2026 scheduling dataset' },
            { value: 'seconds', label: 'instead of days of manual planning' },
          ],
        },
        {
          code: 'CASE_02',
          eyebrow: 'ENTERPRISE LEAD ACQUISITION // ANONYMIZED CASE',
          title: 'Multichannel lead acquisition, from analysis to production.',
          copy:
            'In an ongoing enterprise engagement in the Italian market, I contribute to the analysis, development and modernization of an ecosystem handling six-figure annual lead volumes across double-digit acquisition channels.',
          metrics: [
            { value: '6 FIGURES/YR', label: 'order of magnitude of annual lead volume' },
            { value: 'DOUBLE-DIGIT', label: 'connected acquisition channels' },
            { value: 'DELIVERY', label: 'new flows released faster' },
          ],
        },
      ],
    },
    human: {
      eyebrow: 'BEYOND CODE',
      title: 'Not everything needs to ship.',
      copy:
        'When I am not building software, I build things from wood, play tennis and enjoy a good beer. Preferably in that order.',
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
      email: 'damiano.ciarla@gmail.com',
      cvLabel: 'CURRICULUM',
      cv: 'Download curriculum',
    },
    footer: 'Built with TypeScript, WebGL and attention to detail.',
  },
};
