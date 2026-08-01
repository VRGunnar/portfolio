export const RENTER_CONTACT = {
  email: "contact.gunnar.digital@gmail.com",
  phone: "+32 478 05 05 80",
  phoneHref: "+32478050580",
  linkedin: "https://sk.linkedin.com/in/gunnar-van-remoortere-ab1267171",
} as const;

export const RENTER_TAG_KEYS = [
  "renterProfile.hero.tags.couple",
  "renterProfile.hero.tags.dog",
  "renterProfile.hero.tags.nonSmokers",
  "renterProfile.hero.tags.budget",
  "renterProfile.hero.tags.area",
] as const;

export const HOUSEHOLD_GALLERY = [
  {
    id: "gunnar",
    captionKey: "renterProfile.household.captions.gunnar",
    image: "/renter-profile/gunnar.jpg",
  },
  {
    id: "karin",
    captionKey: "renterProfile.household.captions.karin",
    image: "/renter-profile/karin.jpg",
  },
  {
    id: "brix",
    captionKey: "renterProfile.household.captions.brix",
    image: "/renter-profile/brix.jpg",
  },
] as const;

export const HOUSE_PHOTOS = [
  {
    src: "/renter-profile/house/living-01.jpg",
    captionKey: "renterProfile.houseGallery.captions.livingRoom",
  },
  {
    src: "/renter-profile/house/exterior-01.jpg",
    captionKey: "renterProfile.houseGallery.captions.exterior",
  },
  {
    src: "/renter-profile/house/kitchen-01.jpg",
    captionKey: "renterProfile.houseGallery.captions.kitchen",
  },
  {
    src: "/renter-profile/house/bedroom-01.jpg",
    captionKey: "renterProfile.houseGallery.captions.bedroom",
  },
  {
    src: "/renter-profile/house/living-02.jpg",
    captionKey: "renterProfile.houseGallery.captions.livingRoom",
  },
  {
    src: "/renter-profile/house/bathroom-01.jpg",
    captionKey: "renterProfile.houseGallery.captions.bathroom",
  },
  {
    src: "/renter-profile/house/office-01.jpg",
    captionKey: "renterProfile.houseGallery.captions.office",
  },
  {
    src: "/renter-profile/house/bedroom-02.jpg",
    captionKey: "renterProfile.houseGallery.captions.bedroom",
  },
] as const;

export const HOUSEHOLD_STAT_KEYS = [
  { valueKey: "renterProfile.about.stats.years.value", labelKey: "renterProfile.about.stats.years.label" },
  { valueKey: "renterProfile.about.stats.homeowners.value", labelKey: "renterProfile.about.stats.homeowners.label" },
  { valueKey: "renterProfile.about.stats.weight.value", labelKey: "renterProfile.about.stats.weight.label" },
] as const;

export const LIFESTYLE_CARDS = [
  {
    id: "household",
    icon: "2",
    span: false,
    tagKey: "renterProfile.lifestyle.cards.household.tag",
    titleKey: "renterProfile.lifestyle.cards.household.title",
    bodyKey: "renterProfile.lifestyle.cards.household.body",
  },
  {
    id: "pets",
    icon: "🐾",
    span: false,
    tagKey: "renterProfile.lifestyle.cards.pets.tag",
    titleKey: "renterProfile.lifestyle.cards.pets.title",
    bodyKey: "renterProfile.lifestyle.cards.pets.body",
  },
  {
    id: "smoking",
    icon: "✕",
    span: false,
    tagKey: "renterProfile.lifestyle.cards.smoking.tag",
    titleKey: "renterProfile.lifestyle.cards.smoking.title",
    bodyKey: "renterProfile.lifestyle.cards.smoking.body",
  },
  {
    id: "workPattern",
    icon: "⌂",
    span: false,
    tagKey: "renterProfile.lifestyle.cards.workPattern.tag",
    titleKey: "renterProfile.lifestyle.cards.workPattern.title",
    bodyKey: "renterProfile.lifestyle.cards.workPattern.body",
  },
  {
    id: "vibe",
    icon: "✓",
    span: true,
    tagKey: "renterProfile.lifestyle.cards.vibe.tag",
    titleKey: "renterProfile.lifestyle.cards.vibe.title",
    bodyKey: "renterProfile.lifestyle.cards.vibe.body",
  },
] as const;

export const EMPLOYMENT_ROW_KEYS = [
  { labelKey: "renterProfile.employment.rows.employment.label", valueKey: "renterProfile.employment.rows.employment.value" },
  { labelKey: "renterProfile.employment.rows.incomeVsRent.label", valueKey: "renterProfile.employment.rows.incomeVsRent.value" },
  { labelKey: "renterProfile.employment.rows.documents.label", valueKey: "renterProfile.employment.rows.documents.value" },
] as const;

export const LOOKING_FOR_CARDS = [
  {
    id: "budget",
    icon: "€",
    span: false,
    tagKey: "renterProfile.lookingFor.cards.budget.tag",
    titleKey: "renterProfile.lookingFor.cards.budget.title",
  },
  {
    id: "area",
    icon: "◎",
    span: false,
    tagKey: "renterProfile.lookingFor.cards.area.tag",
    titleKey: "renterProfile.lookingFor.cards.area.title",
  },
  {
    id: "moveIn",
    icon: "→",
    span: false,
    tagKey: "renterProfile.lookingFor.cards.moveIn.tag",
    titleKey: "renterProfile.lookingFor.cards.moveIn.title",
  },
  {
    id: "type",
    icon: "⌂",
    span: false,
    tagKey: "renterProfile.lookingFor.cards.type.tag",
    titleKey: "renterProfile.lookingFor.cards.type.title",
  },
  {
    id: "leaseLength",
    icon: "∞",
    span: true,
    tagKey: "renterProfile.lookingFor.cards.leaseLength.tag",
    titleKey: "renterProfile.lookingFor.cards.leaseLength.title",
  },
] as const;

export const DOCUMENTS_READY_KEYS = [
  "renterProfile.documents.list.id",
  "renterProfile.documents.list.contract",
  "renterProfile.documents.list.payslips",
  "renterProfile.documents.list.bank",
  "renterProfile.documents.list.references",
] as const;
