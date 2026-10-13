// Business details and content used across the Nexora site.
// TODO: replace the placeholder contact details and sample projects before going live.

export const site = {
  name: "Nexora",
  tagline: "Intelligent Living. Connected Spaces. Smarter Future.",
  description:
    "Nexora is an IoT and intelligent-technology company building connected environments for homes, businesses, and infrastructure in Nigeria.",
  url: "https://nexora.example",
  location: "Owerri, Nigeria",
  email: "hello@nexora.example",
  phoneDisplay: "+234 814 172 1854",
  whatsappNumber: "2348141721854", // international format, digits only
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "X", href: "https://x.com/" },
  ],
} as const;

export const nav = [
  { href: "/smart-home", label: "Smart Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/technology", label: "Technology" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type SolutionId = "home" | "business" | "infrastructure";

export interface Solution {
  id: SolutionId;
  name: string;
  summary: string;
  features: string[];
}

export const solutions: Solution[] = [
  {
    id: "home",
    name: "Homes",
    summary:
      "Lights, air conditioning, gates, cameras and power that respond to one tap, a schedule, or the moment you arrive.",
    features: ["Lighting scenes", "Gate and door access", "CCTV and alerts", "Energy monitoring"],
  },
  {
    id: "business",
    name: "Businesses",
    summary:
      "Offices, shops, hotels and clinics that run on less energy, stay secure after hours, and report what is happening on site.",
    features: ["Access control", "Occupancy-based cooling", "Generator and inverter tracking", "Multi-site dashboards"],
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    summary:
      "Sensors and long-range networks for estates, water systems, farms and street lighting, built to keep reporting through outages.",
    features: ["Tank and borehole levels", "Street and estate lighting", "Remote asset monitoring", "LoRa field networks"],
  },
];

export const hubFlow = [
  { label: "Devices", detail: "Switches, sensors, locks, cameras" },
  { label: "Nexora Hub", detail: "Runs rules locally in your building" },
  { label: "Your phone", detail: "App, voice and WhatsApp alerts" },
  { label: "Cloud (optional)", detail: "Remote access and history" },
] as const;

export const builtForNigeria = [
  {
    title: "Keeps working when the network does not",
    body: "Rules and schedules run on the hub inside your building, so lights, locks and alarms do not wait on the internet.",
  },
  {
    title: "Understands power cuts",
    body: "When mains drops, Nexora moves to inverter mode, pauses heavy loads like air conditioners, and keeps lights and cameras on.",
  },
  {
    title: "Protects your equipment",
    body: "Surge-aware switching and voltage monitoring catch bad supply before it reaches your appliances.",
  },
  {
    title: "Installed and supported locally",
    body: "Our engineers are based in Owerri, so site visits and fixes do not mean waiting on an overseas vendor.",
  },
] as const;

// Sample entries: replace with real installations.
export const projects = [
  {
    title: "Four-bedroom duplex",
    place: "Owerri, Imo State",
    kind: "Smart home",
    specs: { devices: 48, rooms: 9, control: "Local hub + app" },
  },
  {
    title: "Boutique hotel, 22 rooms",
    place: "Port Harcourt, Rivers State",
    kind: "Business",
    specs: { devices: 180, rooms: 22, control: "Room controllers + front desk" },
  },
  {
    title: "Gated estate, 60 plots",
    place: "Imo State",
    kind: "Infrastructure",
    specs: { devices: 96, rooms: 0, control: "LoRa + central dashboard" },
  },
] as const;

export const enquiryTopics = [
  { id: "home", label: "My home" },
  { id: "business", label: "My business" },
  { id: "infrastructure", label: "An estate or site" },
] as const;

// ---- Link helpers -------------------------------------------------------

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const mailLink = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export const telLink = `tel:+${site.whatsappNumber}`;

export const enquiryMessage = (topic: (typeof enquiryTopics)[number]["label"]) =>
  `Hello ${site.name}, I'd like to talk about making ${topic.toLowerCase()} smarter.`;
