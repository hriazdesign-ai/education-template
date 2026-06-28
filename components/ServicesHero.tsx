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
  "GCSE & A-Level preparation",
  "Online and in-person support",
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

type ServicesHeroProps = {
  image: { src: string; alt: string };
};

export default function ServicesHero({ image }: ServicesHeroProps) {
  return (
    <section className={`bg-[var(--figma-hero-teal)] ${navOffset} ${sectionBottom}`}>
      <Container className={heroBreathing}>
        <div className={`grid items-stretch ${groupGap} min-[1060px]:grid-cols-[minmax(0,1fr)_600px]`}>
          <div className={`flex flex-col justify-center ${groupGap}`}>
            <div className={`flex max-w-[640px] flex-col ${sectionIntroGap}`}>
              <EyebrowPill variant="dark" className="px-[18px] py-3 text-base leading-4">
                Our Services
              </EyebrowPill>

              <h1 className="text-[32px] font-normal leading-[1.12] tracking-[-0.02em] text-white min-[768px]:text-[44px] min-[768px]:leading-[52px] min-[1060px]:text-[54px] min-[1060px]:leading-[64px] min-[1060px]:tracking-[-1.08px]">
                Support that grows with your child, from primary school to A-Levels
              </h1>

              <p className="text-base leading-[22px] text-white">
                From primary foundations to GCSE and A-Level preparation, we provide personalised
                support that helps students build confidence, improve skills and achieve better
                results.
              </p>
            </div>

            <ul className="flex flex-col gap-2 min-[768px]:flex-row min-[768px]:flex-wrap min-[768px]:gap-x-[21px] min-[768px]:gap-y-[21px]">
              {heroBenefits.map((item) => (
                <HeroCheckItem key={item} label={item} />
              ))}
            </ul>

            <div className="flex w-full max-[359px]:flex-col max-[359px]:items-stretch flex-row flex-wrap items-center gap-2 min-[360px]:gap-7">
              <Link
                href="/contact"
                className="inline-flex flex-1 items-center justify-center rounded-[64px] bg-[var(--figma-coral)] p-5 text-base font-semibold leading-[22px] text-white transition-opacity hover:opacity-90 min-[360px]:flex-none"
              >
                Book a free assessment
              </Link>
              <Link
                href="#how-support-works"
                className="inline-flex flex-1 items-center justify-center rounded-[64px] border border-white p-5 text-base font-semibold leading-[22px] text-white transition-opacity hover:opacity-90 min-[360px]:flex-none"
              >
                How It Works
              </Link>
            </div>
          </div>

          <div className="relative h-[240px] w-full overflow-hidden min-[768px]:min-h-[360px] min-[768px]:h-auto min-[1060px]:min-h-[700px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              unoptimized
              className="object-cover object-[center_35%] min-[1060px]:object-[50%_25%]"
              sizes="(min-width: 1060px) 600px, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
