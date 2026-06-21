import SectionHeading from "@/components/SectionHeading";
import { cardHoverClass } from "@/lib/card-styles";
import { testimonials } from "@/lib/content";
import { type SectionTone, sectionToneClasses } from "@/lib/section-tones";

type TestimonialsSectionProps = {
  tone?: SectionTone;
};

function StarRating({ size = "md" }: { size?: "md" | "lg" }) {
  const sizeClass = size === "lg" ? "h-6 w-6" : "h-5 w-5";

  return (
    <div className="flex justify-center gap-1 text-accent-button" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`${sizeClass} fill-current`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection({ tone = "white" }: TestimonialsSectionProps) {
  return (
    <section className={`${sectionToneClasses[tone]} py-16 sm:py-24`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center text-center sm:mb-12">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by parents and students"
            description="Hear from parents and students who have experienced the difference personalised support can make."
          />
        </div>

        <div className="mx-auto mb-12 max-w-xl rounded-[8px] border border-primary/10 bg-section-mint px-8 py-10 text-center sm:mb-16 sm:px-12 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-text">
            Google Reviews
          </p>
          <div className="mt-4">
            <StarRating size="lg" />
          </div>
          <p className="mt-5 font-serif text-3xl font-medium tracking-tight text-primary sm:text-4xl">
          Rated 4.9/5 by Parents & Students
          </p>
          <p className="mt-3 text-sm text-text-muted">
            Based on 120+ verified Google reviews
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className={`flex flex-col rounded-[8px] border border-primary/10 bg-section-warm p-6 sm:p-8 ${cardHoverClass}`}
            >
              <div className="flex gap-1 text-accent-button">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-primary/10 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white ring-2 ring-accent/25">
                  {testimonial.initials}
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold text-text">
                    {testimonial.name}
                  </cite>
                  <p className="text-xs text-text-muted">{testimonial.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
