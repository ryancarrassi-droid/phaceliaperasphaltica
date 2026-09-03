export const SITE = {
  name: "Strade Nuove",
  tagline: "conoscere e approfondire",
  event: "Asphaltica 2026",
  issue: "Le Strade del Futuro",
  issueLine: "tra CAM e IA",
  dates: "7–10 ottobre 2026",
  venue: "BolognaFiere",
  hall: "Padiglione 37",
  city: "Bologna",
  email: "info@stradenuove.net",
  editorialEmail: "direzione@stradenuove.net",
  phone: "010 8955716",
  phoneHref: "tel:+390108955716",
  web: "https://www.stradenuove.net",
  webLabel: "stradenuove.net",
  publisher: "Phacelia Società Benefit",
} as const;

export const DOWNLOADS = {
  modulo: "/downloads/modulo-iscrizione-asphaltica-2026.pdf",
  listino: "/downloads/listino-partner-asphaltica-2026.pdf",
} as const;

export const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/rivistastradenuove" },
  { label: "Instagram", href: "https://www.instagram.com/redazione.stradenuove/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/redazione-stradenuove-40081934a/" },
  { label: "X", href: "https://x.com/stradenuovenet" },
  { label: "YouTube", href: "https://www.youtube.com/@stradenuoveconoscereeappro7585" },
] as const;

export const NAV = [
  { href: "#perche", label: "Perché partecipare" },
  { href: "#network", label: "Network" },
  { href: "#pacchetti", label: "Pacchetti" },
  { href: "#numeri", label: "Numeri" },
  { href: "#download", label: "Download" },
  { href: "#contatti", label: "Contatti" },
] as const;

export const THEMES = [
  { title: "CAM", body: "Criteri Ambientali Minimi e gare pubbliche" },
  { title: "Intelligenza Artificiale", body: "Dati, predittivo e cantieri digitali" },
  { title: "Smart road", body: "Digitalizzazione e infrastrutture connesse" },
  { title: "Economia circolare", body: "Recupero del fresato e materiali secondari" },
  { title: "Sicurezza", body: "Barriere, segnaletica, illuminazione" },
  { title: "Cantiere sostenibile", body: "Dimostrazioni live e mezzi elettrici" },
] as const;

export const AUDIENCE = [
  "Imprese della filiera",
  "Enti pubblici",
  "Progettisti",
  "Università",
  "Professionisti del settore",
] as const;

export const CHANNELS = [
  { id: "social", title: "Social ufficiali", body: "Facebook, Instagram, LinkedIn, X" },
  { id: "web", title: "Sito web", body: "stradenuove.net — news, video, approfondimenti" },
  { id: "app", title: "App ufficiale", body: "iOS e Android, 365 giorni l’anno" },
  { id: "rco", title: "RCO Europe", body: "Network TV, podcast e canali in joint venture" },
  { id: "magazine", title: "Magazine cartaceo", body: "Numero speciale Asphaltica in distribuzione" },
  { id: "yahoo", title: "Yahoo News", body: "Disseminazione sulle piattaforme news" },
  { id: "gnews", title: "Google News", body: "Visibilità sulle aggregazioni di settore" },
  { id: "podcast", title: "Podcast ufficiali", body: "Approfondimenti e joint venture audio" },
] as const;

export const PACKAGES = [
  {
    id: "premium" as const,
    name: "Pacchetto Premium",
    price: "1.000",
    tag: "Ingresso al network",
    featured: false,
    items: [
      "Publi-redazionale aziendale dedicato sul magazine cartaceo Strade Nuove — Speciale Asphaltica.",
      "Post dedicati sulla rete social del Network, con una capacità di disseminazione complessiva di 367.347 contatti raggiunti.",
      "Video aziendale dedicato sul portale web della testata, se fornito, o sulla Web TV.",
      "Presenza su ulteriori servizi multimediali del Network, secondo la pianificazione della Direzione Editoriale, con il supporto dell’Ufficio Marketing.",
    ],
  },
  {
    id: "partner" as const,
    name: "Official Partner",
    price: "2.000",
    tag: "Massima visibilità",
    featured: true,
    items: [
      "Publi-redazionale aziendale dedicato con maggiore visibilità sul magazine cartaceo Strade Nuove — Speciale Asphaltica.",
      "Evidenza privilegiata all’interno del numero speciale.",
      "Distribuzione durante la manifestazione.",
      "3 pubblicazioni social dedicate.",
      "2 stories social.",
      "Possibilità di approfondimento tecnico o case history.",
    ],
  },
] as const;

export const STATS = [
  {
    value: "1.151.135",
    label: "Visualizzazioni / impression aggregate del Network",
    note: "dato record complessivo",
  },
  {
    value: "367.347",
    label: "Contatti complessivi raggiunti",
    note: "dato record complessivo",
  },
  {
    value: "650.049",
    label: "Visualizzazioni Facebook",
    note: "238.581 persone raggiunte",
  },
  {
    value: "100.000+",
    label: "Visualizzazioni in un solo giorno",
    note: "picco record 27 maggio 2026",
  },
  {
    value: "200.000+",
    label: "Visualizzazioni Network RCO Europe",
    note: "dato stimato annuale",
  },
] as const;

export const EVENT_START = "2026-10-07T09:00:00+02:00";
