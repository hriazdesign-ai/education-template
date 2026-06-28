import Container from "@/components/Container";
import SectionIntro from "@/components/SectionIntro";
import { testimonials } from "@/lib/content";
import {
  cardsToCta,
  contentToCards,
  darkBlockGroup,
  darkBlockLarge,
  groupGap,
  sectionBottom,
} from "@/lib/layout";

function StarRating({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <div className="flex gap-1 text-[var(--figma-coral)]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`${className} fill-current`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

type TestimonialCardsProps = {
  spacing?: "home" | "internal";
};

export default function TestimonialCards({ spacing = "home" }: TestimonialCardsProps) {
  const isInternal = spacing === "internal";

  return (
    <section
      id="testimonials"
      className={`bg-[var(--figma-navy)] ${sectionBottom}`}
    >
      <Container className={isInternal ? darkBlockLarge : undefined}>
        <SectionIntro
          eyebrow="Testimonials"
          title="Trusted by parents and students"
          description="Hear from parents and students who have experienced the difference personalised support can make."
          light
          pillVariant="dark"
        />
      </Container>

      <Container className={isInternal ? darkBlockGroup : contentToCards}>
        <div className={isInternal ? "w-full" : "w-full rotate-2"}>
          <div
            className={`w-full border border-[var(--figma-hero-teal)]/40 bg-white p-5 min-[1060px]:p-7 ${
              isInternal
                ? "min-[1060px]:mx-auto min-[1060px]:max-w-[520px]"
                : "min-[1060px]:mx-auto min-[1060px]:max-w-[600px]"
            }`}
          >
              <div className="flex flex-col items-center gap-4 text-center min-[1060px]:gap-5">
                <span className="inline-flex w-fit rounded-[52px] bg-[var(--figma-hero-teal)]/10 px-4 py-2.5 text-xs font-semibold capitalize leading-4 text-[var(--figma-ink)] min-[1060px]:px-[18px] min-[1060px]:py-3">
                  Google Reviews
                </span>
                <StarRating className="h-7 w-7 min-[1060px]:h-9 min-[1060px]:w-9" />
                <div className="flex flex-col gap-2 min-[1060px]:gap-3">
                  <p className="text-[26px] leading-[36px] tracking-[-0.4px] text-[var(--figma-ink)] min-[768px]:text-[32px] min-[768px]:leading-[44px] min-[1060px]:text-[40px]">
                    Rated 4.9/5 by Parents &amp; Students
                  </p>
                  <p className="text-base leading-[22px] text-[var(--figma-ink)]">
                    Based on 120+ verified Google reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
      </Container>

      <Container className={isInternal ? cardsToCta : undefined}>
        <div className={`grid min-[768px]:grid-cols-3 ${groupGap}`}>
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={
                isInternal
                  ? ""
                  : `${["-rotate-1", "-rotate-3", "rotate-2"][index]} transition-transform duration-300 hover:scale-[1.02]`
              }
            >
              <div className="flex h-full flex-col gap-4 bg-[var(--figma-testimonial-peach)] p-5 min-[1060px]:gap-6 min-[1060px]:p-7">
                <div className="flex flex-col gap-3 min-[1060px]:gap-4">
                  <StarRating />
                  <p className="text-sm leading-[22px] text-[var(--figma-ink)] min-[1060px]:text-base">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                <footer className="mt-auto flex items-start gap-3 border-t border-white/40 pt-4 min-[1060px]:gap-4 min-[1060px]:pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--figma-ink)] text-sm text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <cite className="not-italic text-base font-semibold leading-4 tracking-[-0.02em] text-[var(--figma-ink)]">
                      {testimonial.name}
                    </cite>
                    <p className="mt-2 text-sm leading-[14px] tracking-[-0.02em] text-[var(--figma-ink)]">
                      {testimonial.role}
                    </p>
                  </div>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
