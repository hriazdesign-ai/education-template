/**
 * Homepage hero — used only on `/` via app/page.tsx.
 * Do not edit HeroSection.tsx for homepage hero changes; that component is for inner pages.
 */
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import EyebrowPill from "@/components/EyebrowPill";
import { stats } from "@/lib/content";
import { homeSectionY } from "@/lib/homepage-spacing";

const HOME_HERO_IMAGE = "/images/teaching-1a.jpg";

// Alternate headline options for review (do not enable without sign-off):
// "Building confidence and helping every student reach their potential."
// "Personalised tuition that helps students thrive."
// "Supporting students to grow in confidence and achieve their goals."

export default function HomeHero() {
  return (
    <section>
      <div
        data-home-hero-image
        className="relative z-10 -mb-7 h-[240px] min-[768px]:h-[300px] min-[1060px]:h-[519px] w-full shrink-0 overflow-hidden rounded-none"
      >
        <Image
          src={HOME_HERO_IMAGE}
          alt="Tutor supporting a student with schoolwork"
          fill
          priority
          unoptimized
          className="rounded-none object-cover object-[52%_35%]"
          sizes="100vw"
        />
      </div>

      <div className={`relative z-20 bg-[var(--figma-hero-teal)] ${homeSectionY}`}>
        <Container>
          <Container
            size="prose"
            pad={false}
            className="flex flex-col items-center gap-6 text-center"
          >
            <EyebrowPill variant="dark">Trusted Education Support</EyebrowPill>

            <h1 className="text-[32px] font-normal leading-[1.06] tracking-[-0.02em] text-white min-[768px]:text-[52px] min-[1060px]:text-[66px] min-[1060px]:leading-[70px] min-[1060px]:tracking-[-1.32px]">
              {/* Alternate headlines — see constants above this component */}
              Helping Students Build Confidence &amp; Achieve Their Potential
            </h1>

            <p className="text-base leading-[22px] text-white">
              Personalised tutoring and educational support for primary, secondary and college
              students. We help learners strengthen skills, improve results and enjoy learning.
            </p>

            <div className="flex w-full max-[359px]:flex-col max-[359px]:items-stretch flex-row items-center justify-center gap-2 min-[360px]:gap-3 min-[768px]:gap-7">
              <Link
                href="/contact"
                className="inline-flex flex-1 items-center justify-center rounded-[64px] bg-[var(--figma-coral)] px-3 py-3 text-xs font-semibold text-white transition-opacity hover:opacity-90 min-[360px]:flex-none min-[768px]:px-4 min-[768px]:py-4 min-[768px]:text-sm"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex flex-1 items-center justify-center rounded-[64px] bg-white px-3 py-3 text-xs font-semibold text-[var(--figma-ink)] transition-opacity hover:opacity-90 min-[360px]:flex-none min-[768px]:px-4 min-[768px]:py-4 min-[768px]:text-sm"
              >
                View Our Services
              </Link>
            </div>
          </Container>
        </Container>
      </div>

      <div className="border-y border-white/40 bg-[var(--figma-hero-teal)]">
        <ul className="mx-auto grid w-full max-w-[1440px] grid-cols-2 min-[768px]:grid-cols-4">
          {stats.map((stat, index) => (
            <li
              key={stat.label}
              className={`relative flex flex-col items-center gap-3 px-4 py-6 text-center min-[768px]:gap-4 min-[768px]:py-8 min-[1060px]:px-5 ${
                index < 2 ? "max-[767px]:border-b max-[767px]:border-white/40" : ""
              } ${index % 2 === 0 ? "max-[767px]:border-r max-[767px]:border-white/40" : ""} ${
                index !== stats.length - 1
                  ? "min-[768px]:after:absolute min-[768px]:after:right-0 min-[768px]:after:top-0 min-[768px]:after:h-full min-[768px]:after:w-px min-[768px]:after:bg-white/40 min-[768px]:after:content-['']"
                  : ""
              }`}
            >
              <p className="font-display text-[48px] leading-none tracking-[-0.04em] text-[var(--figma-coral)] min-[1060px]:text-[76px] min-[1060px]:leading-[76px] min-[1060px]:tracking-[-3.04px]">
                {stat.value}
              </p>
              <p className="text-base leading-[22px] tracking-[-0.01em] text-white min-[1060px]:text-xl">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
