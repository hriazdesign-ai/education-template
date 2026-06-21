import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
import { siteConfig } from "@/lib/content";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = "Ready to unlock your child's potential?",
  description = "Book a free learning assessment and discover how personalised support can help build confidence, improve grades and develop lifelong learning skills.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-end py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(245,158,122,0.25)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_90%,_rgba(255,255,255,0.04)_0%,_transparent_45%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <span className="mx-auto mb-4 block h-1 w-10 rounded-none bg-accent-on-dark" />
        <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white sm:text-lg">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary shadow-lg shadow-black/20 transition-all hover:bg-section-warm hover:shadow-xl hover:shadow-black/25"
          >
            Book your free assessment
            <IconArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="text-sm font-semibold text-white underline-offset-4 transition-colors hover:underline"
          >
            Or call us on {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
