import Container from "@/components/Container";
import EyebrowPill from "@/components/EyebrowPill";
import StickyNoteCard from "@/components/StickyNoteCard";
import { contactFaqs } from "@/lib/content";
import {
  contentToCards,
  sectionBottom,
  sectionIntroGap,
  sectionTop,
  stickyNoteGrid,
  stickyNotePadding,
} from "@/lib/layout";

export default function ContactFaqSection() {
  return (
    <section className={`bg-[var(--figma-navy)] ${sectionTop} ${sectionBottom}`}>
      <Container>
        <Container
          size="prose"
          pad={false}
          className={`mx-auto flex flex-col items-center text-center ${sectionIntroGap}`}
        >
          <EyebrowPill variant="dark" size="section">
            FAQ
          </EyebrowPill>
          <h2 className="text-[28px] font-normal leading-[38px] tracking-[-0.4px] text-white min-[768px]:text-[32px] min-[768px]:leading-[44px] min-[1060px]:text-[40px]">
            Before you get in touch
          </h2>
          <p className="text-base leading-[22px] text-white">
            Quick answers to questions families often ask.
          </p>
        </Container>

        <div className={`${stickyNoteGrid} ${contentToCards}`}>
          {contactFaqs.map((faq, index) => (
            <StickyNoteCard
              key={faq.question}
              index={index as 0 | 1 | 2 | 3}
              title={faq.question}
              description={faq.answer}
              paddingClassName={stickyNotePadding}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
