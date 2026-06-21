import Image from "next/image";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { IconArrowRight, IconCheck } from "@/components/icons";

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
};

const defaultHeroImage: HeroImage = {
  src: "/images/teaching-1.jpg",
  alt: "Professional accountant reviewing financial documents with a client",
  label: "Your dedicated accountant",
};

const contactCardHighlights = [
  "Free Learning Assessment",
  "Free initial consultation",
  "No obligation",
  "Response within 1 business day",
];

function ContactInfoCard() {
  return (
    <div className="rounded-[8px] border border-primary/12 bg-section-white p-5 shadow-lg shadow-primary/8 ring-1 ring-primary/8 sm:p-8">
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
  );
}

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
}: HeroSectionProps) {
  const paddingClass =
    padding === "contact"
      ? "py-16 lg:py-24"
      : "py-16 sm:py-24 lg:py-32";

  const alignClass = padding === "default" ? "items-center" : "items-start";

  return (
    <section className="relative overflow-hidden bg-section-warm">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,_rgba(255,252,248,0.95)_0%,_transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,_rgba(47,125,107,0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_5%_85%,_rgba(30,58,95,0.07)_0%,_transparent_45%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-primary/10" />

      <div className={`relative mx-auto grid max-w-6xl ${alignClass} gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 ${paddingClass}`}>
        <div>
          <span className="mb-4 block h-1 w-10 rounded-none bg-accent-text" />
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-text">
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-button px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/15 transition-all hover:bg-accent-button-hover hover:shadow-lg"
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
          <div className="w-full max-w-none sm:max-w-none lg:max-w-none">
            <ContactInfoCard />
          </div>
        )}

        {!showContactCard && image && (
          <div
            className={`relative -mx-4 sm:-mx-6 lg:mx-0 ${
              showConsultationCard ? "pb-12 sm:pb-14" : "pb-0"
            } lg:pb-0`}
          >
            <div className="relative mx-4 sm:mx-6 lg:mx-0">
              <ImagePlaceholder
                src={image.src}
                alt={image.alt}
                label={image.label}
                aspectRatio="hero"
                priority
                className="!aspect-auto h-[440px] sm:h-[520px] lg:!aspect-[4/5] lg:h-auto"
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
      </div>
    </section>
  );
}
