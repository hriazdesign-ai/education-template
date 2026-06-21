import Link from "next/link";
import { IconLocation, IconMail, IconPhone } from "@/components/icons";
import { footerBadges, navLinks, siteConfig } from "@/lib/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-light/30 bg-gradient-to-br from-primary via-primary to-primary-end text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-medium">{siteConfig.name}</span>
              <span className="mt-1 block text-xs font-medium uppercase tracking-widest text-accent-on-dark">
                {siteConfig.tagline}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/85">
            Helping students build confidence, improve results and develop a lifelong love of learning.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/75">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/75">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              <li>1-to-1 Tutoring</li>
              <li>GCSE Preparation</li>
              <li>A-Level Support</li>
              <li>Homework Help</li>
              <li>Online Learning</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/75">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2 text-sm text-white/90 transition-colors hover:text-white"
                >
                  <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-accent-on-dark" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2 text-sm text-white/90 transition-colors hover:text-white"
                >
                  <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-accent-on-dark" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/90">
                <IconLocation className="mt-0.5 h-4 w-4 shrink-0 text-accent-on-dark" />
                {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5 border-t border-white/15 pt-8">
          {footerBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-[8px] border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/70">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
