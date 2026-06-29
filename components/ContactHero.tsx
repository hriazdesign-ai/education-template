import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import EyebrowPill from "@/components/EyebrowPill";
import { ctaPrimaryLabel } from "@/lib/content";
import {
  groupGap,
  navOffset,
  sectionBottom,
  sectionIntroGap,
} from "@/lib/layout";

type ContactHeroProps = {
  image: { src: string; alt: string };
};

export default function ContactHero({ image }: ContactHeroProps) {
  return (
    <section className={`bg-[var(--figma-hero-teal)] ${navOffset} ${sectionBottom}`}>
      <Container>
        <div className={`grid items-stretch ${groupGap} min-[1060px]:grid-cols-[minmax(0,1fr)_600px]`}>
          <div className="order-2 flex flex-col justify-center max-[1059px]:pt-14 min-[1060px]:order-1 min-[1060px]:pt-0">
            <div className={`flex max-w-[640px] flex-col ${sectionIntroGap}`}>
              <EyebrowPill variant="dark" size="section">
                Contact
              </EyebrowPill>

              <h1 className="text-[32px] font-normal leading-[1.12] tracking-[-0.02em] text-white min-[768px]:text-[44px] min-[768px]:leading-[52px] min-[1060px]:text-[54px] min-[1060px]:leading-[64px] min-[1060px]:tracking-[-1.08px]">
                {ctaPrimaryLabel}
              </h1>

              <p className="text-base leading-[22px] text-white">
                Whether your child needs help building confidence, preparing for exams or improving
                subject knowledge, we&apos;d love to hear from you. Book a free learning assessment and
                we&apos;ll recommend the right support.
              </p>
            </div>

            <div className="mt-8 min-[1060px]:mt-10">
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-[64px] bg-[var(--figma-coral)] p-5 text-base font-semibold leading-[22px] text-white transition-opacity hover:opacity-90"
              >
                {ctaPrimaryLabel}
              </Link>
            </div>
          </div>

          <div className="relative order-1 h-[240px] w-full overflow-hidden min-[768px]:min-h-[360px] min-[768px]:h-auto min-[1060px]:order-2 min-[1060px]:min-h-[700px]">
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
