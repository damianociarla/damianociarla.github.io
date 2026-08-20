from __future__ import annotations

from pathlib import Path
from typing import Iterable

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen.canvas import Canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf"
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
        "role": "TECHNICAL ENTREPRENEUR  /  AI PROGRAMMER",
        "summary": (
            "Vent'anni nel software tra leadership tecnica, architetture, prodotti e impresa. "
            "Ho co-fondato una startup acquisita da TeamSystem e oggi porto AI, TypeScript e "
            "sistemi distribuiti dentro problemi operativi reali, restando hands-on."
        ),
        "location": "Roma, Italia  /  remote anywhere",
        "sections": {
            "focus": "PROFILO",
            "experience": "ESPERIENZA SELEZIONATA",
            "impact": "IMPATTO",
            "capabilities": "CAPACITA'",
            "earlier": "ESPERIENZA PRECEDENTE",
            "opensource": "OPEN SOURCE",
            "education": "FORMAZIONE",
            "details": "DETTAGLI",
        },
        "current": [
            (
                "2025 - oggi",
                "Founder  /  ErinTechLabs",
                "Software custom, integrazioni e AI applicata. Guida tecnica e delivery di prodotti "
                "costruiti attorno a processi aziendali reali.",
            ),
            (
                "2017 - oggi",
                "Co-founder & technical leadership  /  Deliverart",
                "CTO storico della piattaforma food-tech. Continuo a guidarne l'evoluzione tecnologica "
                "dopo l'acquisizione completa da parte di TeamSystem nel 2026.",
            ),
            (
                "2018 - oggi",
                "IT Consultant  /  Verisure",
                "Analisi e sviluppo di microservizi e sistemi martech per il mercato italiano: "
                "centinaia di migliaia di lead l'anno su circa dieci sistemi e canali.",
            ),
        ],
        "impacts": [
            ("99.7%", "vincoli soddisfatti\nnel fair scheduling"),
            ("3.8M", "download npm\nnegli ultimi 12 mesi"),
            ("100%", "Deliverart acquisita\nda TeamSystem"),
        ],
        "capabilities": [
            "Technical leadership",
            "Architecture & platforms",
            "Applied AI",
            "Hands-on execution",
        ],
        "stack": "TypeScript  /  Node.js  /  React  /  API & SDK  /  AI-LLM  /  Agents  /  Cloud  /  Serverless",
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
        "open_source": (
            "node-ffmpeg - 3.8 milioni di download npm in dodici mesi sulla release storica. "
            "Nel 2026 l'ho modernizzato in TypeScript e rilasciato come v1.0.0 per Node.js 24, ESM e CommonJS."
        ),
        "education": "Diploma di Perito tecnico informatico  /  I.T.I.S. G. Vallauri",
        "footer": "Scrivo software dal 2006. Continuo a farlo perché è ancora il modo più diretto che conosco per cambiare le cose.",
    },
    "en": {
        "file": "damiano-ciarla-cv-en.pdf",
        "role": "TECHNICAL ENTREPRENEUR  /  AI PROGRAMMER",
        "summary": (
            "Twenty years in software across technical leadership, architecture, products and business. "
            "I co-founded a startup acquired by TeamSystem and now bring AI, TypeScript and distributed "
            "systems into real operational problems while staying hands-on."
        ),
        "location": "Rome, Italy  /  remote anywhere",
        "sections": {
            "focus": "PROFILE",
            "experience": "SELECTED EXPERIENCE",
            "impact": "IMPACT",
            "capabilities": "CAPABILITIES",
            "earlier": "EARLIER EXPERIENCE",
            "opensource": "OPEN SOURCE",
            "education": "EDUCATION",
            "details": "DETAILS",
        },
        "current": [
            (
                "2025 - now",
                "Founder  /  ErinTechLabs",
                "Custom software, integrations and applied AI. Technical direction and delivery of products "
                "built around real business operations.",
            ),
            (
                "2017 - now",
                "Co-founder & technical leadership  /  Deliverart",
                "Historical CTO of the food-tech platform. I continue to guide its technological evolution "
                "after TeamSystem completed its acquisition in 2026.",
            ),
            (
                "2018 - now",
                "IT Consultant  /  Verisure",
                "Analysis and development of microservices and martech systems for Italy: hundreds of "
                "thousands of leads per year across roughly ten systems and channels.",
            ),
        ],
        "impacts": [
            ("99.7%", "constraints satisfied\nin fair scheduling"),
            ("3.8M", "npm downloads\nin the last 12 months"),
            ("100%", "Deliverart acquired\nby TeamSystem"),
        ],
        "capabilities": [
            "Technical leadership",
            "Architecture & platforms",
            "Applied AI",
            "Hands-on execution",
        ],
        "stack": "TypeScript  /  Node.js  /  React  /  API & SDK  /  AI-LLM  /  Agents  /  Cloud  /  Serverless",
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
        "open_source": (
            "node-ffmpeg - 3.8 million npm downloads in twelve months on the historical release. "
            "In 2026 I modernized it in TypeScript and released v1.0.0 for Node.js 24, ESM and CommonJS."
        ),
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
    label(canvas, content["sections"]["earlier"], MARGIN_X, y)
    y -= 22

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
        y -= 25

    y -= 3
    line(canvas, MARGIN_X, y, PAGE_W - MARGIN_X)
    y -= 24
    label(canvas, content["sections"]["opensource"], MARGIN_X, y)
    y -= 19
    y = draw_wrapped(canvas, content["open_source"], MARGIN_X, y, PAGE_W - MARGIN_X * 2, size=9.3, leading=13.5, color=INK)
    y -= 9
    add_link(canvas, "github.com/damianociarla/node-ffmpeg", "https://github.com/damianociarla/node-ffmpeg", MARGIN_X, y)

    y -= 31
    line(canvas, MARGIN_X, y, PAGE_W - MARGIN_X)
    y -= 24
    label(canvas, content["sections"]["education"], MARGIN_X, y)
    y -= 20
    canvas.setFillColor(INK)
    canvas.setFont("Helvetica-Bold", 10.5)
    canvas.drawString(MARGIN_X, y, content["education"])

    y -= 38
    line(canvas, MARGIN_X, y, PAGE_W - MARGIN_X)
    y -= 24
    label(canvas, content["sections"]["details"], MARGIN_X, y)
    y -= 21
    x = MARGIN_X
    x = add_link(canvas, "damiano.ciarla@gmail.com", "mailto:damiano.ciarla@gmail.com", x, y) + 18
    x = add_link(canvas, "linkedin.com/in/damianociarla", "https://www.linkedin.com/in/damianociarla/", x, y) + 18
    add_link(canvas, "github.com/damianociarla", "https://github.com/damianociarla", x, y)

    canvas.setFillColor(INK)
    canvas.setFont("Helvetica-Bold", 22)
    footer_lines = wrap(content["footer"], "Helvetica-Bold", 22, PAGE_W - MARGIN_X * 2)
    footer_y = 118
    for text_line in footer_lines:
        canvas.drawString(MARGIN_X, footer_y, text_line)
        footer_y -= 27
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
    canvas.setSubject("Technical Entrepreneur, AI Programmer and Software Architect")
    draw_page_one(canvas, content)
    canvas.showPage()
    draw_page_two(canvas, content)
    canvas.save()
    return output


if __name__ == "__main__":
    for lang in ("it", "en"):
        print(build(lang))
