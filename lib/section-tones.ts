export type SectionTone = "white" | "warm" | "mint";

export const sectionToneClasses: Record<SectionTone, string> = {
  white: "bg-section-white",
  warm: "bg-section-warm",
  mint: "bg-section-mint",
};

export const serviceIconStyles: Record<
  string,
  { bg: string; text: string; hover: string; ring: string }
> = {
  document: {
    bg: "bg-primary/12",
    text: "text-primary",
    hover: "group-hover:bg-primary",
    ring: "ring-primary/15",
  },
  ledger: {
    bg: "bg-accent/12",
    text: "text-accent",
    hover: "group-hover:bg-accent",
    ring: "ring-accent/15",
  },
  payroll: {
    bg: "bg-primary-light/12",
    text: "text-primary-light",
    hover: "group-hover:bg-primary-light",
    ring: "ring-primary-light/15",
  },
  vat: {
    bg: "bg-accent-dark/12",
    text: "text-accent-dark",
    hover: "group-hover:bg-accent-dark",
    ring: "ring-accent-dark/15",
  },
  accounts: {
    bg: "bg-primary/12",
    text: "text-primary",
    hover: "group-hover:bg-primary",
    ring: "ring-primary/15",
  },
  planning: {
    bg: "bg-accent-light/15",
    text: "text-accent-light",
    hover: "group-hover:bg-accent-light",
    ring: "ring-accent-light/20",
  },
  tutoring: {
    bg: "bg-primary/12",
    text: "text-primary",
    hover: "group-hover:bg-primary",
    ring: "ring-primary/15",
  },
  gcse: {
    bg: "bg-accent/12",
    text: "text-accent-text",
    hover: "group-hover:bg-accent",
    ring: "ring-accent/15",
  },
  alevel: {
    bg: "bg-primary-light/12",
    text: "text-primary-light",
    hover: "group-hover:bg-primary-light",
    ring: "ring-primary-light/15",
  },
  homework: {
    bg: "bg-accent-dark/12",
    text: "text-accent-dark",
    hover: "group-hover:bg-accent-dark",
    ring: "ring-accent-dark/15",
  },
  online: {
    bg: "bg-primary/12",
    text: "text-primary",
    hover: "group-hover:bg-primary",
    ring: "ring-primary/15",
  },
  study: {
    bg: "bg-accent/12",
    text: "text-accent-text",
    hover: "group-hover:bg-accent",
    ring: "ring-accent/15",
  },
};
