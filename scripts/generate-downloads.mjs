import { mkdir, readFile, writeFile } from "node:fs/promises";
import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

const FOREST = rgb(18 / 255, 61 / 255, 46 / 255);
const LIME = rgb(184 / 255, 201 / 255, 74 / 255);
const INK = rgb(26 / 255, 26 / 255, 26 / 255);
const MUTED = rgb(92 / 255, 102 / 255, 96 / 255);
const LINE = rgb(213 / 255, 221 / 255, 214 / 255);
const PAPER = rgb(250 / 255, 251 / 255, 248 / 255);
const WHITE = rgb(1, 1, 1);

const REG = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf";
const BOLD = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf";

function wrap(text, font, size, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(next, size) <= maxWidth) {
      line = next;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function header(page, font, bold, title, subtitle) {
  const { width, height } = page.getSize();
  page.drawRectangle({ x: 0, y: height - 72, width, height: 72, color: FOREST });
  page.drawRectangle({ x: 0, y: height - 76, width, height: 4, color: LIME });
  page.drawText("STRADE NUOVE", {
    x: 48,
    y: height - 38,
    size: 14,
    font: bold,
    color: WHITE,
  });
  page.drawText("conoscere e approfondire", {
    x: 48,
    y: height - 54,
    size: 8,
    font,
    color: LIME,
  });
  page.drawText(title, {
    x: 260,
    y: height - 36,
    size: 11,
    font: bold,
    color: WHITE,
  });
  page.drawText(subtitle, {
    x: 260,
    y: height - 52,
    size: 8,
    font,
    color: LIME,
  });
}

function footer(page, font, pageNumber, pages) {
  const { width } = page.getSize();
  page.drawRectangle({ x: 0, y: 0, width, height: 36, color: FOREST });
  page.drawText("info@stradenuove.net  ·  tel. 010 8955716  ·  www.stradenuove.net", {
    x: 48,
    y: 14,
    size: 8,
    font,
    color: WHITE,
  });
  page.drawText(`${pageNumber}/${pages}`, {
    x: width - 64,
    y: 14,
    size: 8,
    font,
    color: LIME,
  });
}

async function fonts(doc) {
  doc.registerFontkit(fontkit);
  const font = await doc.embedFont(await readFile(REG), { subset: true });
  const bold = await doc.embedFont(await readFile(BOLD), { subset: true });
  return { font, bold };
}

async function listino() {
  const doc = await PDFDocument.create();
  const { font, bold } = await fonts(doc);
  const page = doc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  header(
    page,
    font,
    bold,
    "LISTINO PARTNER  ·  ASPHALTICA 2026",
    "Numero speciale  ·  Le Strade del Futuro  ·  tra CAM e IA",
  );
  footer(page, font, 1, 1);

  let y = height - 110;
  page.drawText("Opportunità di partecipazione", {
    x: 48,
    y,
    size: 18,
    font: bold,
    color: FOREST,
  });
  y -= 22;
  for (const line of wrap(
    "Due pacchetti editoriali per il numero speciale cartaceo Strade Nuove dedicato ad Asphaltica 2026 (7–10 ottobre, BolognaFiere, Padiglione 37). I pacchetti sono personalizzabili su richiesta.",
    font,
    10,
    width - 96,
  )) {
    page.drawText(line, { x: 48, y, size: 10, font, color: MUTED });
    y -= 14;
  }

  const packs = [
    {
      title: "PACCHETTO PREMIUM",
      price: "€ 1.000",
      items: [
        "Publi-redazionale aziendale dedicato sul magazine cartaceo Strade Nuove — Speciale Asphaltica.",
        "Post dedicati sulla rete social del Network, con una capacità di disseminazione complessiva di 367.347 contatti raggiunti.",
        "Video aziendale dedicato sul portale web della testata, se fornito, o sulla Web TV.",
        "Presenza su ulteriori servizi multimediali del Network, secondo la pianificazione della Direzione Editoriale, con il supporto dell’Ufficio Marketing.",
      ],
    },
    {
      title: "OFFICIAL PARTNER",
      price: "€ 2.000",
      items: [
        "Publi-redazionale aziendale dedicato con maggiore visibilità sul magazine cartaceo Strade Nuove — Speciale Asphaltica.",
        "Evidenza privilegiata all’interno del numero speciale.",
        "Distribuzione durante la manifestazione.",
        "3 pubblicazioni social dedicate.",
        "2 stories social.",
        "Possibilità di approfondimento tecnico o case history.",
      ],
    },
  ];

  for (const pack of packs) {
    y -= 18;
    page.drawRectangle({
      x: 48,
      y: y - 18,
      width: width - 96,
      height: 36,
      color: FOREST,
    });
    page.drawText(pack.title, { x: 60, y: y - 6, size: 12, font: bold, color: WHITE });
    const pw = bold.widthOfTextAtSize(pack.price, 12);
    page.drawText(pack.price, {
      x: width - 60 - pw,
      y: y - 6,
      size: 12,
      font: bold,
      color: LIME,
    });
    y -= 40;
    for (const item of pack.items) {
      const lines = wrap("•  " + item, font, 10, width - 120);
      for (const line of lines) {
        page.drawText(line, { x: 60, y, size: 10, font, color: INK });
        y -= 13;
      }
      y -= 4;
    }
  }

  y -= 10;
  page.drawRectangle({
    x: 48,
    y: y - 78,
    width: width - 96,
    height: 86,
    color: PAPER,
    borderColor: LINE,
    borderWidth: 1,
  });
  page.drawText("Note", {
    x: 60,
    y: y - 18,
    size: 10,
    font: bold,
    color: FOREST,
  });
  const notes = wrap(
    "I pacchetti sono personalizzabili su richiesta. Contattateci per costruire insieme la soluzione più adatta ai vostri obiettivi di comunicazione. Adesioni: info@stradenuove.net — tel. 010 8955716. Dati di audience aggiornati a fine luglio 2026 (analytics proprietari, Google Analytics, Facebook Insights e canali Network).",
    font,
    9,
    width - 128,
  );
  let ny = y - 34;
  for (const line of notes) {
    page.drawText(line, { x: 60, y: ny, size: 9, font, color: MUTED });
    ny -= 12;
  }

  return doc.save();
}

async function modulo() {
  const doc = await PDFDocument.create();
  const { font, bold } = await fonts(doc);
  const page = doc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  header(
    page,
    font,
    bold,
    "MODULO DI ISCRIZIONE  ·  ASPHALTICA 2026",
    "Numero speciale  ·  Le Strade del Futuro  ·  tra CAM e IA",
  );
  footer(page, font, 1, 1);

  let y = height - 108;
  page.drawText("Scheda di adesione al numero speciale", {
    x: 48,
    y,
    size: 16,
    font: bold,
    color: FOREST,
  });
  y -= 18;
  page.drawText("Compilare e inviare a info@stradenuove.net  |  tel. 010 8955716", {
    x: 48,
    y,
    size: 9,
    font,
    color: MUTED,
  });

  const form = doc.getForm();

  const field = (label, name, fy, fieldHeight = 22) => {
    page.drawText(label, { x: 48, y: fy + fieldHeight + 6, size: 8, font: bold, color: FOREST });
    const box = form.createTextField(name);
    box.addToPage(page, {
      x: 48,
      y: fy,
      width: width - 96,
      height: fieldHeight,
      borderWidth: 1,
      borderColor: LINE,
      backgroundColor: WHITE,
    });
    box.setFontSize(10);
  };

  const half = (label, name, fy, left) => {
    const x = left ? 48 : width / 2 + 8;
    const w = (width - 96) / 2 - 8;
    page.drawText(label, { x, y: fy + 28, size: 8, font: bold, color: FOREST });
    const box = form.createTextField(name);
    box.addToPage(page, {
      x,
      y: fy,
      width: w,
      height: 22,
      borderWidth: 1,
      borderColor: LINE,
      backgroundColor: WHITE,
    });
    box.setFontSize(10);
  };

  y -= 50;
  field("Ragione sociale / Azienda", "azienda", y);
  y -= 52;
  half("Referente", "referente", y, true);
  half("Ruolo", "ruolo", y, false);
  y -= 52;
  half("Email", "email", y, true);
  half("Telefono", "telefono", y, false);
  y -= 52;
  half("P. IVA / C.F.", "piva", y, true);
  half("Città", "citta", y, false);
  y -= 52;
  field("Indirizzo", "indirizzo", y);

  y -= 48;
  page.drawText("Pacchetto richiesto", {
    x: 48,
    y,
    size: 8,
    font: bold,
    color: FOREST,
  });
  y -= 18;
  const radios = form.createRadioGroup("pacchetto");
  const options = [
    ["premium", "Pacchetto Premium  —  € 1.000"],
    ["partner", "Official Partner  —  € 2.000"],
    ["custom", "Soluzione personalizzata"],
  ];
  for (const [value, label] of options) {
    radios.addOptionToPage(value, page, {
      x: 48,
      y: y - 2,
      width: 12,
      height: 12,
      borderWidth: 1,
      borderColor: FOREST,
      backgroundColor: WHITE,
    });
    page.drawText(label, { x: 68, y, size: 10, font, color: INK });
    y -= 20;
  }

  y -= 8;
  page.drawText("Obiettivi di comunicazione / note", {
    x: 48,
    y,
    size: 8,
    font: bold,
    color: FOREST,
  });
  y -= 88;
  const notes = form.createTextField("note");
  notes.enableMultiline();
  notes.addToPage(page, {
    x: 48,
    y,
    width: width - 96,
    height: 80,
    borderWidth: 1,
    borderColor: LINE,
    backgroundColor: WHITE,
  });

  y -= 28;
  page.drawText(
    "Il sottoscritto autorizza Phacelia Società Benefit al trattamento dei dati per le finalità di adesione editoriale.",
    { x: 68, y, size: 8, font, color: MUTED },
  );
  const consent = form.createCheckBox("privacy");
  consent.addToPage(page, {
    x: 48,
    y: y - 2,
    width: 12,
    height: 12,
    borderWidth: 1,
    borderColor: FOREST,
    backgroundColor: WHITE,
  });

  y -= 40;
  half("Luogo e data", "data", y, true);
  half("Firma", "firma", y, false);

  page.drawText("Partecipa. Comunica. Costruisci il futuro.", {
    x: 48,
    y: 52,
    size: 9,
    font: bold,
    color: FOREST,
  });

  return doc.save();
}

const outDir = new URL("../public/downloads/", import.meta.url);
await mkdir(outDir, { recursive: true });
await writeFile(new URL("listino-partner-asphaltica-2026.pdf", outDir), await listino());
await writeFile(new URL("modulo-iscrizione-asphaltica-2026.pdf", outDir), await modulo());
console.log("Wrote listino and modulo PDFs");
