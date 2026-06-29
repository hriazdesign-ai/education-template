import Container from "@/components/Container";
import EyebrowPill from "@/components/EyebrowPill";
import {
  darkBlockLarge,
  groupTopMargin,
  sectionIntroGap,
} from "@/lib/layout";

const processSteps = [
  {
    title: "Free Learning Assessment",
    description:
      "We start with a conversation to understand your child's goals and challenges.",
    numberStyle: "bg-[var(--figma-testimonial-peach)] text-black",
  },
  {
    title: "Personalised Learning Plan",
    description: "A tailored plan based on confidence, ability and learning style.",
    numberStyle: "bg-[var(--figma-mint-bg)] text-black",
  },
  {
    title: "Ongoing Support",
    description: "Regular tutoring sessions with clear goals and progress tracking.",
    numberStyle: "bg-[var(--figma-quote-yellow)] text-black",
  },
  {
    title: "Progress & Feedback",
    description: "Updates and next steps so parents can see development over time.",
    numberStyle: "bg-[var(--figma-green)] text-black",
  },
];

export default function ServicesHowSupportWorks() {
  return (
    <section id="how-support-works" className="bg-[var(--figma-navy)]">
      <Container>
        <div
          className={`mx-auto flex max-w-[800px] flex-col items-center text-center ${sectionIntroGap} ${darkBlockLarge}`}
        >
          <EyebrowPill variant="dark" size="section">
            How It Works
          </EyebrowPill>
          <h2 className="text-[28px] font-normal leading-[38px] tracking-[-0.4px] text-white min-[768px]:text-[32px] min-[768px]:leading-[44px] min-[1060px]:text-[40px]">
            How support works
          </h2>
        </div>

        <div className={`grid w-full gap-4 min-[768px]:grid-cols-2 min-[1060px]:grid-cols-4 min-[1060px]:gap-5 ${groupTopMargin}`}>
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="flex h-full flex-col gap-4 border border-white/40 p-6 min-[1060px]:gap-5"
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg tracking-[-0.36px] ${step.numberStyle}`}
              >
                {index + 1}
              </span>
              <h3 className="text-xl leading-[22px] tracking-[-0.2px] text-white">
                {step.title}
              </h3>
              <p className="text-base leading-[22px] text-white">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
