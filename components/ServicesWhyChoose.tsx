import Image from "next/image";
import Container from "@/components/Container";
import EyebrowPill from "@/components/EyebrowPill";
import {
  darkBlockGroup,
  darkBlockLargeMargin,
  sectionIntroGap,
} from "@/lib/layout";

const familyCards = [
  {
    title: "Personalised Plans",
    description: "Every child learns differently.",
    className: "rotate-2 bg-[var(--figma-quote-yellow)]",
  },
  {
    title: "Experienced Tutors",
    description: "Support from educators who understand confidence and progress.",
    className: "bg-[var(--figma-green)]",
  },
  {
    title: "Flexible Learning",
    description: "Online and in-person sessions around family life.",
    className: "-rotate-2 bg-[var(--figma-testimonial-peach)]",
  },
  {
    title: "Clear Communication",
    description: "Regular updates so parents always know how their child is progressing.",
    className: "bg-[var(--figma-mint-bg)]",
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
          <EyebrowPill variant="dark" className="px-[18px] py-3 text-base leading-4">
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

        <div
          className={`grid gap-4 min-[768px]:grid-cols-2 min-[1060px]:grid-cols-4 min-[1060px]:gap-5 ${darkBlockGroup}`}
        >
          {familyCards.map((card) => (
            <div key={card.title} className="flex items-stretch">
              <div
                className={`flex w-full flex-col gap-4 px-6 py-7 min-[1060px]:gap-5 min-[1060px]:px-6 min-[1060px]:py-8 ${card.className}`}
              >
                <h3 className="text-xl leading-[22px] tracking-[-0.4px] text-[var(--figma-ink)]">
                  {card.title}
                </h3>
                <p className="text-base leading-[22px] text-[var(--figma-ink)]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
