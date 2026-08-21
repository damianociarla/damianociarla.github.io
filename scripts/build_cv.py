from __future__ import annotations

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
        "role": "TECHNICAL LEADER  /  SOFTWARE ARCHITECT  /  AI ENGINEER",
        "summary": (
            "Technical leader e software architect hands-on con vent'anni di esperienza. Guido "
            "modernizzazioni end-to-end, trasformo architetture in piattaforme affidabili e porto l'AI "
            "dentro prodotti reali. Ho co-fondato una startup acquisita da TeamSystem."
        ),
        "location": "Roma, Italia  /  remote anywhere",
        "sections": {
            "focus": "PROFILO",
            "experience": "ESPERIENZA SELEZIONATA",
            "impact": "IMPATTO",
            "capabilities": "CAPACITA'",
            "selected": "SISTEMI E RISULTATI",
            "earlier": "ESPERIENZA PRECEDENTE",
            "projects": "OPEN SOURCE & PRODOTTI",
            "education": "FORMAZIONE",
            "details": "DETTAGLI",
        },
        "current": [
            (
                "2025 - oggi",
                "Founder & AI Product Builder  /  ErinTechLabs",
                "Guida tecnica e delivery hands-on di prodotti AI e software custom. Tra i progetti: "
                "un motore di turnazione validato sul piano 2026 e Documento Facile, prodotto per "
                "comprendere e confrontare documenti personali.",
            ),
            (
                "2017 - oggi",
                "Co-founder & Technical Leader  /  Deliverart",
                "CTO storico e guida dell'evoluzione end-to-end della piattaforma food-tech: prodotto, "
                "architettura, cloud e delivery. Ho accompagnato Deliverart fino all'acquisizione completa "
                "da TeamSystem nel 2026 e continuo a coordinarne l'evoluzione tecnica.",
            ),
            (
                "2018 - oggi",
                "Senior IT Consultant  /  Verisure Italia",
                "Consulenza continuativa su sistemi business-critical di lead acquisition. Contribuisco "
                "ad analisi, architettura e sviluppo di flussi multicanale, con focus su automazione, "
                "affidabilità e riduzione della complessità operativa.",
            ),
        ],
        "impacts": [
            ("20+", "anni di software\ne delivery reale"),
            ("99.7%", "vincoli soddisfatti\nnel piano 2026"),
            ("3.8M", "download npm\nnegli ultimi 12 mesi"),
        ],
        "capabilities": [
            "Technical leadership",
            "Platform modernization",
            "Applied AI",
            "Hands-on delivery",
        ],
        "stack": "TypeScript  /  Next.js  /  Node.js  /  Symfony  /  API Platform  /  AWS  /  CI/CD  /  AI-LLM",
        "selected": [
            (
                "Deliverart  /  Modernizzazione end-to-end",
                "Ho guidato l'evoluzione progressiva dell'intera piattaforma mantenendo il prodotto "
                "operativo: frontend moderni, API robuste, servizi containerizzati, test automatici, "
                "pipeline CI/CD e SDK condivisi tra più domini.",
                "Next.js / TypeScript / Symfony / API Platform / AWS ECS / automated testing / CI/CD",
            ),
            (
                "Applied AI  /  Sistemi operativi",
                "Ho progettato un motore di pianificazione che trasforma regole, vincoli ed equità in "
                "turnazioni mensili bilanciate, oltre a prodotti AI per analizzare e confrontare documenti.",
                "99.7% vincoli soddisfatti / piano 2026 / secondi invece di giorni-uomo",
            ),
            (
                "Verisure Italia  /  Consulenza senior",
                "Contribuisco a sistemi di lead acquisition business-critical attraverso analisi, sviluppo "
                "e modernizzazione continua di flussi multicanale, con focus su automazione, affidabilità "
                "e continuità operativa.",
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
                "Scanner visuale open source per la navigazione da tastiera, costruito con TypeScript e Playwright come CLI, libreria, web app e API.",
                "focuspath",
                "https://damianociarla.github.io/focuspath/",
            ),
            (
                "node-ffmpeg",
                "3.8M download npm in 12 mesi sulla release storica; modernizzato in TypeScript e rilasciato v1.0.0 nel 2026.",
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
        "footer": "Scrivo software dal 2006. Continuo a farlo perché è ancora il modo più diretto che conosco per cambiare le cose.",
    },
    "en": {
        "file": "damiano-ciarla-cv-en.pdf",
        "role": "TECHNICAL LEADER  /  SOFTWARE ARCHITECT  /  AI ENGINEER",
        "summary": (
            "Hands-on technical leader and software architect with twenty years of experience. I lead "
            "end-to-end modernization, turn architectures into reliable platforms and bring AI into real "
            "products. I co-founded a startup acquired by TeamSystem."
        ),
        "location": "Rome, Italy  /  remote anywhere",
        "sections": {
            "focus": "PROFILE",
            "experience": "SELECTED EXPERIENCE",
            "impact": "IMPACT",
            "capabilities": "CAPABILITIES",
            "selected": "SELECTED SYSTEMS & OUTCOMES",
            "earlier": "EARLIER EXPERIENCE",
            "projects": "OPEN SOURCE & PRODUCTS",
            "education": "EDUCATION",
            "details": "DETAILS",
        },
        "current": [
            (
                "2025 - now",
                "Founder & AI Product Builder  /  ErinTechLabs",
                "Technical direction and hands-on delivery of AI products and custom software. Projects "
                "include a scheduling engine validated across the 2026 plan and Documento Facile, a "
                "product for understanding and comparing personal documents.",
            ),
            (
                "2017 - now",
                "Co-founder & Technical Leader  /  Deliverart",
                "Historical CTO and leader of the food-tech platform's end-to-end evolution across product, "
                "architecture, cloud and delivery. I led Deliverart through its full acquisition by "
                "TeamSystem in 2026 and continue to guide its technical evolution.",
            ),
            (
                "2018 - now",
                "Senior IT Consultant  /  Verisure Italy",
                "Long-term consulting on business-critical lead acquisition systems. I contribute to "
                "analysis, architecture and development of multichannel flows, focusing on automation, "
                "reliability and reduced operational complexity.",
            ),
        ],
        "impacts": [
            ("20+", "years of software\nand real delivery"),
            ("99.7%", "constraints satisfied\nin the 2026 plan"),
            ("3.8M", "npm downloads\nin the last 12 months"),
        ],
        "capabilities": [
            "Technical leadership",
            "Platform modernization",
            "Applied AI",
            "Hands-on delivery",
        ],
        "stack": "TypeScript  /  Next.js  /  Node.js  /  Symfony  /  API Platform  /  AWS  /  CI/CD  /  AI-LLM",
        "selected": [
            (
                "Deliverart  /  End-to-end modernization",
                "I led the progressive evolution of the entire platform while keeping the product live: "
                "modern frontends, robust APIs, containerized services, automated tests, CI/CD pipelines "
                "and shared SDKs across multiple domains.",
                "Next.js / TypeScript / Symfony / API Platform / AWS ECS / automated testing / CI/CD",
            ),
            (
                "Applied AI  /  Operational systems",
                "I designed a planning engine that turns rules, constraints and fairness into balanced "
                "monthly schedules, alongside AI products for analyzing and comparing documents.",
                "99.7% constraints satisfied / 2026 plan / seconds instead of person-days",
            ),
            (
                "Verisure Italy  /  Senior consulting",
                "I contribute to business-critical lead acquisition systems through analysis, development "
                "and continuous modernization of multichannel flows, focusing on automation, reliability "
                "and operational continuity.",
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
                "An open-source visual keyboard-navigation scanner built with TypeScript and Playwright as a CLI, library, web app and API.",
                "focuspath",
                "https://damianociarla.github.io/focuspath/",
            ),
            (
                "node-ffmpeg",
                "3.8M npm downloads in 12 months on the historical release; modernized in TypeScript and released as v1.0.0 in 2026.",
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
        "education": "Diploma in Information Technology  /  I.T.I.S. G. Vallauri",
        "footer": "I have written software since 2006. I still do because it remains the most direct way I know to change things.",
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
    line(canvas, MARGIN_X, TOP - 31, PAGE_W - MARGIN_X, INK, 1)
    page_number(canvas, page)
    return TOP - 52


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

    for dates, title, description in content["current"]:
        canvas.setFont("Courier-Bold", 7.2)
        canvas.setFillColor(AMBER)
        canvas.drawString(MARGIN_X, y, dates)
        canvas.setFont("Helvetica-Bold", 11.5)
        canvas.setFillColor(INK)
        canvas.drawString(MARGIN_X + 98, y, title)
        y -= 17
        y = draw_wrapped(canvas, description, MARGIN_X + 98, y, PAGE_W - MARGIN_X * 2 - 98, size=8.7, leading=12.3)
        y -= 16

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
        canvas.setFont("Helvetica-Bold", 27)
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

    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica-Bold", 7.5)
    canvas.drawString(MARGIN_X, 48, content["footer"])
    canvas.setStrokeColor(BLUE)
    canvas.setLineWidth(2)
    canvas.line(MARGIN_X, 61, MARGIN_X + 72, 61)


def build(language: str) -> Path:
    content = CONTENT[language]
    output = OUTPUT / content["file"]
    output.parent.mkdir(parents=True, exist_ok=True)
    canvas = Canvas(str(output), pagesize=A4, pageCompression=1)
    canvas.setTitle(f"Damiano Ciarla - CV ({language.upper()})")
    canvas.setAuthor("Damiano Ciarla")
    canvas.setSubject("Technical Leader, Software Architect and AI Engineer")
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
