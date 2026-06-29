import Container from "@/components/Container";
import EyebrowPill from "@/components/EyebrowPill";
import { groupGap, sectionBottom, sectionIntroGap, sectionTop } from "@/lib/layout";

const processSteps = [
  {
    title: "Free Learning Consultation",
    description:
      "We start with a conversation to understand your child's needs, goals and current challenges.",
  },
  {
    title: "Personal Learning Plan",
    description:
      "We create a tailored support plan based on confidence, ability and learning style.",
  },
  {
    title: "Ongoing Support",
    description:
      "Students receive consistent guidance through tutoring, mentoring or study support.",
  },
  {
    title: "Progress & Feedback",
    description:
      "Parents receive clear updates so they can see how confidence and progress are developing.",
  },
];

const numberStyles = [
  "bg-[var(--figma-quote-yellow)] text-black",
  "bg-[var(--figma-green)] text-black",
  "bg-[var(--figma-quote-yellow)] text-black",
  "bg-[var(--figma-green)] text-black",
];

export default function StudentSupportProcessSection() {
  return (
    <section className={`bg-[var(--figma-navy)] ${sectionTop} ${sectionBottom}`}>
      <Container>
        <div className="grid items-start gap-0 min-[1060px]:grid-cols-2 min-[1060px]:gap-12">
          <div className={`flex flex-col ${groupGap}`}>
            <div className={`flex flex-col ${sectionIntroGap}`}>
              <EyebrowPill variant="dark" size="section">
                Student Support
              </EyebrowPill>
              <h2 className="text-[28px] font-normal leading-[38px] tracking-[-0.4px] text-white min-[768px]:text-[32px] min-[768px]:leading-[44px] min-[1060px]:text-[40px]">
                Helping students feel seen, supported and ready to grow
              </h2>
              <p className="text-base leading-[22px] text-white">
                The right support can transform how a child feels about learning. Our aim is not
                only to improve results, but to help every student feel confident, capable and
                excited to learn.
              </p>
            </div>

            <div className="-rotate-2">
              <blockquote className="bg-[var(--figma-quote-yellow)] px-8 py-[42px]">
                <p className="font-display text-[28px] leading-[1.4] tracking-[-0.01em] text-[var(--figma-ink)] min-[1060px]:text-[40px] min-[1060px]:leading-[64px] min-[1060px]:tracking-[-0.4px]">
                  &ldquo;Our daughter gained confidence, improved her grades and now actually enjoys
                  learning.&rdquo;
                </p>
                <footer className="mt-10 text-base leading-[22px] text-[var(--figma-ink)]">
                  — Parent of GCSE Student
                </footer>
              </blockquote>
            </div>
          </div>

          <div
            className={`flex w-full flex-col self-start ${sectionIntroGap} max-[1059px]:mt-14 min-[1060px]:mt-0`}
          >
            <EyebrowPill variant="dark" size="section">
              How It Works
            </EyebrowPill>
            <h2 className="text-[28px] font-normal leading-[38px] tracking-[-0.4px] text-white min-[768px]:text-[32px] min-[768px]:leading-[44px] min-[1060px]:text-[40px]">
              How support works
            </h2>

            <div className="w-full border border-white/40">
              <ul>
                {processSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className={`flex flex-col gap-4 p-6 min-[1060px]:gap-5 ${
                      index < processSteps.length - 1 ? "border-b border-white/40" : ""
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg tracking-[-0.36px] ${numberStyles[index]}`}
                      >
                        {index + 1}
                      </span>
                      <h3 className="self-center text-xl leading-[22px] tracking-[-0.2px] text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="pl-[64px] text-base leading-[22px] text-white">{step.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
