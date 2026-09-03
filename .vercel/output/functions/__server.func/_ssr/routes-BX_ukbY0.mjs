import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as Download, D as BookOpen, E as Building2, O as ArrowUpRight, S as FileText, T as CalendarDays, _ as List, a as Smartphone, b as GraduationCap, c as Rss, d as Phone, f as PenTool, g as Mail, h as MapPin, k as ArrowRight, l as Route, m as Menu, n as Users, o as Share2, p as Newspaper, r as Tv, s as Send, t as X, u as Radio, v as Landmark, w as Check, x as Globe, y as Info } from "../_libs/lucide-react.mjs";
import { a as DialogPortal, i as DialogOverlay, l as Slot, n as DialogClose, o as DialogTitle, r as DialogContent, s as DialogTrigger, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BX_ukbY0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Emblem({ className, tone = "color" }) {
	const ring = tone === "light" ? "#F3F6F2" : "#123D2E";
	const field = tone === "light" ? "#0A241C" : "#FAFBF8";
	const laneA = "#B8C94A";
	const laneB = tone === "light" ? "#2E7D6B" : "#1A4A38";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		className: cn("block", className),
		"aria-hidden": "true",
		role: "img",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "Strade Nuove" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "31",
				fill: ring
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "26.5",
				fill: field
			}),
			Array.from({ length: 24 }).map((_, i) => {
				const a = i / 24 * Math.PI * 2;
				const x1 = Number((32 + Math.cos(a) * 27.4).toFixed(2));
				const y1 = Number((32 + Math.sin(a) * 27.4).toFixed(2));
				const x2 = Number((32 + Math.cos(a) * 30.2).toFixed(2));
				const y2 = Number((32 + Math.sin(a) * 30.2).toFixed(2));
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1,
					y1,
					x2,
					y2,
					stroke: tone === "light" ? "#B8C94A" : "#FAFBF8",
					strokeWidth: i % 6 === 0 ? 1.6 : .7,
					strokeLinecap: "round"
				}, i);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M11 46 C18 36 24 30 32 24 C40 18 46 16 54 12",
				fill: "none",
				stroke: laneB,
				strokeWidth: "7.2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M13 50 C20 40 26 34 34 28 C42 22 48 20 55 16",
				fill: "none",
				stroke: laneA,
				strokeWidth: "3.4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M14 48.2 C21 38 27 32 35 26 C43 20 49 18 55.5 14.2",
				fill: "none",
				stroke: tone === "light" ? "#FAFBF8" : "#123D2E",
				strokeWidth: "0.7",
				strokeDasharray: "1.6 2.1",
				strokeLinecap: "round"
			})
		]
	});
}
var SITE = {
	name: "Strade Nuove",
	tagline: "conoscere e approfondire",
	event: "Asphaltica 2026",
	issue: "Le Strade del Futuro",
	issueLine: "tra CAM e IA",
	dates: "7–10 ottobre 2026",
	venue: "BolognaFiere",
	hall: "Padiglione 37",
	city: "Bologna",
	email: "info@stradenuove.it",
	editorialEmail: "direzione@stradenuove.net",
	phone: "010 8955716",
	phoneHref: "tel:+390108955716",
	web: "https://www.stradenuove.net",
	webLabel: "stradenuove.net",
	publisher: "Phacelia Società Benefit"
};
var SOCIALS = [
	{
		label: "Facebook",
		href: "https://www.facebook.com/rivistastradenuove"
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/redazione.stradenuove/"
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/redazione-stradenuove-40081934a/"
	},
	{
		label: "X",
		href: "https://x.com/stradenuovenet"
	},
	{
		label: "YouTube",
		href: "https://www.youtube.com/@stradenuoveconoscereeappro7585"
	}
];
var NAV = [
	{
		href: "#perche",
		label: "Perché partecipare"
	},
	{
		href: "#network",
		label: "Network"
	},
	{
		href: "#pacchetti",
		label: "Pacchetti"
	},
	{
		href: "#numeri",
		label: "Numeri"
	},
	{
		href: "#download",
		label: "Download"
	},
	{
		href: "#contatti",
		label: "Contatti"
	}
];
var THEMES = [
	{
		title: "CAM",
		body: "Criteri Ambientali Minimi e gare pubbliche"
	},
	{
		title: "Intelligenza Artificiale",
		body: "Dati, predittivo e cantieri digitali"
	},
	{
		title: "Smart road",
		body: "Digitalizzazione e infrastrutture connesse"
	},
	{
		title: "Economia circolare",
		body: "Recupero del fresato e materiali secondari"
	},
	{
		title: "Sicurezza",
		body: "Barriere, segnaletica, illuminazione"
	},
	{
		title: "Cantiere sostenibile",
		body: "Dimostrazioni live e mezzi elettrici"
	}
];
var AUDIENCE = [
	"Imprese della filiera",
	"Enti pubblici",
	"Progettisti",
	"Università",
	"Professionisti del settore"
];
var CHANNELS = [
	{
		id: "social",
		title: "Social ufficiali",
		body: "Facebook, Instagram, LinkedIn, X"
	},
	{
		id: "web",
		title: "Sito web",
		body: "stradenuove.net — news, video, approfondimenti"
	},
	{
		id: "app",
		title: "App ufficiale",
		body: "iOS e Android, 365 giorni l’anno"
	},
	{
		id: "rco",
		title: "RCO Europe",
		body: "Network TV, podcast e canali in joint venture"
	},
	{
		id: "magazine",
		title: "Magazine cartaceo",
		body: "Numero speciale Asphaltica in distribuzione"
	},
	{
		id: "yahoo",
		title: "Yahoo News",
		body: "Disseminazione sulle piattaforme news"
	},
	{
		id: "gnews",
		title: "Google News",
		body: "Visibilità sulle aggregazioni di settore"
	},
	{
		id: "podcast",
		title: "Podcast ufficiali",
		body: "Approfondimenti e joint venture audio"
	}
];
var PACKAGES = [{
	id: "premium",
	name: "Pacchetto Premium",
	price: "1.000",
	tag: "Ingresso al network",
	featured: false,
	items: [
		"Publi-redazionale aziendale dedicato sul magazine cartaceo Strade Nuove — Speciale Asphaltica.",
		"Post dedicati sulla rete social del Network, con una capacità di disseminazione complessiva di 367.347 contatti raggiunti.",
		"Video aziendale dedicato sul portale web della testata, se fornito, o sulla Web TV.",
		"Presenza su ulteriori servizi multimediali del Network, secondo la pianificazione della Direzione Editoriale, con il supporto dell’Ufficio Marketing."
	]
}, {
	id: "partner",
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
		"Possibilità di approfondimento tecnico o case history."
	]
}];
var STATS = [
	{
		value: "1.151.135",
		label: "Visualizzazioni / impression aggregate del Network",
		note: "dato record complessivo"
	},
	{
		value: "367.347",
		label: "Contatti complessivi raggiunti",
		note: "dato record complessivo"
	},
	{
		value: "650.049",
		label: "Visualizzazioni Facebook",
		note: "238.581 persone raggiunte"
	},
	{
		value: "100.000+",
		label: "Visualizzazioni in un solo giorno",
		note: "picco record 27 maggio 2026"
	},
	{
		value: "200.000+",
		label: "Visualizzazioni Network RCO Europe",
		note: "dato stimato annuale"
	}
];
var EVENT_START = "2026-10-07T09:00:00+02:00";
function Logo({ className, inverted = false, showTagline = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emblem, {
			tone: inverted ? "light" : "color",
			className: "size-10 shrink-0 sm:size-11"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-display text-[1.35rem] font-medium tracking-[0.04em] sm:text-[1.5rem]", inverted ? "text-cream" : "text-forest"),
				children: "stradenuove"
			}), showTagline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("mt-0.5 text-[0.62rem] font-medium tracking-[0.14em] uppercase", inverted ? "text-lime" : "text-teal"),
				children: SITE.tagline
			}) : null]
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-[color,background-color,border-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-forest text-primary-foreground shadow-sm hover:bg-forest-mid",
			lime: "bg-lime text-accent-foreground shadow-sm hover:bg-lime-deep hover:text-white",
			outline: "border border-forest/20 bg-transparent text-forest hover:bg-forest hover:text-primary-foreground",
			ghost: "text-forest hover:bg-paper",
			inverse: "bg-white text-forest hover:bg-lime hover:text-accent-foreground",
			link: "text-teal underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-5 text-sm",
			sm: "h-9 px-3.5 text-sm",
			lg: "h-12 px-7 text-base tracking-wide",
			xl: "h-14 px-8 text-base tracking-wide",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetClose = DialogClose;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-forest-deep/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var SheetContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn("fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-sm flex-col bg-cream p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm p-2 text-forest opacity-80 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Chiudi menu"
		})]
	})]
})] }));
SheetContent.displayName = DialogContent.displayName;
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-6 pr-8", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		className: cn("font-display text-2xl tracking-wide text-forest", className),
		...props
	});
}
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,border-color] duration-200", scrolled ? "border-b border-line bg-cream/96 shadow-[0_8px_24px_-16px_rgb(18_61_46/0.35)]" : "border-b border-transparent bg-cream/80"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Sezioni",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "rounded-md px-2.5 py-2 text-[0.8rem] font-medium tracking-wide text-forest/80 transition-colors duration-150 hover:text-forest",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.web,
							target: "_blank",
							rel: "noreferrer",
							children: SITE.webLabel
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "lime",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contatti",
							children: "Partecipa ora"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							className: "lg:hidden",
							"aria-label": "Apri il menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Navigazione" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex flex-col gap-1",
							"aria-label": "Menu mobile",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: item.href,
									className: "rounded-md px-3 py-3 font-display text-xl tracking-wide text-forest hover:bg-paper",
									children: item.label
								})
							}, item.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex flex-col gap-2 pt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "lime",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#contatti",
										children: "Partecipa ora"
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: SITE.web,
										target: "_blank",
										rel: "noreferrer",
										children: ["Vai a ", SITE.webLabel]
									})
								})
							})]
						})
					] })]
				})
			]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-forest-deep text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emblem, {
							tone: "light",
							className: "size-12"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl tracking-wide",
							children: "stradenuove"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-lime",
							children: SITE.tagline
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 max-w-sm text-sm leading-relaxed text-cream/75",
						children: [
							"Testata di ",
							SITE.publisher,
							". Il numero speciale ",
							SITE.issue,
							" porta la tua azienda al centro di ",
							SITE.event,
							" e del Network che racconta le strade che cambiano l’Italia."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm tracking-[0.16em] uppercase text-lime",
						children: "Sezioni"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "text-cream/80 hover:text-lime",
							children: item.label
						}) }, item.href))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm tracking-[0.16em] uppercase text-lime",
							children: "Contatti"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2 text-sm text-cream/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-lime",
									href: `mailto:${SITE.email}`,
									children: SITE.email
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "hover:text-lime",
									href: SITE.phoneHref,
									children: ["tel. ", SITE.phone]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-lime",
									href: SITE.web,
									target: "_blank",
									rel: "noreferrer",
									children: SITE.webLabel
								}) })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.14em] text-cream/70",
							children: SOCIALS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: s.href,
								target: "_blank",
								rel: "noreferrer",
								className: "hover:text-lime",
								children: s.label
							}) }, s.href))
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					SITE.publisher,
					" · ",
					SITE.name
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Partecipa. Comunica. Costruisci il futuro." })]
			})
		})]
	});
}
function StickyCta() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const hero = document.getElementById("top");
			const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
			const covers = ["download", "contatti"].some((id) => {
				const el = document.getElementById(id);
				if (!el) return false;
				const r = el.getBoundingClientRect();
				return r.top < window.innerHeight - 48 && r.bottom > 96;
			});
			setVisible(heroBottom < 80 && !covers);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("fixed inset-x-0 bottom-0 z-40 border-t border-forest/15 bg-cream/96 p-3 shadow-[0_-12px_32px_-16px_rgb(18_61_46/0.45)] transition-transform duration-200 lg:hidden", visible ? "translate-y-0" : "translate-y-full"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-lg gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/downloads/listino-partner-asphaltica-2026.pdf",
					download: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Listino"]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "lime",
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contatti",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {}), "Partecipa"]
				})
			})]
		})
	});
}
function useCountdown(target) {
	const [parts, setParts] = (0, import_react.useState)({
		days: 0,
		hours: 0,
		minutes: 0
	});
	(0, import_react.useEffect)(() => {
		const tick = () => {
			const diff = Math.max(0, new Date(target).getTime() - Date.now());
			setParts({
				days: Math.floor(diff / 864e5),
				hours: Math.floor(diff % 864e5 / 36e5),
				minutes: Math.floor(diff % 36e5 / 6e4)
			});
		};
		tick();
		const id = window.setInterval(tick, 3e4);
		return () => window.clearInterval(id);
	}, [target]);
	return parts;
}
function HeroSection() {
	const { days, hours, minutes } = useCountdown(EVENT_START);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate min-h-[100svh] overflow-hidden bg-forest-deep text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero-highway.jpg",
				alt: "Viadotto autostradale italiano al tramonto, tra boschi e montagne",
				className: "hero-kenburns absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgb(10_36_28/0.55)_0%,rgb(10_36_28/0.35)_38%,rgb(10_36_28/0.78)_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_20%,rgb(184_201_74/0.18),transparent_60%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-10 pt-28 sm:px-6 sm:pb-14 lg:justify-center lg:pb-20 lg:pt-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rise-in font-display text-xs tracking-[0.28em] text-lime uppercase sm:text-sm",
						children: ["Numero speciale · ", SITE.event]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "rise-in mt-4 max-w-4xl font-display text-5xl font-medium tracking-wide text-cream sm:text-7xl lg:text-8xl",
						children: SITE.issue
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-in mt-3 max-w-xl font-display text-2xl tracking-wide text-lime sm:text-3xl",
						children: SITE.issueLine
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-in mt-6 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg",
						children: "Porta prodotti, cantieri e casi di successo davanti a un pubblico altamente qualificato — imprese, enti, progettisti, università — prima, durante e dopo Asphaltica, attraverso il Network Strade Nuove."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "lime",
							size: "xl",
							className: "w-full justify-center whitespace-nowrap font-display tracking-[0.12em] uppercase sm:w-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contatti",
								children: [
									"Partecipa",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: " all’evento"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "inverse",
							size: "xl",
							className: "w-full justify-center whitespace-nowrap font-display tracking-[0.12em] uppercase sm:w-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#download",
								children: "Scarica il listino"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "rise-in mt-10 grid max-w-3xl grid-cols-3 gap-3 sm:gap-6",
						children: [
							{
								k: "Giorni",
								v: days
							},
							{
								k: "Ore",
								v: hours
							},
							{
								k: "Minuti",
								v: minutes
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-white/15 bg-forest-deep/40 px-3 py-3 backdrop-blur-[2px] sm:px-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[0.65rem] uppercase tracking-[0.18em] text-cream/70",
								children: item.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-display text-3xl tabular-nums tracking-wide text-lime sm:text-4xl",
								children: String(item.v).padStart(2, "0")
							})]
						}, item.k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise-in mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream/85",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4 text-lime" }), SITE.dates]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-lime" }),
								SITE.venue,
								" · ",
								SITE.hall
							]
						})]
					})
				]
			})
		]
	});
}
var audienceIcons = [
	Building2,
	Landmark,
	PenTool,
	GraduationCap,
	Users
];
function WhySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "perche",
		className: "bg-cream py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-[0.28em] text-teal uppercase",
						children: "Perché partecipare"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl tracking-wide text-forest sm:text-5xl",
						children: "Un pubblico che decide le strade del Paese"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-base leading-relaxed text-muted",
						children: [
							"Il numero speciale ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-semibold text-forest",
								children: SITE.issue
							}),
							" ",
							SITE.issueLine,
							" rappresenta un’occasione concreta per presentare prodotti, servizi, tecnologie, cantieri e casi di successo a un",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-semibold text-forest",
								children: "pubblico altamente qualificato"
							}),
							" ",
							"composto da imprese, enti pubblici, progettisti, università e professionisti del settore."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-base leading-relaxed text-muted",
						children: [
							"La partecipazione integra la presenza sul numero speciale con attività di comunicazione digitale attraverso il",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.web,
								target: "_blank",
								rel: "noreferrer",
								className: "font-semibold text-teal underline-offset-4 hover:underline",
								children: "Network Strade Nuove"
							}),
							", amplificando la visibilità del brand prima, durante e dopo",
							" ",
							SITE.event,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 flex flex-wrap gap-2",
						children: AUDIENCE.map((label, i) => {
							const Icon = audienceIcons[i] ?? Users;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-2 text-sm text-forest",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-teal" }), label]
							}, label);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "default",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#pacchetti",
								children: ["Vedi i pacchetti", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/downloads/modulo-iscrizione-asphaltica-2026.pdf",
								download: true,
								children: "Scarica il modulo"
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/paving.jpg",
						alt: "Stesa di asfalto su un cantiere stradale al crepuscolo",
						className: "aspect-video w-full object-cover outline outline-1 -outline-offset-1 outline-forest/10"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3",
					children: THEMES.map((theme) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-line bg-white p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg tracking-wide text-forest",
							children: theme.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-relaxed text-muted",
							children: theme.body
						})]
					}, theme.title))
				})]
			})]
		})
	});
}
function EventSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-forest text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/pavilion.jpg",
				alt: "Padiglione fieristico contemporaneo con luce naturale",
				className: "absolute inset-0 size-full object-cover opacity-30"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-forest/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "mt-1 size-6 shrink-0 text-lime" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xs tracking-[0.22em] uppercase text-lime",
								children: "Quando"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-2xl tracking-wide",
								children: SITE.dates
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-cream/75",
								children: "Quattro giorni di incontro, innovazione e filiera."
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-1 size-6 shrink-0 text-lime" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xs tracking-[0.22em] uppercase text-lime",
								children: "Dove"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 font-display text-2xl tracking-wide",
								children: [
									SITE.venue,
									", ",
									SITE.hall
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-cream/75",
								children: "Nuovo padiglione senza appoggi intermedi, massimo impatto espositivo."
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, { className: "mt-1 size-6 shrink-0 text-lime" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xs tracking-[0.22em] uppercase text-lime",
								children: "Il momento"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-2xl tracking-wide",
								children: "L’incontro e l’innovazione"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-cream/75",
								children: "Con Strade Nuove la tua azienda è protagonista delle strade che cambiano l’Italia."
							})
						] })]
					})
				]
			})
		]
	});
}
var icons = {
	social: Share2,
	web: Globe,
	app: Smartphone,
	rco: Tv,
	magazine: BookOpen,
	yahoo: Newspaper,
	gnews: Rss,
	podcast: Radio
};
function NetworkSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "network",
		className: "bg-paper py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-[0.28em] text-teal uppercase",
						children: "Il Network Strade Nuove"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl tracking-wide text-forest sm:text-5xl",
						children: "Un sistema omnimediale, non un singolo inserto"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted",
						children: "Cartaceo, web, social, podcast, app e TV. La tua presenza sul numero speciale Asphaltica si moltiplica su tutti i canali del Network."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col items-center justify-center rounded-2xl bg-forest p-8 text-center text-cream sm:col-span-2 lg:col-span-2 lg:row-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emblem, {
							tone: "light",
							className: "size-24"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 font-display text-3xl tracking-wide",
							children: "Network Strade Nuove"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-sm leading-relaxed text-cream/75",
							children: "Canali proprietari e in joint venture con RCO Europe. News, Web TV, podcast e app: Stradenuove+ è sempre con te."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "lime",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.web,
								target: "_blank",
								rel: "noreferrer",
								children: "Scopri stradenuove.net"
							})
						})
					]
				}), CHANNELS.map((ch) => {
					const Icon = icons[ch.id] ?? Globe;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-line bg-white p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-10 items-center justify-center rounded-md bg-paper text-teal",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-xl tracking-wide text-forest",
								children: ch.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: ch.body
							})
						]
					}, ch.id);
				})]
			})]
		})
	});
}
function PackagesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pacchetti",
		className: "bg-cream py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs tracking-[0.28em] text-teal uppercase",
							children: "Opportunità di partecipazione"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl tracking-wide text-forest sm:text-5xl",
							children: "Due pacchetti. Un’unica direzione editoriale."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/downloads/listino-partner-asphaltica-2026.pdf",
							download: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Scarica il listino PDF"]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 lg:grid-cols-2",
					children: PACKAGES.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: cn("flex flex-col rounded-2xl p-7 sm:p-9", pkg.featured ? "bg-forest text-cream shadow-border" : "border border-line bg-white text-ink"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("font-display text-xs tracking-[0.22em] uppercase", pkg.featured ? "text-lime" : "text-teal"),
									children: pkg.tag
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-3xl tracking-wide",
									children: pkg.name
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-4xl tracking-wide",
										children: ["€ ", pkg.price]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 flex-1 space-y-3",
								children: pkg.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm leading-relaxed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("mt-0.5 size-4 shrink-0", pkg.featured ? "text-lime" : "text-teal") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: pkg.featured ? "text-cream/90" : "text-muted",
										children: item
									})]
								}, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: pkg.featured ? "lime" : "default",
								size: "lg",
								className: "mt-8 font-display tracking-[0.12em] uppercase",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `#contatti`,
									"data-package": pkg.id,
									children: ["Richiedi ", pkg.name]
								})
							})
						]
					}, pkg.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 flex items-start gap-3 rounded-xl border border-line bg-paper px-4 py-4 text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-0.5 size-4 shrink-0 text-teal" }), "I pacchetti sono personalizzabili su richiesta. Contattaci per costruire insieme la soluzione più adatta ai tuoi obiettivi di comunicazione."]
				})
			]
		})
	});
}
function StatsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "numeri",
		className: "bg-forest-deep py-20 text-cream sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs tracking-[0.28em] text-lime uppercase",
					children: "I numeri del Network"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl tracking-wide sm:text-5xl",
					children: "Dati massimi registrati"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm text-cream/65",
					children: "Aggiornati a fine luglio 2026. Fonte: strumenti analytics proprietari, Google Analytics, Facebook Insights e canali Network."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5",
				children: STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "bg-forest-deep p-6 sm:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl tracking-wide text-lime tabular-nums whitespace-nowrap sm:text-4xl",
							children: stat.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-sm font-medium leading-snug text-cream",
							children: stat.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-cream/55",
							children: stat.note
						})
					]
				}, stat.label))
			})]
		})
	});
}
var FILES = [{
	href: "/downloads/modulo-iscrizione-asphaltica-2026.pdf",
	title: "Modulo di iscrizione",
	body: "Scheda di adesione al numero speciale Asphaltica 2026. Compilabile a schermo o a mano, da inviare a info@stradenuove.it.",
	cta: "Scarica il modulo",
	icon: FileText,
	featured: true
}, {
	href: "/downloads/listino-partner-asphaltica-2026.pdf",
	title: "Listino partner rivista",
	body: "Pacchetto Premium (€ 1.000) e Official Partner (€ 2.000): prestazioni, canali e condizioni di partecipazione.",
	cta: "Scarica il listino",
	icon: List,
	featured: false
}];
function DownloadsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "download",
		className: "relative isolate overflow-hidden bg-paper py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-[0.28em] text-teal uppercase",
						children: "Documenti"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl tracking-wide text-forest sm:text-5xl",
						children: "Iscriviti. Scegli il pacchetto. Inizia a comunicare."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted",
						children: "Scarica il modulo di iscrizione e il listino ufficiale dei partner della rivista Strade Nuove per Asphaltica 2026. In alternativa compila il form: prepariamo noi la proposta."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 overflow-hidden rounded-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/magazine.jpg",
							alt: "Magazine cartaceo di infrastrutture su una scrivania",
							className: "aspect-3/2 w-full object-cover outline outline-1 -outline-offset-1 outline-forest/10"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-4 lg:col-span-7 lg:pt-10",
				children: FILES.map((file) => {
					const Icon = file.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: file.featured ? "flex flex-col rounded-2xl bg-forest p-7 text-cream sm:flex-row sm:items-center sm:gap-6" : "flex flex-col rounded-2xl border border-line bg-white p-7 sm:flex-row sm:items-center sm:gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: file.featured ? "inline-flex size-14 shrink-0 items-center justify-center rounded-xl bg-lime text-accent-foreground" : "inline-flex size-14 shrink-0 items-center justify-center rounded-xl bg-paper text-teal",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex-1 sm:mt-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: file.featured ? "font-display text-2xl tracking-wide" : "font-display text-2xl tracking-wide text-forest",
									children: file.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: file.featured ? "mt-2 text-sm leading-relaxed text-cream/80" : "mt-2 text-sm leading-relaxed text-muted",
									children: file.body
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: file.featured ? "lime" : "default",
								className: "mt-5 shrink-0 sm:mt-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: file.href,
									download: true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), file.cta]
								})
							})
						]
					}, file.href);
				})
			})]
		})
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-line bg-white px-3.5 py-2 text-base text-ink shadow-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:border-teal disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium text-forest leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-28 w-full rounded-md border border-line bg-white px-3.5 py-3 text-base text-ink transition-[border-color,box-shadow] duration-150 placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:border-teal disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var PACK_OPTIONS = [
	{
		id: "premium",
		label: "Pacchetto Premium — € 1.000"
	},
	{
		id: "partner",
		label: "Official Partner — € 2.000"
	},
	{
		id: "custom",
		label: "Soluzione personalizzata"
	}
];
function ContactSection() {
	const [pack, setPack] = (0, import_react.useState)("partner");
	const [sending, setSending] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const apply = (id) => {
			if (id === "premium" || id === "partner" || id === "custom") setPack(id);
		};
		const stored = sessionStorage.getItem("asphaltica-pack");
		if (stored) apply(stored);
		const onClick = (event) => {
			const id = (event.target?.closest("a[data-package]"))?.dataset.package;
			if (id) {
				apply(id);
				sessionStorage.setItem("asphaltica-pack", id);
			}
		};
		document.addEventListener("click", onClick);
		return () => document.removeEventListener("click", onClick);
	}, []);
	function onSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		const company = String(data.get("company") ?? "").trim();
		const name = String(data.get("name") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const phone = String(data.get("phone") ?? "").trim();
		const role = String(data.get("role") ?? "").trim();
		const message = String(data.get("message") ?? "").trim();
		const selected = PACK_OPTIONS.find((p) => p.id === pack)?.label ?? pack;
		if (!company || !name || !email) {
			toast.error("Inserisci almeno azienda, referente e email.");
			return;
		}
		setSending(true);
		const subject = `Adesione Asphaltica 2026 — ${company}`;
		const body = [
			`Adesione al numero speciale ${SITE.issue} — ${SITE.event}`,
			``,
			`Azienda: ${company}`,
			`Referente: ${name}`,
			`Ruolo: ${role || "—"}`,
			`Email: ${email}`,
			`Telefono: ${phone || "—"}`,
			`Pacchetto: ${selected}`,
			``,
			`Note:`,
			message || "—"
		].join("\n");
		const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailto;
		toast.success("Apriamo il tuo client di posta. In alternativa invia a " + SITE.email);
		window.setTimeout(() => setSending(false), 800);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contatti",
		className: "bg-cream py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-[0.28em] text-teal uppercase",
						children: "Informazioni e adesioni"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl tracking-wide text-forest sm:text-5xl",
						children: "Partecipa. Comunica. Costruisci il futuro."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted",
						children: "Compila la richiesta: la Direzione Editoriale e l’Ufficio Marketing ti ricontattano con la soluzione più adatta. Puoi anche inviare direttamente il modulo PDF."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${SITE.email}`,
								className: "flex items-center gap-3 text-forest hover:text-teal",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-11 items-center justify-center rounded-md bg-paper text-teal",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs uppercase tracking-[0.16em] text-muted",
									children: "Email"
								}), SITE.email] })]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.phoneHref,
								className: "flex items-center gap-3 text-forest hover:text-teal",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-11 items-center justify-center rounded-md bg-paper text-teal",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs uppercase tracking-[0.16em] text-muted",
									children: "Telefono"
								}), SITE.phone] })]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.web,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-3 text-forest hover:text-teal",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-11 items-center justify-center rounded-md bg-paper text-teal",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs uppercase tracking-[0.16em] text-muted",
									children: "Testata"
								}), SITE.webLabel] })]
							}) })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "rounded-2xl border border-line bg-white p-6 shadow-border sm:p-8 lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Azienda",
								htmlFor: "company",
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "company",
									name: "company",
									required: true,
									placeholder: "Ragione sociale",
									autoComplete: "organization"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Referente",
								htmlFor: "name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									name: "name",
									required: true,
									placeholder: "Nome e cognome",
									autoComplete: "name"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Ruolo",
								htmlFor: "role",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "role",
									name: "role",
									placeholder: "Marketing, direzione…",
									autoComplete: "organization-title"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								htmlFor: "email",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									name: "email",
									type: "email",
									required: true,
									placeholder: "nina.v@example.com",
									autoComplete: "email"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Telefono",
								htmlFor: "phone",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									name: "phone",
									type: "tel",
									placeholder: "+39 …",
									autoComplete: "tel"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "text-sm font-medium text-forest",
							children: "Pacchetto di interesse"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid gap-2",
							children: PACK_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: cn("flex cursor-pointer items-center gap-3 rounded-md border px-3 py-3 text-sm transition-colors duration-150", pack === option.id ? "border-teal bg-paper text-forest" : "border-line text-muted hover:border-teal/40"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									name: "package",
									value: option.id,
									checked: pack === option.id,
									onChange: () => setPack(option.id),
									className: "size-4 accent-teal"
								}), option.label]
							}, option.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Obiettivi o note",
						htmlFor: "message",
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "message",
							name: "message",
							placeholder: "Raccontaci prodotti, cantieri o il caso che vuoi portare sul numero speciale."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs text-muted",
						children: [
							"Inviando la richiesta autorizzi ",
							SITE.publisher,
							" a ricontattarti per l’adesione al numero speciale ",
							SITE.event,
							". Nessun dato viene conservato su questo sito: il messaggio parte dal tuo client di posta."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							variant: "lime",
							size: "lg",
							disabled: sending,
							className: "font-display tracking-[0.12em] uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {}), "Invia la richiesta"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/downloads/modulo-iscrizione-asphaltica-2026.pdf",
								download: true,
								children: "Preferisco il modulo PDF"
							})
						})]
					})
				]
			})]
		})
	});
}
function Field({ label, htmlFor, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("space-y-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor,
			children: label
		}), children]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#contatti",
			className: "sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-lime focus-visible:px-4 focus-visible:py-2 focus-visible:text-accent-foreground",
			children: "Vai alla richiesta di partecipazione"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "pb-24 lg:pb-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhySection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackagesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyCta, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			position: "top-center",
			richColors: true,
			closeButton: true
		})
	] });
}
//#endregion
export { Home as component };
