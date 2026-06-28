import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import EyebrowPill from "@/components/EyebrowPill";
import {
  groupGap,
  heroBreathing,
  navOffset,
  sectionBottom,
  sectionIntroGap,
} from "@/lib/layout";

const heroBenefits = [
  "Personalised learning plans",
  "Clear parent communication",
  "Flexible online and in-person support",
];

function HeroCheckItem({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-4">
      <span
        aria-hidden="true"
        className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#29626b] text-sm leading-[26.5px] tracking-[-0.28px] text-white"
      >
        ✓
      </span>
      <span className="text-sm leading-4 tracking-[-0.14px] text-white">{label}</span>
    </li>
  );
}

type StudentSupportHeroProps = {
  image: { src: string; alt: string };
};

export default function StudentSupportHero({ image }: StudentSupportHeroProps) {
  return (
    <section className={`bg-[var(--figma-hero-teal)] ${navOffset} ${sectionBottom}`}>
      <div className="relative h-[200px] w-full shrink-0 overflow-hidden min-[768px]:h-[280px] min-[1060px]:h-[350px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          unoptimized
          className="object-cover object-[52%_35%]"
          sizes="100vw"
        />
      </div>

      <Container
        size="prose"
        className={`flex flex-col items-center text-center ${heroBreathing} ${groupGap}`}
      >
        <div className={`flex flex-col items-center ${sectionIntroGap}`}>
          <EyebrowPill variant="dark" className="px-[18px] py-3 text-sm leading-4">
            Trusted Education Support
          </EyebrowPill>

          <h1 className="text-[32px] font-normal leading-[1.06] tracking-[-0.02em] text-white min-[768px]:text-[52px] min-[1060px]:text-[66px] min-[1060px]:leading-[70px] min-[1060px]:tracking-[-1.32px]">
            Support tailored to every learner
          </h1>

          <p className="text-base leading-[22px] text-white">
            Every student learns differently. We take time to understand their strengths,
            challenges and goals before creating support that feels personal, practical and
            confidence-building.
          </p>
        </div>

        <ul className="flex w-full flex-col items-center gap-2 min-[768px]:max-w-none min-[768px]:flex-row min-[768px]:flex-wrap min-[768px]:justify-center min-[768px]:gap-x-[21px] min-[768px]:gap-y-3">
          {heroBenefits.map((item) => (
            <HeroCheckItem key={item} label={item} />
          ))}
        </ul>

        <div className="flex w-full max-[359px]:flex-col max-[359px]:items-stretch flex-row items-center justify-center gap-2 min-[360px]:gap-7">
          <Link
            href="/contact"
            className="inline-flex flex-1 items-center justify-center rounded-[64px] bg-[var(--figma-coral)] p-5 text-sm font-semibold leading-4 text-white transition-opacity hover:opacity-90 min-[360px]:flex-none"
          >
            Book a Free Consultation
          </Link>
          <Link
            href="/services"
            className="inline-flex flex-1 items-center justify-center rounded-[64px] bg-white p-5 text-sm font-semibold leading-4 text-[var(--figma-ink)] transition-opacity hover:opacity-90 min-[360px]:flex-none"
          >
            View Our Services
          </Link>
        </div>
      </Container>
    </section>
  );
}
