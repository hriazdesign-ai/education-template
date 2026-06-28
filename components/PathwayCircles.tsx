/** Education Pathways section — homepage only, rendered from app/page.tsx */
import Container from "@/components/Container";
import SectionIntro from "@/components/SectionIntro";

const pathways = [
  { label: "Primary", lines: ["Primary"], tone: "green" as const },
  { label: "KS2 SATs", lines: ["KS2 SATs"], tone: "yellow" as const },
  { label: "11+ Entrance", lines: ["11+", "Entrance"], tone: "green" as const },
  { label: "GCSE", lines: ["GCSE"], tone: "yellow" as const },
  { label: "A-Level", lines: ["A-Level"], tone: "green" as const },
  { label: "Online Tuition", lines: ["Online", "Tuition"], tone: "yellow" as const },
];

const toneClasses = {
  green: "bg-[var(--figma-green)]",
  yellow: "bg-[var(--figma-quote-yellow)]",
};

export default function PathwayCircles() {
  return (
    <section id="resources" className="bg-[var(--figma-hero-teal)] pb-16 pt-16 min-[1060px]:pb-20 min-[1060px]:pt-20">
      <Container>
        <SectionIntro
          eyebrow="Education Pathways"
          title="Supporting learners at every stage"
          light
          pillVariant="pathway"
          className="mx-auto max-w-none gap-8 pb-[60px]"
        />

        <div className="flex flex-col items-center gap-10">
          <ul
            data-pathway-circles
            className="grid w-full grid-cols-2 gap-4 min-[768px]:grid-cols-3 min-[1060px]:grid-cols-6 min-[1060px]:gap-4"
          >
            {pathways.map((pathway) => (
              <li key={pathway.label} className="flex w-full justify-center">
                <div
                  data-pathway-circle
                  className={`flex aspect-square w-full max-w-[158px] flex-col items-center justify-center rounded-full px-3 text-center min-[1060px]:max-w-none min-[1060px]:px-4 ${toneClasses[pathway.tone]}`}
                >
                  {pathway.lines.map((line) => (
                    <span
                      key={line}
                      className="text-sm font-semibold uppercase leading-[22px] text-[var(--figma-ink)] min-[1060px]:text-[20px] min-[1060px]:leading-[22px]"
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
