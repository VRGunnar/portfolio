export const RENTER_CONTACT = {
  email: "contact.gunnar.digital@gmail.com",
  phone: "+32 478 05 05 80",
  phoneHref: "+32478050580",
  linkedin: "https://sk.linkedin.com/in/gunnar-van-remoortere-ab1267171",
} as const;

export const RENTER_TAGS = [
  "Couple",
  "Hypoallergenic dog, 3kg",
  "Non-smokers",
  "€1,500–2,000 / month",
  "North-Holland",
] as const;

export const HOUSEHOLD_GALLERY = [
  {
    label: "photo — gunnar",
    caption: "Gunnar — software engineer",
    image: "/renter-profile/gunnar.jpg",
  },
  {
    label: "photo — karin",
    caption: "Karin — 5 years together",
    image: "/renter-profile/karin.jpg",
  },
  {
    label: "photo — the dog",
    caption: "Brix — Maltipoo · 3kg · hypoallergenic",
    image: "/renter-profile/brix.jpg",
  },
] as const;

export const HOUSE_PHOTOS = [
  { src: "/renter-profile/house/living-01.jpg", caption: "Living room" },
  { src: "/renter-profile/house/exterior-01.jpg", caption: "Garden & terrace" },
  { src: "/renter-profile/house/kitchen-01.jpg", caption: "Kitchen" },
  { src: "/renter-profile/house/bedroom-01.jpg", caption: "Bedroom" },
  { src: "/renter-profile/house/living-02.jpg", caption: "Living room" },
  { src: "/renter-profile/house/bathroom-01.jpg", caption: "Bathroom" },
  { src: "/renter-profile/house/office-01.jpg", caption: "Home office" },
  { src: "/renter-profile/house/bedroom-02.jpg", caption: "Bedroom" },
] as const;

export const HOUSEHOLD_STATS = [
  { value: "5 yrs", label: "together as a couple" },
  { value: "Homeowners", label: "already, near Bratislava" },
  { value: "3kg", label: "hypoallergenic Maltipoo" },
] as const;

export const LIFESTYLE_CARDS = [
  {
    icon: "2",
    tag: "household",
    title: "Couple",
    body: "Just the two of us relocating together.",
    span: false,
  },
  {
    icon: "🐾",
    tag: "pets",
    title: "One Maltipoo",
    body: "3kg, hypoallergenic, doesn't shed. Well-trained and genuinely low-maintenance.",
    span: false,
  },
  {
    icon: "✕",
    tag: "smoking",
    title: "Non-smokers",
    body: "No smoking, indoors or out.",
    span: false,
  },
  {
    icon: "⌂",
    tag: "work pattern",
    title: "Remote → hybrid",
    body: "Currently fully remote, moving to hybrid / mostly in-office after relocating.",
    span: false,
  },
  {
    icon: "✓",
    tag: "vibe",
    title: "Quiet, tidy, pleasant and respectful",
    body: "We keep to ourselves, keep the place clean, and get along easily with neighbours.",
    span: true,
  },
] as const;

export const EMPLOYMENT_ROWS = [
  { label: "Employment", value: "Full-time freelance contract" },
  { label: "Income vs. rent", value: "Comfortably above 2x monthly rent" },
  { label: "Documents", value: "Sent privately, on request only" },
] as const;

export const LOOKING_FOR_CARDS = [
  { icon: "€", tag: "budget", title: "€1,500 – 2,000 / month", span: false },
  { icon: "◎", tag: "area", title: "North-Holland", span: false },
  {
    icon: "→",
    tag: "move-in",
    title: "September / October 2026",
    span: false,
  },
  {
    icon: "⌂",
    tag: "type",
    title: "2-bed apartment or house, furnished preferred",
    span: false,
  },
  {
    icon: "∞",
    tag: "lease length",
    title:
      "Open to multiple years, depending on quality of the property and location",
    span: true,
  },
] as const;

export const DOCUMENTS_READY = [
  "ID",
  "Employment contract",
  "Recent payslips",
  "Bank statements",
  "Previous landlord references",
] as const;
