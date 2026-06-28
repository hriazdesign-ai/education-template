import Link from "next/link";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { IconLocation, IconMail, IconPhone } from "@/components/icons";
import { footerBadges, primaryNavLinks, siteConfig } from "@/lib/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--figma-mint-bg)] py-8 min-[1060px]:py-14">
      <Container>
        <div className="grid gap-5 border-b border-[var(--figma-hero-teal)]/40 pb-6 min-[1060px]:grid-cols-4 min-[1060px]:gap-[21px] min-[1060px]:pb-[42px]">
          <div className="flex flex-col gap-3 min-[1060px]:gap-[21px]">
            <Logo variant="dark" />
            <p className="max-w-xs text-sm leading-5 text-[var(--figma-ink)]">
              Helping students build confidence, improve results and develop a lifelong love of
              learning.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-x-3 gap-y-4 min-[1060px]:contents">
            <div className="flex flex-col gap-2 min-[1060px]:gap-[21px]">
              <h3 className="text-xs font-medium leading-4 text-[var(--figma-ink)] min-[1060px]:text-sm min-[1060px]:leading-5">
                NAVIGATION
              </h3>
              <ul className="flex flex-col gap-1 min-[1060px]:gap-2">
                {primaryNavLinks.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-xs leading-4 text-[var(--figma-ink)] transition-opacity hover:opacity-70 min-[1060px]:text-sm min-[1060px]:leading-5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2 min-[1060px]:gap-[21px]">
              <h3 className="text-xs font-medium leading-4 text-[var(--figma-ink)] min-[1060px]:text-sm min-[1060px]:leading-5">
                SERVICES
              </h3>
              <ul className="flex flex-col gap-1 text-xs leading-4 text-[var(--figma-ink)] min-[1060px]:gap-2 min-[1060px]:text-sm min-[1060px]:leading-5">
                <li>1-to-1 Tutoring</li>
                <li>GCSE Preparation</li>
                <li>A-Level Support</li>
                <li>Homework Help</li>
                <li>Online Learning</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 min-[1060px]:gap-[21px]">
              <h3 className="text-xs font-medium leading-4 text-[var(--figma-ink)] min-[1060px]:text-base min-[1060px]:leading-[22px]">
                CONTACT
              </h3>
              <ul className="flex flex-col gap-1 min-[1060px]:gap-2">
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-1.5 text-xs leading-4 text-[var(--figma-ink)] transition-opacity hover:opacity-70 min-[1060px]:gap-2 min-[1060px]:text-sm min-[1060px]:leading-5"
                  >
                    <IconPhone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--figma-hero-teal)] min-[1060px]:h-[19px] min-[1060px]:w-[19px]" />
                    <span>{siteConfig.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-1.5 break-all text-xs leading-4 text-[var(--figma-ink)] transition-opacity hover:opacity-70 min-[1060px]:gap-2 min-[1060px]:text-sm min-[1060px]:leading-5"
                  >
                    <IconMail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--figma-hero-teal)] min-[1060px]:h-[19px] min-[1060px]:w-[19px]" />
                    <span>{siteConfig.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-1.5 text-xs leading-4 text-[var(--figma-ink)] min-[1060px]:gap-2 min-[1060px]:text-sm min-[1060px]:leading-5">
                  <IconLocation className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--figma-hero-teal)] min-[1060px]:h-[19px] min-[1060px]:w-[19px]" />
                  <span>{siteConfig.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 py-4 min-[1060px]:gap-3 min-[1060px]:py-7">
          {footerBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-lg bg-[var(--figma-hero-teal)]/40 px-2 py-1.5 text-xs font-medium leading-[14px] text-white min-[1060px]:px-2.5 min-[1060px]:py-2.5 min-[1060px]:text-sm"
            >
              {badge}
            </span>
          ))}
        </div>

        <p className="text-xs leading-[22px] text-[var(--figma-ink)]">
          &copy; {currentYear} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
