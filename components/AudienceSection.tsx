import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { IconCheck } from "@/components/icons";
import { audiences } from "@/lib/content";
import { type SectionTone, sectionToneClasses } from "@/lib/section-tones";

type AudienceSectionProps = {
  tone?: SectionTone;
  compactTop?: boolean;
};

export default function AudienceSection({
  tone = "white",
  compactTop = false,
}: AudienceSectionProps) {
  const isWhite = tone === "white";

  const sectionPadding = compactTop
    ? "pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pb-32"
    : "pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pb-32";

  return (
    <section className={`${sectionToneClasses[tone]} ${sectionPadding}`}>
      <Container>
        <Container size="prose" pad={false} className="mb-12 flex flex-col items-center text-center sm:mb-16 lg:mb-20">
          <SectionHeading
            eyebrow="Who We Help"
            title="Support tailored to every learner"
            description="Whether your child is building confidence in primary school or preparing for important exams, we tailor support to their goals."
          />
        </Container>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {audiences.map((audience, index) => (
            <article
              key={audience.title}
              className={`rounded-[8px] border p-6 transition-shadow duration-300 sm:p-8 ${
                index === 1
                  ? "border-accent/30 bg-primary text-white shadow-xl shadow-primary/15 lg:-mt-2 lg:mb-2"
                  : isWhite
                    ? "border-primary/10 bg-section-warm shadow-sm hover:shadow-md hover:shadow-primary/8"
                    : "border-primary/12 bg-section-white shadow-sm hover:shadow-md hover:shadow-primary/8"
              }`}
            >
              <span
                className={`inline-block rounded-none px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                  index === 1
                    ? "bg-white/15 text-accent-on-dark"
                    : "bg-accent/10 text-accent-text"
                }`}
              >
                {audience.title}
              </span>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  index === 1 ? "text-white/90" : "text-text-muted"
                }`}
              >
                {audience.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {audience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className={`flex items-center gap-2 text-sm font-medium ${
                      index === 1 ? "text-white" : "text-text"
                    }`}
                  >
                    <IconCheck
                      className={`h-4 w-4 shrink-0 ${
                        index === 1 ? "text-accent-on-dark" : "text-accent-text"
                      }`}
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
