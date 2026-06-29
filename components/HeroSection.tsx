/**
 * Inner-page hero (about, contact, services, programmes).
 * The homepage hero lives in components/HomeHero.tsx — do not use this file for `/`.
 */
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { IconArrowRight, IconCheck } from "@/components/icons";
import { homeHeroImageClasses, heroBreathing, navOffset, sectionBottom } from "@/lib/layout";

type HeroImage = {
  src: string;
  alt: string;
  label: string;
};

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  highlights?: string[];
  image?: HeroImage | null;
  showConsultationCard?: boolean;
  showContactCard?: boolean;
  padding?: "default" | "contact";
  imageLayout?: "split" | "shallow";
  internalLayout?: boolean;
};

const defaultHeroImage: HeroImage = {
  src: "/images/teaching-1a.jpg",
  alt: "Professional accountant reviewing financial documents with a client",
  label: "Your dedicated accountant",
};

const contactCardHighlights = [
  "Free Learning Assessment",
  "Free initial consultation",
  "No obligation",
  "Response within 1 business day",
];

function ContactInfoCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-auto rounded-[8px] border border-primary/12 bg-section-white p-5 shadow-lg shadow-primary/8 ring-1 ring-primary/8 sm:p-8 lg:flex lg:h-full lg:flex-col lg:justify-between ${className}`}
    >
      <div>
        <p className="font-serif text-2xl font-medium text-primary">
          Free Learning Assessment
        </p>
        <p className="mt-2 text-sm text-text-muted">
          Speak with an experienced tutor about your child&apos;s learning needs — no obligation,
          no pressure.
        </p>

        <ul className="mt-6 space-y-3">
          {contactCardHighlights.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-text">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 ring-1 ring-accent/25">
                <IconCheck className="h-3 w-3 text-accent-text" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="#contact-form"
        className="mt-6 hidden items-center justify-center gap-2 rounded-full bg-accent-button px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/15 transition-all hover:bg-accent-button-hover hover:shadow-lg lg:mt-0 lg:inline-flex lg:w-full"
      >
        Book Free Assessment
        <IconArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

const shallowImageClasses =
  "!aspect-auto rounded-none shadow-none ring-0";

export default function HeroSection({
  eyebrow = "TRUSTED EDUCATION SUPPORT",
  title,
  description,
  primaryCta = { label: "Book a free consultation", href: "/contact" },
  secondaryCta = { label: "View our services", href: "/services" },
  highlights = [
    "Flexible learning plans",
    "Experienced tutors",
    "Clear progress updates",
  ],
  image = defaultHeroImage,
  showConsultationCard = true,
  showContactCard = false,
  padding = "default",
  imageLayout = "split",
  internalLayout = false,
}: HeroSectionProps) {
  const isShallowImage = imageLayout === "shallow";
  const splitImageClasses = "!aspect-auto h-[440px] sm:h-[520px] lg:!aspect-[4/5] lg:h-auto";

  const paddingClass = internalLayout
    ? `${heroBreathing} ${sectionBottom}`
    : padding === "contact"
      ? "py-16 lg:py-24"
      : "py-16 sm:py-24 lg:py-32";

  const alignClass = showContactCard
    ? "items-start lg:items-stretch"
    : padding === "default"
      ? "items-center"
      : "items-start";

  if (isShallowImage && !showContactCard && image) {
    return (
      <section className="relative overflow-hidden bg-section-warm">
        <div className={`relative ${homeHeroImageClasses}`}>
          <ImagePlaceholder
            src={image.src}
            alt={image.alt}
            label={image.label}
            aspectRatio="wide"
            priority
            className={`h-full w-full ${shallowImageClasses}`}
          />
        </div>

        <Container className={`relative ${paddingClass}`}>
          <div className="mx-auto max-w-[800px] text-center">
            <span className="mx-auto mb-4 block h-1 w-10 rounded-none bg-accent-text" />
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-text">
              {eyebrow}
            </p>
            <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-muted sm:text-xl">
              {description}
            </p>

            {highlights.length > 0 && (
              <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center justify-center gap-2 text-sm font-medium text-text">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 ring-1 ring-accent/25">
                      <IconCheck className="h-3 w-3 text-accent-text" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-10 flex w-full max-[359px]:flex-col max-[359px]:items-stretch flex-row items-center justify-center gap-2 min-[360px]:gap-3">
              <Link
                href={primaryCta.href}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-button px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/15 transition-all hover:bg-accent-button-hover hover:shadow-lg min-[360px]:flex-none"
              >
                {primaryCta.label}
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-primary/25 bg-section-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary/40 hover:bg-primary/5 min-[360px]:flex-none"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-section-warm">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,_rgba(250,249,246,0.95)_0%,_transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,_rgba(245,158,122,0.12)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_5%_85%,_rgba(15,118,110,0.08)_0%,_transparent_45%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-primary/10" />

      <Container className={`relative grid ${alignClass} gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 ${paddingClass}`}>
        <div>
          <span className="mb-4 block h-1 w-10 rounded-none bg-accent-text" />
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-text">
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted sm:text-xl">
            {description}
          </p>

          {!showContactCard && highlights.length > 0 && (
            <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-text">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 ring-1 ring-accent/25">
                    <IconCheck className="h-3 w-3 text-accent-text" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className={`flex flex-col gap-4 sm:flex-row sm:items-center ${showContactCard ? "mt-8" : "mt-10"}`}>
            <Link
              href={primaryCta.href}
              className={`inline-flex items-center justify-center gap-2 rounded-full bg-accent-button px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/15 transition-all hover:bg-accent-button-hover hover:shadow-lg${showContactCard ? " lg:hidden" : ""}`}
            >
              {primaryCta.label}
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-section-white px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>

        {showContactCard && (
          <div className="w-full lg:h-full">
            <ContactInfoCard />
          </div>
        )}

        {!showContactCard && image && (
          <div
            className={
              internalLayout
                ? "relative w-full"
                : `relative -mx-5 min-[768px]:-mx-6 min-[1060px]:-mx-8 lg:mx-0 ${
                    showConsultationCard ? "pb-12 sm:pb-14" : "pb-0"
                  } lg:pb-0`
            }
          >
            <div
              className={
                internalLayout
                  ? "relative w-full"
                  : "relative mx-5 min-[768px]:mx-6 min-[1060px]:mx-8 lg:mx-0"
              }
            >
              <ImagePlaceholder
                src={image.src}
                alt={image.alt}
                label={image.label}
                aspectRatio="hero"
                priority
                className={splitImageClasses}
              />

              {showConsultationCard && (
                <div className="absolute inset-x-6 bottom-6 translate-y-[66px] lg:inset-x-0 lg:bottom-5 lg:translate-y-0">
                  <div className="rounded-[8px] border border-primary/12 bg-section-white p-5 shadow-lg shadow-primary/8 ring-1 ring-primary/8 sm:p-6 lg:mx-5 lg:bg-section-white/95 lg:backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent-text">
                      Next available
                    </p>
                    <p className="mt-2 font-serif text-xl font-medium text-primary">
                      Free Learning Assessment
                    </p>
                    <p className="mt-2 text-sm text-text-muted">
                      Book a free learning assessment and explore how we can support academic success.
                    </p>
                    <div className="mt-4 flex items-center gap-3 border-t border-primary/10 pt-4">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                        <Image
                          src="/images/profile-sarah.png"
                          alt="Sarah Ahmed"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text">Sarah Ahmed</p>
                        <p className="text-xs text-text-muted">Lead Learning Advisor</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
