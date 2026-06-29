import Link from "next/link";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { IconLocation, IconMail, IconPhone } from "@/components/icons";
import { footerBadges, primaryNavLinks, siteConfig } from "@/lib/content";
import { sectionY } from "@/lib/layout";

const footerListClass = "flex flex-col gap-3";
const footerItemClass =
  "text-xs leading-[18px] text-[var(--figma-ink)] min-[1060px]:text-sm min-[1060px]:leading-[22px]";
const footerLinkClass = "block transition-opacity hover:opacity-70";

const serviceLinks = [
  "1-to-1 Tutoring",
  "GCSE Preparation",
  "A-Level Support",
  "Homework Help",
  "Online Learning",
];

function ContactColumn() {
  return (
    <div className="flex min-w-0 flex-col gap-3">
      <h3 className="text-xs font-medium leading-4 text-[var(--figma-ink)] min-[1060px]:text-sm min-[1060px]:leading-5">
        CONTACT
      </h3>
      <ul className={footerListClass}>
        <li className={footerItemClass}>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className={`${footerLinkClass} flex items-start gap-1.5 min-[768px]:gap-2`}
          >
            <IconPhone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--figma-hero-teal)] min-[1060px]:h-[19px] min-[1060px]:w-[19px]" />
            <span>{siteConfig.phone}</span>
          </a>
        </li>
        <li className={footerItemClass}>
          <a
            href={`mailto:${siteConfig.email}`}
            className={`${footerLinkClass} flex items-start gap-1.5 break-all min-[768px]:gap-2`}
          >
            <IconMail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--figma-hero-teal)] min-[1060px]:h-[19px] min-[1060px]:w-[19px]" />
            <span>{siteConfig.email}</span>
          </a>
        </li>
        <li className={`${footerItemClass} flex items-start gap-1.5 min-[768px]:gap-2`}>
          <IconLocation className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--figma-hero-teal)] min-[1060px]:h-[19px] min-[1060px]:w-[19px]" />
          <span>{siteConfig.address}</span>
        </li>
      </ul>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-[var(--figma-mint-bg)] ${sectionY}`}>
      <Container>
        <div className="grid grid-cols-1 items-start gap-5 border-b border-[var(--figma-hero-teal)]/40 pb-6 min-[768px]:grid-cols-3 min-[768px]:gap-12 min-[768px]:pb-10">
          <div className="flex min-w-0 flex-col gap-3">
            <Logo variant="dark" />
            <p className="max-w-full text-sm leading-5 text-[var(--figma-ink)]">
            Personalised learning that builds confidence and unlocks potential.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-3 gap-3 min-[768px]:col-span-1 min-[768px]:grid-cols-2 min-[768px]:gap-8">
            <div className="flex min-w-0 flex-col gap-3">
              <h3 className="text-xs font-medium leading-4 text-[var(--figma-ink)] min-[1060px]:text-sm min-[1060px]:leading-5">
                NAVIGATION
              </h3>
              <ul className={footerListClass}>
                {primaryNavLinks.map((link) => (
                  <li key={`${link.href}-${link.label}`} className={footerItemClass}>
                    <Link href={link.href} className={footerLinkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex min-w-0 flex-col gap-3">
              <h3 className="text-xs font-medium leading-4 text-[var(--figma-ink)] min-[1060px]:text-sm min-[1060px]:leading-5">
                SERVICES
              </h3>
              <ul className={footerListClass}>
                {serviceLinks.map((item) => (
                  <li key={item} className={footerItemClass}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0 min-[768px]:hidden">
              <ContactColumn />
            </div>
          </div>

          <div className="hidden min-w-0 min-[768px]:block">
            <ContactColumn />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 py-4 min-[1060px]:gap-3 min-[1060px]:py-6">
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
