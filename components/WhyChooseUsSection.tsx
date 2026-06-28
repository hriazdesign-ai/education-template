import Container from "@/components/Container";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/SectionHeading";
import { cardHoverClass } from "@/lib/card-styles";
import { whyChooseUs } from "@/lib/content";
import { type SectionTone, sectionToneClasses } from "@/lib/section-tones";

type WhyChooseUsSectionProps = {
  tone?: SectionTone;
};

export default function WhyChooseUsSection({ tone = "mint" }: WhyChooseUsSectionProps) {
  return (
    <section className={`${sectionToneClasses[tone]} py-16 sm:py-20`}>
      <Container>
        <div>
          <ImagePlaceholder
            src="/images/teaching-2.jpg"
            alt="Modern architectural office building and financial workspace"
            label="Modern business environment"
            aspectRatio="banner"
          />
        </div>

        <div className="mt-16 grid items-stretch gap-12 sm:mt-20 lg:mt-24 lg:grid-cols-2 lg:gap-16">
          <div className="flex h-full flex-col">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Building confidence as well as results"
              description="We combine experienced tutors with a personal, supportive approach — so every student feels seen, encouraged and ready to improve."
              align="left"
            />

            <div className="mt-10 flex flex-1 flex-col rounded-[8px] border border-primary/15 bg-primary p-6 shadow-lg shadow-primary/15 sm:mt-12 sm:p-8 lg:h-full">
              <div className="mb-4 h-1 w-10 rounded-none bg-accent-on-dark" />
              <p className="font-serif text-2xl font-medium leading-snug text-white">
                &ldquo;Our daughter gained confidence, improved her grades and now actually enjoys learning.&rdquo;
              </p>
              <p className="mt-4 text-sm text-white/90">
                — Parent of GCSE Student
              </p>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:pt-2">
            {whyChooseUs.map((item, index) => (
              <li
                key={item.title}
                className={`rounded-[8px] border border-primary/10 bg-section-white p-5 sm:p-6 ${cardHoverClass}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium ring-1 ${
                      index % 2 === 0
                        ? "bg-primary/12 text-primary ring-primary/15"
                        : "bg-accent/12 text-accent-text ring-accent/15"
                    }`}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="min-w-0 font-serif text-lg font-medium leading-snug text-text">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-normal text-text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
