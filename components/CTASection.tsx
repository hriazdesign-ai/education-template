import Link from "next/link";
import Container from "@/components/Container";
import { siteConfig, ctaPrimaryLabel } from "@/lib/content";
import { sectionIntroGap, sectionY } from "@/lib/layout";

type CTASectionProps = {
  title?: string;
  description?: string;
  variant?: "default" | "homepage";
  primaryButtonLabel?: string;
};

export default function CTASection({
  title = "Ready to unlock your child's potential?",
  description = "Book a free learning assessment and discover how personalised support can help build confidence, improve grades and develop lifelong learning skills.",
  variant = "default",
  primaryButtonLabel,
}: CTASectionProps) {
  const sectionPadding = sectionY;

  if (variant === "homepage") {
    return (
      <section className={`bg-[rgba(12,29,49,0.9)] ${sectionPadding}`}>
        <Container
          size="prose"
          className={`flex flex-col items-center text-center ${sectionIntroGap}`}
        >
          <h2 className="text-[28px] font-normal leading-[38px] tracking-[-0.4px] text-white min-[768px]:text-[32px] min-[768px]:leading-[44px] min-[1060px]:text-[40px]">
            {title}
          </h2>
          <p className="text-base leading-[22px] text-white">{description}</p>
          <div className="flex w-full max-[359px]:flex-col max-[359px]:items-stretch flex-row flex-wrap items-center justify-center gap-2.5 min-[360px]:gap-3 min-[768px]:gap-7">
            <Link
              href="/contact"
              className="inline-flex flex-1 items-center justify-center rounded-[64px] bg-[var(--figma-coral)] px-3 py-3 text-xs font-semibold text-white transition-opacity hover:opacity-90 min-[360px]:flex-none min-[768px]:px-4 min-[768px]:py-4 min-[768px]:text-base"
            >
              {primaryButtonLabel ?? ctaPrimaryLabel}
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex flex-1 items-center justify-center rounded-[64px] bg-white px-3 py-3 text-xs font-semibold text-[var(--figma-ink)] transition-opacity hover:opacity-90 min-[360px]:flex-none min-[768px]:px-4 min-[768px]:py-4 min-[768px]:text-base"
            >
              Or call us on {siteConfig.phone}
            </a>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-end ${sectionPadding}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(245,158,122,0.25)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_90%,_rgba(255,255,255,0.04)_0%,_transparent_45%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <Container size="prose" className="relative text-center">
        <span className="mx-auto mb-4 block h-1 w-10 rounded-none bg-accent-on-dark" />
        <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white sm:text-lg">{description}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary shadow-lg shadow-black/20 transition-all hover:bg-section-warm hover:shadow-xl hover:shadow-black/25"
          >
            {ctaPrimaryLabel}
          </Link>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="text-sm font-semibold text-white underline-offset-4 transition-colors hover:underline"
          >
            Or call us on {siteConfig.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
