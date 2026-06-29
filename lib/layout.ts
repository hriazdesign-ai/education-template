/**
 * Global layout system — single source of truth for spacing and containers.
 * Use on every page (Home, Services, Student Support, Programmes, Contact, etc.).
 *
 * Rules:
 * - Apply spacing from ONE source per boundary (section padding OR block gap, never both).
 * - All content aligns to Container (1280px max-width, standard horizontal padding).
 */

// ─── Container ───────────────────────────────────────────────────────────────

/** Site container max-width — desktop 1280px */
export const layoutMaxWidth = "max-w-[1280px]";

/** Mobile 24px · tablet/desktop 32px */
export const layoutPadding = "px-6 min-[768px]:px-8";

// ─── Navigation ────────────────────────────────────────────────────────────────

export const navHeight = "h-14 min-[768px]:h-16 min-[1060px]:h-[80px]";
export const navOffset = "pt-14 min-[768px]:pt-16 min-[1060px]:pt-[80px]";

// ─── Section spacing (page-level) ────────────────────────────────────────────
// Desktop 80px · mobile 56px

export const sectionY = "py-14 min-[1060px]:py-20";
export const sectionTop = "pt-14 min-[1060px]:pt-20";
export const sectionBottom = "pb-14 min-[1060px]:pb-20";

// ─── Group spacing ─────────────────────────────────────────────────────────────
// Desktop 48px · mobile 32px

export const groupGap = "gap-8 min-[1060px]:gap-12";
export const groupTop = "pt-8 min-[1060px]:pt-12";
export const groupBottom = "pb-8 min-[1060px]:pb-12";
/** Margin variant — use when padding-top does not create visible separation */
export const groupTopMargin = "mt-8 min-[1060px]:mt-12";

// ─── Section intro (eyebrow → heading → content) ─────────────────────────────
// Desktop 32px · mobile 24px

export const sectionIntroGap = "gap-6 min-[1060px]:gap-8";

// ─── Content → cards / grid (within a section) ───────────────────────────────
// Desktop 48px · mobile 32px — same as group spacing

export const contentToCards = "pt-8 min-[1060px]:pt-12";

// ─── Cards → CTA ─────────────────────────────────────────────────────────────
// Desktop 56px · mobile 40px

export const cardsToCta = "pt-10 min-[1060px]:pt-14";

// ─── Dark multi-block sections ─────────────────────────────────────────────────
// Large break 80/56 · group break 48/32 (aliases — same tokens, semantic names)

export const darkBlockLarge = sectionTop;
export const darkBlockGroup = groupTop;
export const darkBlockLargeMargin = "mt-14 min-[1060px]:mt-20";

// ─── Hero ──────────────────────────────────────────────────────────────────────

/** Breathing room below fixed nav before hero content */
export const heroBreathing = sectionTop;

/** Homepage shallow hero image band */
export const homeHeroImageHeight =
  "h-[240px] min-[768px]:h-[300px] min-[1060px]:h-[519px]";
export const homeHeroImageClasses = `${homeHeroImageHeight} w-full shrink-0 overflow-hidden rounded-none`;
