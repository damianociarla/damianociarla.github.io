from __future__ import annotations

from copy import deepcopy
from pathlib import Path
from shutil import copy2
from typing import Iterable

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen.canvas import Canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf"
PUBLIC_CV = ROOT / "public" / "cv"
PAGE_W, PAGE_H = A4
MARGIN_X = 46
TOP = PAGE_H - 44

INK = HexColor("#11161A")
MUTED = HexColor("#59636A")
LIGHT = HexColor("#E4E7E8")
PAPER = HexColor("#F7F6F2")
AMBER = HexColor("#D98516")
BLUE = HexColor("#167BC0")


CONTENT = {
    "it": {
        "file": "damiano-ciarla-cv-it.pdf",
        "role": "CO-FOUNDER  /  GIÀ CTO  /  TECHNOLOGY LEADER",
        "summary": (
            "Co-founder e technology leader hands-on con vent'anni di esperienza nella costruzione e "
            "modernizzazione di piattaforme digitali. Ho guidato Deliverart dalla fase startup "
            "all'acquisizione completa da TeamSystem, mantenendo responsabilità su prodotto, architettura, "
            "cloud e delivery. Oggi costruisco sistemi di applied AI e prodotti business-critical."
        ),
        "location": "Roma, Italia  /  disponibile da remoto",
        "contact_line": "damiano.ciarla@gmail.com  /  damianociarla.dev  /  linkedin.com/in/damianociarla",
        "languages": "Italiano: madrelingua  /  Inglese: professional working proficiency",
        "sections": {
            "focus": "PROFILO",
            "experience": "ESPERIENZA SELEZIONATA",
            "impact": "IMPATTO",
            "capabilities": "COMPETENZE DISTINTIVE",
            "selected": "SISTEMI E RISULTATI",
            "earlier": "ESPERIENZA PRECEDENTE",
            "projects": "OPEN SOURCE & PRODOTTI",
            "education": "FORMAZIONE",
            "details": "DETTAGLI",
        },
        "current": [
            (
                "2016 - oggi",
                "Co-founder, già CTO & Technology Lead  /  Deliverart",
                "Ruolo di leadership operativo continuativo, anche dopo l'acquisizione.",
                [
                    "Co-fondato Deliverart e guidato tecnologia e prodotto dalla startup all'acquisizione completa da TeamSystem.",
                    "Responsabilità end-to-end su priorità di prodotto, architettura, cloud e delivery; oggi guido l'evoluzione post-acquisizione.",
                    "Modernizzato progressivamente frontend, API, infrastruttura, test, CI/CD e SDK TypeScript mantenendo la piattaforma operativa.",
                ],
                "Next.js / TypeScript / Symfony / API Platform / AWS ECS / testing / CI/CD",
            ),
            (
                "2018 - oggi",
                "Independent Senior Consultant  /  Verisure Italia",
                "Incarico indipendente su sistemi business-critical per il mercato italiano.",
                [
                    "Seguo analisi, solution design e sviluppo hands-on di sistemi di lead acquisition dal 2018.",
                    "Collego processi commerciali, canali e piattaforme digitali in un ecosistema multicanale.",
                    "Miglioro automazione, affidabilità e continuità operativa, riducendo i tempi di delivery nei flussi comparabili.",
                ],
                "Web platforms / AWS / multichannel integrations / automation",
            ),
            (
                "2025 - oggi",
                "Founder & Applied AI Lead  /  ErinTechLabs",
                "Iniziativa imprenditoriale indipendente dedicata ad applied AI e product engineering.",
                [
                    "Porto i prodotti dalla discovery alla messa in produzione, mantenendo ownership su architettura e implementazione.",
                    "Sviluppato un motore che ricalcola turnazioni mensili in pochi secondi invece di giorni di pianificazione manuale.",
                    "Sto costruendo Documento Facile: pipeline AI per lettura, normalizzazione e confronto storico di documenti con supervisione umana.",
                ],
                "Applied AI / LLM systems / document pipelines / human-in-the-loop",
            ),
        ],
        "impacts": [
            ("20 anni", "software dal 2006\nancora hands-on"),
            ("STARTUP EXIT", "Deliverart acquisita\nda TeamSystem nel 2026"),
            ("3.8M", "download npm\n12 mesi fino ad agosto 2026"),
        ],
        "capabilities": [
            "Technology & product leadership",
            "Platform architecture",
            "Hands-on engineering delivery",
            "Applied AI product systems",
        ],
        "stack": "TypeScript  /  Next.js  /  Node.js  /  Symfony  /  API Platform  /  AWS  /  CI/CD  /  Applied AI",
        "selected": [
            (
                "Deliverart  /  Modernizzazione end-to-end",
                "Ho scelto una modernizzazione incrementale invece di una riscrittura isolata, facendo "
                "evolvere frontend, API, servizi cloud e processi di delivery mentre il prodotto restava "
                "operativo. Contratti tipizzati, SDK condivisi, test automatici e CI/CD hanno reso più "
                "coerente il lavoro tra domini e integrazioni.",
                "Next.js / TypeScript / Symfony / API Platform / AWS ECS / automated testing / CI/CD",
            ),
            (
                "Applied AI  /  Sistemi operativi",
                "Ho progettato un motore che traduce regole aziendali, vincoli operativi e criteri di equità "
                "in turnazioni mensili bilanciate. In parallelo sviluppo pipeline documentali che combinano "
                "LLM, normalizzazione, confronti storici e supervisione umana per produrre risultati "
                "comprensibili, verificabili e utili.",
                "12 mesi di pianificazione / turnazioni mensili / secondi invece di giorni manuali",
            ),
            (
                "Verisure Italia  /  Consulenza senior",
                "Lavoro dal problema operativo fino alla soluzione in produzione: analisi dei flussi, "
                "disegno dell'integrazione, sviluppo e miglioramento continuo. Il risultato è un ecosistema "
                "capace di coordinare più canali e ridurre i tempi di delivery rispetto a processi comparabili.",
                "multicanale / automazione / affidabilità / continuità operativa",
            ),
        ],
        "earlier": [
            ("2016 - 2017", "Senior PHP Programmer", "CarPlanner"),
            ("2015 - 2016", "Senior PHP Developer / Symfony 2 Specialist", "DigiTouch S.p.A."),
            ("2010 - 2015", "Analyst / Developer", "TheBlogTV S.p.A."),
            ("2010", "Developer", "Onemeet S.p.A."),
            ("2009 - 2010", "Developer / Frontend", "Tecnorg"),
            ("2009", "Java / JavaScript Developer", "Proxima"),
            ("2008 - 2009", "PHP / Frontend Developer", "Cpu Group S.r.l."),
            ("2007", "Intern / Developer", "Web Site S.r.l."),
        ],
        "projects": [
            (
                "FocusPath",
                "Creator e maintainer di uno scanner visuale open source per la navigazione da tastiera, distribuito come CLI, libreria, web app e API.",
                "focuspath",
                "https://damianociarla.github.io/focuspath/",
            ),
            (
                "node-ffmpeg",
                "Maintainer; 3.8M download npm nei 12 mesi fino ad agosto 2026 sulle versioni precedenti. Ho guidato modernizzazione TypeScript e v1.0.",
                "node-ffmpeg",
                "https://github.com/damianociarla/node-ffmpeg",
            ),
            (
                "Documento Facile",
                "Prodotto AI per comprendere e confrontare documenti personali, mantenendo il controllo umano sempre visibile.",
                "documentofacile.it",
                "https://documentofacile.it/",
            ),
        ],
        "education": "Diploma di Perito tecnico informatico  /  I.T.I.S. G. Vallauri",
        "footer": "Technology leadership  /  platform architecture  /  applied AI  /  damianociarla.dev",
    },
    "en": {
        "file": "damiano-ciarla-cv-en.pdf",
        "role": "CO-FOUNDER  /  FORMER CTO  /  TECHNOLOGY LEADER",
        "summary": (
            "Co-founder and hands-on technology leader with twenty years of experience building and "
            "modernizing digital platforms. I led Deliverart from startup to full acquisition by TeamSystem, "
            "retaining responsibility across product, architecture, cloud and delivery. Today I build "
            "applied AI systems and business-critical products."
        ),
        "location": "Rome, Italy  /  open to remote roles across Europe",
        "contact_line": "damiano.ciarla@gmail.com  /  damianociarla.dev  /  linkedin.com/in/damianociarla",
        "languages": "Italian: native  /  English: professional working proficiency",
        "sections": {
            "focus": "PROFILE",
            "experience": "SELECTED EXPERIENCE",
            "impact": "IMPACT",
            "capabilities": "DISTINCTIVE EXPERTISE",
            "selected": "SELECTED SYSTEMS & OUTCOMES",
            "earlier": "EARLIER EXPERIENCE",
            "projects": "OPEN SOURCE & PRODUCTS",
            "education": "EDUCATION",
            "details": "DETAILS",
        },
        "current": [
            (
                "2016 - Present",
                "Co-founder, former CTO & Technology Lead  /  Deliverart",
                "Ongoing leadership role, including after the acquisition.",
                [
                    "Co-founded Deliverart and led technology and product from startup to full acquisition by TeamSystem.",
                    "Owned product priorities, architecture, cloud and delivery; I now lead the post-acquisition technological evolution.",
                    "Modernized frontends, APIs, infrastructure, tests, CI/CD and TypeScript SDKs incrementally while keeping the platform operational.",
                ],
                "Next.js / TypeScript / Symfony / API Platform / AWS ECS / testing / CI/CD",
            ),
            (
                "2018 - Present",
                "Independent Senior Consultant  /  Verisure Italy",
                "Independent engagement on business-critical systems for the Italian market.",
                [
                    "Work across analysis, solution design and hands-on development of lead acquisition systems since 2018.",
                    "Connect commercial processes, channels and digital platforms across a multichannel ecosystem.",
                    "Improve automation, reliability and operational continuity while shortening delivery timelines across comparable workflows.",
                ],
                "Web platforms / AWS / multichannel integrations / automation",
            ),
            (
                "2025 - Present",
                "Founder & Applied AI Lead  /  ErinTechLabs",
                "Independent venture focused on applied AI and product engineering.",
                [
                    "Take products from discovery to production while retaining ownership of architecture and implementation.",
                    "Built an engine that recalculates monthly schedules in seconds instead of days of manual planning.",
                    "Building Documento Facile: an AI pipeline for reading, normalizing and historically comparing documents with human oversight.",
                ],
                "Applied AI / LLM systems / document pipelines / human-in-the-loop",
            ),
        ],
        "impacts": [
            ("20 years", "building since 2006\nstill hands-on"),
            ("STARTUP EXIT", "Deliverart acquired\nby TeamSystem in 2026"),
            ("3.8M", "npm downloads\n12 months ending Aug 2026"),
        ],
        "capabilities": [
            "Technology & product leadership",
            "Platform architecture",
            "Hands-on engineering delivery",
            "Applied AI product systems",
        ],
        "stack": "TypeScript  /  Next.js  /  Node.js  /  Symfony  /  API Platform  /  AWS  /  CI/CD  /  Applied AI",
        "selected": [
            (
                "Deliverart  /  End-to-end modernization",
                "I chose incremental modernization over an isolated rewrite, evolving frontends, APIs, "
                "cloud services and delivery processes while the product remained operational. Typed "
                "contracts, shared SDKs, automated tests and CI/CD improved consistency across domains and "
                "integrations.",
                "Next.js / TypeScript / Symfony / API Platform / AWS ECS / automated testing / CI/CD",
            ),
            (
                "Applied AI  /  Operational systems",
                "I designed an engine that translates company rules, operational constraints and fairness "
                "criteria into balanced monthly schedules. In parallel, I build document pipelines combining "
                "LLMs, normalization, historical comparison and human oversight to produce understandable, "
                "verifiable and useful outcomes.",
                "12 months of planning / monthly schedules / seconds instead of days of manual planning",
            ),
            (
                "Verisure Italy  /  Senior consulting",
                "I work from the operational problem to the production solution: flow analysis, "
                "integration design, development and continuous improvement. The result is an ecosystem able "
                "to coordinate multiple channels and shorten delivery timelines compared with similar processes.",
                "multichannel / automation / reliability / operational continuity",
            ),
        ],
        "earlier": [
            ("2016 - 2017", "Senior PHP Programmer", "CarPlanner"),
            ("2015 - 2016", "Senior PHP Developer / Symfony 2 Specialist", "DigiTouch S.p.A."),
            ("2010 - 2015", "Analyst / Developer", "TheBlogTV S.p.A."),
            ("2010", "Developer", "Onemeet S.p.A."),
            ("2009 - 2010", "Developer / Frontend", "Tecnorg"),
            ("2009", "Java / JavaScript Developer", "Proxima"),
            ("2008 - 2009", "PHP / Frontend Developer", "Cpu Group S.r.l."),
            ("2007", "Intern / Developer", "Web Site S.r.l."),
        ],
        "projects": [
            (
                "FocusPath",
                "Creator and maintainer of an open-source visual keyboard-navigation scanner shipped as a CLI, library, web app and API.",
                "focuspath",
                "https://damianociarla.github.io/focuspath/",
            ),
            (
                "node-ffmpeg",
                "Maintainer; 3.8M npm downloads in the 12 months ending August 2026 on earlier versions. Led the TypeScript modernization and v1.0 release.",
                "node-ffmpeg",
                "https://github.com/damianociarla/node-ffmpeg",
            ),
            (
                "Documento Facile",
                "An AI product for understanding and comparing personal documents while keeping human control visible.",
                "documentofacile.it",
                "https://documentofacile.it/",
            ),
        ],
        "education": "Technical Diploma in Computer Science  /  I.T.I.S. G. Vallauri",
        "footer": "Technology leadership  /  platform architecture  /  applied AI  /  damianociarla.dev",
    },
}


