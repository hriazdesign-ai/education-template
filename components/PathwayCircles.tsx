/** Education Pathways section — homepage only, rendered from app/page.tsx */
import Container from "@/components/Container";
import SectionIntro from "@/components/SectionIntro";
import { contentToCards, groupBottom, groupGap, sectionTop } from "@/lib/layout";

const pathways = [
  { label: "Primary", lines: ["Primary"], border: "strong" as const },
  { label: "KS2 SATs", lines: ["KS2 SATs"], border: "muted" as const },
  { label: "11+ Entrance", lines: ["11+", "Entrance"], border: "strong" as const },
  { label: "GCSE", lines: ["GCSE"], border: "muted" as const },
  { label: "A-Level", lines: ["A-Level"], border: "strong" as const },
  { label: "Online Tuition", lines: ["Online", "Tuition"], border: "muted" as const },
];

const borderClasses = {
  strong: "border-white",
  muted: "border-white/40",
};

export default function PathwayCircles() {
  return (
    <section id="resources" className={`bg-[var(--figma-hero-teal)] ${sectionTop} ${groupBottom}`}>
      <Container>
        <SectionIntro
          eyebrow="Education Pathways"
          title="Supporting learners at every stage"
          light
          pillVariant="pathway"
          className="mx-auto max-w-none"
        />

        <div className={`flex flex-col items-center ${contentToCards} ${groupGap}`}>
          <ul
            data-pathway-circles
            className="grid w-full grid-cols-2 gap-4 min-[768px]:grid-cols-3 min-[1060px]:grid-cols-6 min-[1060px]:gap-4"
          >
            {pathways.map((pathway) => (
              <li key={pathway.label} className="flex w-full justify-center">
                <div
                  data-pathway-circle
                  className={`flex h-[100px] w-full flex-col items-center justify-center rounded-full border border-solid px-4 text-center min-[1060px]:px-6 ${borderClasses[pathway.border]}`}
                >
                  {pathway.lines.map((line) => (
                    <span
                      key={line}
                      className="text-[16px] font-semibold uppercase leading-[18px] tracking-[1px] text-white"
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <p className="max-w-[800px] text-center text-base leading-[22px] text-white">
            Specialist support from primary school through to A-Level, tailored to each
            student&apos;s goals and learning style.
          </p>
        </div>
      </Container>
    </section>
  );
}
