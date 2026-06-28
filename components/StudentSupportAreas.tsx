import Link from "next/link";
import Container from "@/components/Container";
import { IconArrowRight } from "@/components/icons";
import {
  contentToCards,
  sectionBottom,
  sectionIntroGap,
} from "@/lib/layout";

const supportAreas = [
  {
    number: 1,
    title: "Building Confidence",
    description:
      "Helping students feel more confident, motivated and willing to engage with learning. We create a supportive environment where learners feel comfortable asking questions and taking on new challenges.",
  },
  {
    number: 2,
    title: "Closing Learning Gaps",
    description:
      "Identifying areas of difficulty and rebuilding confidence through targeted support. We strengthen core understanding step by step to create solid foundations for future learning.",
  },
  {
    number: 3,
    title: "Managing Exam Anxiety",
    description:
      "Helping students feel calmer and more prepared through structured revision and supportive guidance. We focus on reducing stress while building confidence before assessments and exams.",
  },
  {
    number: 4,
    title: "Study Habits & Organisation",
    description:
      "Developing routines, organisation and independent study skills that last beyond the classroom. Students learn how to manage their time, stay focused and take ownership of their learning.",
  },
  {
    number: 5,
    title: "Keeping Parents Informed",
    description:
      "Providing clear communication and regular updates so parents feel involved and informed. We believe strong partnerships between tutors and families lead to better outcomes for students.",
  },
  {
    number: 6,
    title: "Flexible Support",
    description:
      "Adapting lessons and support around school, family life and each student's pace of learning. Whether online or in person, we provide guidance that works for each learner's individual needs.",
  },
];

const cardSurfaceClasses = [
  "relative flex h-full min-h-full flex-col overflow-hidden",
  "bg-[var(--figma-mint-bg)]",
  "transition-colors duration-[250ms] ease-out",
  "group-hover:bg-white group-focus-within:bg-white",
].join(" ");

const accentBarClasses = [
  "pointer-events-none absolute left-0 top-0 z-10 block h-1 w-full",
  "origin-left bg-[var(--figma-coral)] opacity-0",
  "[transform:scaleX(0)]",
  "transition-[transform,opacity]",
  "[transition-duration:350ms,120ms]",
  "[transition-timing-function:cubic-bezier(0.22,1,0.36,1),ease-out]",
  "group-hover:opacity-100 group-hover:[transform:scaleX(1)]",
  "group-focus-within:opacity-100 group-focus-within:[transform:scaleX(1)]",
  "motion-reduce:transition-none",
].join(" ");

export default function StudentSupportAreas() {
  return (
    <section className={`bg-[var(--figma-mint-bg)] ${sectionBottom}`}>
      <Container>
        <Container
          size="prose"
          pad={false}
          className={`mx-auto flex flex-col items-center text-center ${sectionIntroGap}`}
        >
          <h2 className="text-[28px] font-normal leading-[38px] tracking-[-0.4px] text-[var(--figma-ink)] min-[768px]:text-[32px] min-[768px]:leading-[44px] min-[1060px]:text-[40px]">
            More than tuition
          </h2>
          <p className="text-base leading-[22px] text-[var(--figma-ink)]">
            Learning support is about more than grades. We help students build confidence, develop
            better habits and become more independent learners.
          </p>
        </Container>
      </Container>

      <Container className={contentToCards}>
        <ul className="grid gap-4 min-[768px]:grid-cols-3 min-[768px]:gap-0 min-[768px]:border min-[768px]:border-[var(--figma-hero-teal)]/40">
          {supportAreas.map((area, index) => {
            const isLast = index === supportAreas.length - 1;
            const isLastCol = index % 3 === 2;
            const isLastRow = index >= 3;

            return (
              <li
                key={area.title}
                className={`group relative h-full border border-[var(--figma-hero-teal)]/40 min-[768px]:border-0 ${
                  !isLast ? "min-[768px]:border-b" : ""
                } ${!isLastCol ? "min-[768px]:border-r" : ""} ${
                  isLastRow ? "min-[768px]:border-b-0" : ""
                }`}
              >
                <div
                  className={`${cardSurfaceClasses} flex flex-col gap-6 px-6 py-8 min-[768px]:gap-10 min-[768px]:px-7 min-[768px]:py-10`}
                >
                  <span aria-hidden="true" className={accentBarClasses} />
                  <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-white text-lg tracking-[-0.36px] text-[var(--figma-ink)] transition-colors duration-[250ms] ease-out group-hover:bg-[#F2F7F7] group-focus-within:bg-[#F2F7F7]">
                    {area.number}
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl leading-[22px] tracking-[-0.2px] text-[var(--figma-ink)]">
                      {area.title}
                    </h3>
                    <p className="text-base leading-[22px] text-[var(--figma-ink)]">
                      {area.description}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-auto flex items-center justify-between gap-4 text-base font-medium uppercase leading-[22px] text-[var(--figma-ink)]/60 transition-[color] duration-[250ms] ease-out group-hover:text-[var(--figma-ink)] group-focus-within:text-[var(--figma-ink)]"
                  >
                    <span>Learn More</span>
                    <IconArrowRight className="h-4 w-4 shrink-0 transition-transform duration-[250ms] ease-out group-hover:translate-x-1.5 group-focus-within:translate-x-1.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-focus-within:translate-x-0" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