def wrap(text: str, font: str, size: float, width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if stringWidth(candidate, font, size) <= width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(
    canvas: Canvas,
    text: str,
    x: float,
    y: float,
    width: float,
    font: str = "Helvetica",
    size: float = 9.2,
    leading: float = 13.2,
    color=MUTED,
) -> float:
    canvas.setFont(font, size)
    canvas.setFillColor(color)
    for line in wrap(text, font, size, width):
        canvas.drawString(x, y, line)
        y -= leading
    return y


def label(canvas: Canvas, text: str, x: float, y: float, color=BLUE) -> None:
    canvas.setFillColor(color)
    canvas.setFont("Courier-Bold", 7.2)
    canvas.drawString(x, y, text)


def line(canvas: Canvas, x1: float, y: float, x2: float, color=LIGHT, width: float = 0.7) -> None:
    canvas.setStrokeColor(color)
    canvas.setLineWidth(width)
    canvas.line(x1, y, x2, y)


def page_number(canvas: Canvas, page: int) -> None:
    canvas.setFillColor(MUTED)
    canvas.setFont("Courier", 6.6)
    canvas.drawRightString(PAGE_W - MARGIN_X, 25, f"DAMIANO_CIARLA.CV  /  0{page}")


def add_link(canvas: Canvas, text: str, url: str, x: float, y: float) -> float:
    canvas.setFont("Courier", 7.2)
    canvas.setFillColor(INK)
    canvas.drawString(x, y, text)
    width = stringWidth(text, "Courier", 7.2)
    canvas.linkURL(url, (x, y - 2, x + width, y + 8), relative=0)
    return x + width


def draw_header(canvas: Canvas, content: dict, page: int) -> float:
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    canvas.setFillColor(INK)
    canvas.setFont("Helvetica-Bold", 26)
    canvas.drawString(MARGIN_X, TOP, "Damiano Ciarla")
    canvas.setFont("Courier-Bold", 7.5)
    canvas.setFillColor(AMBER)
    canvas.drawString(MARGIN_X, TOP - 18, content["role"])
    canvas.setFillColor(MUTED)
    canvas.setFont("Courier", 7)
    canvas.drawRightString(PAGE_W - MARGIN_X, TOP - 3, content["location"])
    if page == 1:
        canvas.setFont("Courier", 5.6)
        canvas.drawRightString(PAGE_W - MARGIN_X, TOP - 14, content["contact_line"])
        canvas.setFont("Courier", 5.9)
        canvas.drawRightString(PAGE_W - MARGIN_X, TOP - 25, content["languages"])
        rule_y = TOP - 39
        content_y = TOP - 59
    else:
        rule_y = TOP - 31
        content_y = TOP - 52
    line(canvas, MARGIN_X, rule_y, PAGE_W - MARGIN_X, INK, 1)
    page_number(canvas, page)
    return content_y


def draw_page_one(canvas: Canvas, content: dict) -> None:
    y = draw_header(canvas, content, 1)
    label(canvas, content["sections"]["focus"], MARGIN_X, y)
    y -= 19
    y = draw_wrapped(canvas, content["summary"], MARGIN_X, y, PAGE_W - MARGIN_X * 2, size=11, leading=15, color=INK)
    y -= 18
    line(canvas, MARGIN_X, y, PAGE_W - MARGIN_X)
    y -= 24
    label(canvas, content["sections"]["experience"], MARGIN_X, y)
    y -= 23

    for dates, title, context, bullets, technology in content["current"]:
        canvas.setFont("Courier-Bold", 7.2)
        canvas.setFillColor(AMBER)
        canvas.drawString(MARGIN_X, y, dates)
        canvas.setFont("Helvetica-Bold", 10.7)
        canvas.setFillColor(INK)
        canvas.drawString(MARGIN_X + 98, y, title)
        content_x = MARGIN_X + 98
        content_width = PAGE_W - MARGIN_X * 2 - 98
        y -= 15
        y = draw_wrapped(canvas, context, content_x, y, content_width, font="Helvetica-Bold", size=7.8, leading=10.2)
        y -= 2
        for bullet in bullets:
            canvas.setFillColor(AMBER)
            canvas.circle(content_x + 1.5, y + 2.5, 1.25, stroke=0, fill=1)
            y = draw_wrapped(canvas, bullet, content_x + 9, y, content_width - 9, size=7.8, leading=10.2)
            y -= 1.5
        y = draw_wrapped(canvas, technology, content_x, y, content_width, font="Courier", size=5.9, leading=8, color=BLUE)
        y -= 11

    line(canvas, MARGIN_X, y, PAGE_W - MARGIN_X)
    y -= 24
    label(canvas, content["sections"]["impact"], MARGIN_X, y)
    y -= 18

    col_width = (PAGE_W - MARGIN_X * 2) / 3
    for index, (value, description) in enumerate(content["impacts"]):
        x = MARGIN_X + index * col_width
        if index:
            canvas.setStrokeColor(LIGHT)
            canvas.line(x - 13, y + 10, x - 13, y - 55)
        metric_size = 20 if len(value) > 9 else 27
        canvas.setFont("Helvetica-Bold", metric_size)
        canvas.setFillColor(BLUE if index == 1 else INK)
        canvas.drawString(x, y - 5, value)
        canvas.setFont("Courier", 6.8)
        canvas.setFillColor(MUTED)
        for offset, text_line in enumerate(description.split("\n")):
            canvas.drawString(x, y - 25 - offset * 9, text_line.upper())

    y -= 84
    line(canvas, MARGIN_X, y, PAGE_W - MARGIN_X)
    y -= 24
    label(canvas, content["sections"]["capabilities"], MARGIN_X, y)
    y -= 19
    for index, capability in enumerate(content["capabilities"]):
        x = MARGIN_X + (index % 2) * (PAGE_W - MARGIN_X * 2) / 2
        row_y = y - (index // 2) * 27
        canvas.setFillColor(INK)
        canvas.setFont("Helvetica-Bold", 10.2)
        canvas.drawString(x, row_y, capability)
        canvas.setFillColor(AMBER)
        canvas.circle(x - 9, row_y + 3, 1.7, stroke=0, fill=1)
    y -= 62
    canvas.setFont("Courier", 6.8)
    canvas.setFillColor(MUTED)
    canvas.drawString(MARGIN_X, y, content["stack"])


def draw_page_two(canvas: Canvas, content: dict) -> None:
    y = draw_header(canvas, content, 2)
    label(canvas, content["sections"]["selected"], MARGIN_X, y)
    y -= 22

    for title, description, signal in content["selected"]:
        canvas.setFillColor(INK)
        canvas.setFont("Helvetica-Bold", 10.5)
        canvas.drawString(MARGIN_X, y, title)
        y -= 16
        y = draw_wrapped(canvas, description, MARGIN_X, y, PAGE_W - MARGIN_X * 2, size=8.5, leading=11.5)
        canvas.setFillColor(BLUE)
        canvas.setFont("Courier", 6.3)
        canvas.drawString(MARGIN_X, y, signal)
        y -= 23

    line(canvas, MARGIN_X, y, PAGE_W - MARGIN_X)
    y -= 24
    label(canvas, content["sections"]["earlier"], MARGIN_X, y)
    y -= 20

    for dates, role, company in content["earlier"]:
        canvas.setFillColor(MUTED)
        canvas.setFont("Courier", 7)
        canvas.drawString(MARGIN_X, y, dates)
        canvas.setFillColor(INK)
        canvas.setFont("Helvetica-Bold", 9.5)
        canvas.drawString(MARGIN_X + 90, y, role)
        canvas.setFillColor(MUTED)
        canvas.setFont("Helvetica", 8.4)
        canvas.drawRightString(PAGE_W - MARGIN_X, y, company)
        y -= 20

    line(canvas, MARGIN_X, y, PAGE_W - MARGIN_X)
    y -= 24
    label(canvas, content["sections"]["projects"], MARGIN_X, y)
    y -= 21
    project_gap = 14
    project_width = (PAGE_W - MARGIN_X * 2 - project_gap * 2) / 3
    project_top = y
    project_bottom = y
    for index, (title, description, link_text, url) in enumerate(content["projects"]):
        x = MARGIN_X + index * (project_width + project_gap)
        canvas.setFillColor(INK)
        canvas.setFont("Helvetica-Bold", 10.2)
        canvas.drawString(x, project_top, title)
        next_y = draw_wrapped(
            canvas,
            description,
            x,
            project_top - 15,
            project_width,
            size=7.8,
            leading=10.2,
            color=MUTED,
        )
        add_link(canvas, link_text, url, x, next_y - 1)
        project_bottom = min(project_bottom, next_y - 1)

    y = project_bottom - 22
    line(canvas, MARGIN_X, y, PAGE_W - MARGIN_X)
    y -= 24
    label(canvas, content["sections"]["education"], MARGIN_X, y)
    y -= 20
    canvas.setFillColor(INK)
    canvas.setFont("Helvetica-Bold", 10.5)
    canvas.drawString(MARGIN_X, y, content["education"])

    y -= 31
    line(canvas, MARGIN_X, y, PAGE_W - MARGIN_X)
    y -= 24
    label(canvas, content["sections"]["details"], MARGIN_X, y)
    y -= 21
    x = add_link(canvas, "damianociarla.dev", "https://damianociarla.dev/", MARGIN_X, y) + 22
    add_link(canvas, "damiano.ciarla@gmail.com", "mailto:damiano.ciarla@gmail.com", x, y)
    y -= 18
    x = add_link(canvas, "linkedin.com/in/damianociarla", "https://www.linkedin.com/in/damianociarla/", MARGIN_X, y) + 22
    add_link(canvas, "github.com/damianociarla", "https://github.com/damianociarla", x, y)

def build(language: str) -> Path:
    content = deepcopy(CONTENT[language])
    output = OUTPUT / content["file"]
    output.parent.mkdir(parents=True, exist_ok=True)
    canvas = Canvas(str(output), pagesize=A4, pageCompression=1)
    canvas.setTitle(f"Damiano Ciarla - Curriculum Vitae ({language.upper()})")
    canvas.setAuthor("Damiano Ciarla")
    canvas.setSubject(content["role"].replace("  /  ", " | "))
    draw_page_one(canvas, content)
    canvas.showPage()
    draw_page_two(canvas, content)
    canvas.save()
    return output


if __name__ == "__main__":
    PUBLIC_CV.mkdir(parents=True, exist_ok=True)
    for lang in ("it", "en"):
        generated = build(lang)
        published = PUBLIC_CV / generated.name
        copy2(generated, published)
        print(generated)
        print(published)
