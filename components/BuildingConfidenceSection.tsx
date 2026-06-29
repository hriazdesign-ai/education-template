import Container from "@/components/Container";
import SectionIntro from "@/components/SectionIntro";
import { whyChooseUs } from "@/lib/content";
import { groupGap, sectionBottom } from "@/lib/layout";

const numberStyles = [
  "bg-[var(--figma-quote-yellow)] text-black",
  "bg-[var(--figma-green)] text-black",
  "bg-[var(--figma-quote-yellow)] text-black",
  "bg-[var(--figma-green)] text-black",
];

export default function BuildingConfidenceSection() {
  return (
    <section className={`bg-[var(--figma-navy)] ${sectionBottom}`}>
      <Container className={`grid items-start ${groupGap} min-[1060px]:grid-cols-2`}>
        <div className={`flex flex-col ${groupGap}`}>
          <SectionIntro
            eyebrow="Trusted Education Support"
            title="Building confidence as well as results"
            description="We combine experienced tutors with a personal, supportive approach so every student feels seen, encouraged and ready to improve."
            light
            pillVariant="dark"
            align="left"
            className="max-w-none"
          />

          <div className="-rotate-3">
            <blockquote className="bg-[var(--figma-quote-yellow)] px-6 py-8">
              <p className="font-display text-[28px] leading-[1.4] tracking-[-0.01em] text-[var(--figma-ink)] min-[1060px]:text-[40px] min-[1060px]:leading-[64px]">
                &ldquo;Our daughter gained confidence, improved her grades and now actually enjoys
                learning.&rdquo;
              </p>
              <footer className="mt-8 text-base leading-[22px] text-[var(--figma-ink)]">
                — Parent of GCSE Student
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="w-full self-start border border-white/40">
          <ul>
            {whyChooseUs.map((item, index) => (
              <li
                key={item.title}
                className={`grid grid-cols-[auto_1fr] gap-x-8 gap-y-4 border-white/40 p-5 ${
                  index < whyChooseUs.length - 1 ? "border-b" : ""
                }`}
              >
                <span
                  className={`col-start-1 row-start-1 self-center flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg ${numberStyles[index]}`}
                >
                  {index + 1}
                </span>
                <h3 className="col-start-2 row-start-1 self-center text-xl leading-[22px] tracking-[-0.01em] text-white">
                  {item.title}
                </h3>
                <p className="col-start-2 row-start-2 text-base leading-[22px] text-white">
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
