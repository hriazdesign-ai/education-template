import Container from "@/components/Container";
import EyebrowPill from "@/components/EyebrowPill";
import StickyNoteCard from "@/components/StickyNoteCard";
import { contactFaqs } from "@/lib/content";
import { contentToCards, sectionBottom, sectionIntroGap, sectionTop } from "@/lib/layout";

export default function ContactFaqSection() {
  return (
    <section className={`bg-[var(--figma-navy)] ${sectionTop} ${sectionBottom}`}>
      <Container>
        <Container
          size="prose"
          pad={false}
          className={`mx-auto flex flex-col items-center text-center ${sectionIntroGap}`}
        >
          <EyebrowPill variant="dark" className="px-[18px] py-3 text-base leading-4">
            FAQ
          </EyebrowPill>
          <h2 className="text-[28px] font-normal leading-[38px] tracking-[-0.4px] text-white min-[768px]:text-[32px] min-[768px]:leading-[44px] min-[1060px]:text-[40px]">
            Before you get in touch
          </h2>
          <p className="text-base leading-[22px] text-white">
            Quick answers to questions families often ask.
          </p>
        </Container>

        <div
          className={`grid gap-4 overflow-visible min-[768px]:grid-cols-2 min-[1060px]:grid-cols-4 min-[1060px]:gap-4 ${contentToCards}`}
        >
          {contactFaqs.map((faq, index) => (
            <StickyNoteCard
              key={faq.question}
              index={index as 0 | 1 | 2 | 3}
              title={faq.question}
              description={faq.answer}
              paddingClassName="px-6 py-8 min-[1060px]:px-6 min-[1060px]:py-10"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
