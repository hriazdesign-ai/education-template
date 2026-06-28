import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { IconArrowRight, ServiceIcon } from "@/components/icons";
import { cardHoverClass } from "@/lib/card-styles";
import { services } from "@/lib/content";
import {
  type SectionTone,
  sectionToneClasses,
  serviceIconStyles,
} from "@/lib/section-tones";

type ServicesGridProps = {
  showHeading?: boolean;
  limit?: number;
  tone?: SectionTone;
  compactBottom?: boolean;
};

export default function ServicesGrid({
  showHeading = true,
  limit,
  tone = "white",
  compactBottom = false,
}: ServicesGridProps) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  const sectionPadding = compactBottom
    ? "pt-16 pb-12 sm:pt-24 sm:pb-16"
    : "py-16 sm:py-24";

  return (
    <section className={`${sectionToneClasses[tone]} ${sectionPadding}`}>
      <Container>
        {showHeading && (
          <Container size="prose" pad={false} className="mb-12 flex flex-col items-center text-center sm:mb-16">
            <span className="mx-auto mb-4 block h-1 w-10 rounded-full bg-accent-text" />
            <SectionHeading
              showKeyline={false}
              eyebrow="Our Services"
              title="Support for every stage of learning"
              description="From personalised tutoring and homework support to GCSE and A-Level preparation."
            />
          </Container>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service) => {
            const iconStyle =
              serviceIconStyles[service.icon] ?? serviceIconStyles.document;

            return (
              <article
                key={service.title}
                className={`group relative overflow-hidden rounded-[8px] border border-primary/12 bg-section-white p-6 sm:p-8 ${cardHoverClass}`}
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ring-1 ${iconStyle.bg} ${iconStyle.text} ${iconStyle.ring} transition-all duration-300 ${iconStyle.hover} group-hover:text-white group-hover:ring-transparent`}
                >
                  <ServiceIcon name={service.icon} className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-serif text-xl font-medium text-primary">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-accent-text opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more
                </p>
              </article>
            );
          })}
        </div>

        {showHeading && (
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-accent-text/25 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent-text transition-colors hover:border-accent-text/40 hover:bg-accent/15"
            >
              View all services
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
