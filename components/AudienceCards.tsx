import Image from "next/image";
import Container from "@/components/Container";
import { IconCheck } from "@/components/icons";
import SectionIntro from "@/components/SectionIntro";
import { audiences } from "@/lib/content";
import { publicImageExists } from "@/lib/image-utils";
import { contentToCards, sectionBottom } from "@/lib/layout";

const IMAGE_HEIGHT = "h-[150px] min-[768px]:h-[200px] min-[1060px]:h-[220px]";

function AudienceImage({ src, alt }: { src: string; alt: string }) {
  if (publicImageExists(src)) {
    return (
      <div className={`relative w-full overflow-hidden ${IMAGE_HEIGHT}`}>
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-br from-[var(--figma-navy)] via-[var(--figma-hero-teal)]/40 to-[var(--figma-navy)] ${IMAGE_HEIGHT}`}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_transparent_40%,_rgba(12,29,49,0.55)_100%)]" />
    </div>
  );
}

export default function AudienceCards() {
  return (
    <section className={`bg-[var(--figma-navy)] ${sectionBottom}`}>
      <Container>
        <SectionIntro
          eyebrow="Who We Help"
          title="Support tailored to every learner"
          description="Whether your child is building confidence in primary school or preparing for important exams, we tailor support to their goals."
          light
          pillVariant="dark"
        />
      </Container>

      <Container className={contentToCards}>
        <ul className="grid gap-4 min-[768px]:grid-cols-3 min-[1060px]:gap-6">
          {audiences.map((audience, index) => {
            const isCenter = index === 1;

            return (
              <li
                key={audience.title}
                className="flex flex-col border border-white/25"
              >
                <div className="relative">
                  <AudienceImage src={audience.image} alt={audience.imageAlt} />
                  <span
                    className={`absolute bottom-0 left-8 z-10 translate-y-1/2 rounded-none px-3 py-2 text-xs font-semibold uppercase leading-4 ${
                      isCenter
                        ? "bg-[var(--figma-coral)] text-[var(--figma-ink)]"
                        : "bg-text-muted text-white"
                    }`}
                  >
                    {audience.title}
                  </span>
                </div>

                <div
                  className={`flex flex-col gap-4 px-8 pb-6 pt-9 min-[1060px]:gap-5 min-[1060px]:pb-7 min-[1060px]:pt-10 ${
                    isCenter
                      ? "bg-[var(--figma-mint-bg)] text-[var(--figma-ink)]"
                      : "bg-[var(--figma-navy)] text-white"
                  }`}
                >
                  <p className="text-base leading-[22px]">{audience.description}</p>

                  <ul className="flex flex-col gap-2.5 min-[1060px]:gap-3">
                    {audience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-3 text-base font-semibold leading-[22px]"
                      >
                        <IconCheck
                          className={`h-4 w-4 shrink-0 ${
                            isCenter ? "text-[var(--figma-hero-teal)]" : "text-[var(--figma-coral)]"
                          }`}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
