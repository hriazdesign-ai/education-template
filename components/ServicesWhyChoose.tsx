import Image from "next/image";
import Container from "@/components/Container";
import EyebrowPill from "@/components/EyebrowPill";
import StickyNoteCard from "@/components/StickyNoteCard";
import {
  darkBlockGroup,
  darkBlockLargeMargin,
  sectionIntroGap,
  stickyNoteGrid,
  stickyNotePadding,
} from "@/lib/layout";

const familyCards = [
  {
    title: "Personalised Plans",
    description: "Every child learns differently.",
  },
  {
    title: "Experienced Tutors",
    description: "Support from educators who understand confidence and progress.",
  },
  {
    title: "Flexible Learning",
    description: "Online and in-person sessions around family life.",
  },
  {
    title: "Clear Communication",
    description: "Regular updates so parents always know how their child is progressing.",
  },
];

type ServicesWhyChooseProps = {
  image: { src: string; alt: string };
};

export default function ServicesWhyChoose({ image }: ServicesWhyChooseProps) {
  return (
    <section className="bg-[var(--figma-navy)]">
      <Container>
        <div className="relative h-[200px] w-full overflow-hidden min-[768px]:h-[260px] min-[1060px]:h-[300px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            unoptimized
            className="object-cover object-[40%_35%]"
            sizes="(min-width: 1280px) 1280px, 100vw"
          />
        </div>

        <Container
          size="prose"
          pad={false}
          className={`mx-auto flex flex-col items-center text-center ${sectionIntroGap} ${darkBlockLargeMargin}`}
        >
          <EyebrowPill variant="dark" size="section">
            Why Families Choose Us
          </EyebrowPill>
          <h2 className="text-[28px] font-normal leading-[38px] tracking-[-0.4px] text-white min-[768px]:text-[32px] min-[768px]:leading-[44px] min-[1060px]:text-[40px]">
            Why families choose Bright Path
          </h2>
          <p className="text-base leading-[22px] text-white">
            Our approach is designed to make tutoring clear, flexible and supportive for both
            students and parents.
          </p>
        </Container>

        <div className={`${stickyNoteGrid} ${darkBlockGroup}`}>
          {familyCards.map((card, index) => (
            <StickyNoteCard
              key={card.title}
              index={index as 0 | 1 | 2 | 3}
              title={card.title}
              description={card.description}
              paddingClassName={stickyNotePadding}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
