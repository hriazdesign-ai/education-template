import Image from "next/image";
import Container from "@/components/Container";
import { IconLocation, IconMail, IconPhone } from "@/components/icons";
import { siteConfig } from "@/lib/content";
import { groupGap, sectionTop, sectionBottom } from "@/lib/layout";

const contactItems = [
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    Icon: IconPhone,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    Icon: IconMail,
  },
  {
    label: "Address",
    value: siteConfig.address,
    Icon: IconLocation,
  },
];

const inputClasses =
  "w-full rounded-lg border border-[#c4c4c4] bg-[var(--figma-mint-bg)] px-5 py-4 text-base leading-[22px] text-[var(--figma-ink)] outline-none transition-colors focus:border-[var(--figma-hero-teal)] focus:ring-2 focus:ring-[var(--figma-hero-teal)]/20";

export default function ContactDetailsSection() {
  return (
    <section className={`bg-white ${sectionTop} ${sectionBottom}`}>
      <Container>
        <div className={`grid items-stretch ${groupGap} min-[1060px]:grid-cols-2`}>
          <div className="flex flex-col overflow-hidden bg-white">
            <div className="relative h-[240px] w-full shrink-0 overflow-hidden min-[768px]:h-[320px] min-[1060px]:h-[400px]">
              <Image
                src="/images/map.jpg"
                alt="Tutor celebrating progress with a student"
                fill
                unoptimized
                className="object-cover object-[center_35%]"
                sizes="(min-width: 1060px) 50vw, 100vw"
              />
            </div>

            <div className="flex flex-col gap-8 pt-6 min-[1060px]:gap-10 min-[1060px]:pt-10">
              <div className="flex flex-col gap-3">
                <h2 className="text-xl leading-[22px] tracking-[-0.48px] text-[var(--figma-ink)] min-[768px]:text-2xl">
                  Speak with our team
                </h2>
                <p className="text-sm leading-[18px] text-[var(--figma-ink)] min-[768px]:text-base min-[768px]:leading-[22px]">
                  Prefer to speak with someone? Call, email or send us a message. We aim to respond
                  to all enquiries within one business day.
                </p>
              </div>

              <ul className="flex flex-col gap-6">
                {contactItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[var(--figma-mint-bg)] text-[var(--figma-ink)]"
                    >
                      <item.Icon className="h-5 w-5" />
                    </span>
                    <div className="flex flex-col gap-2 pt-1">
                      <p className="text-sm font-semibold leading-[22px] text-[var(--figma-ink)]">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm leading-[22px] text-[var(--figma-ink)] transition-opacity hover:opacity-80"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm leading-[22px] text-[var(--figma-ink)]">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex h-full flex-col rounded-xl border border-[#c4c4c4] bg-white p-6 min-[1060px]:p-10">
            <form id="contact-form" className="flex h-full flex-col" action="#" method="post">
              <div className="flex flex-col gap-3">
                <h2 className="text-xl leading-[22px] tracking-[-0.48px] text-[var(--figma-ink)] min-[768px]:text-2xl">
                  Send a Message
                </h2>
                <p className="text-sm leading-6 text-[var(--figma-ink)] min-[768px]:text-base min-[768px]:leading-[22px]">
                  Complete the form below and we will get back to you as soon as we can.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-6 min-[1060px]:mt-10 min-[1060px]:gap-8">
                <div className="flex flex-col gap-4">
                  <label htmlFor="fullName" className="text-base font-semibold leading-[22px] text-[var(--figma-ink)]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className={inputClasses}
                    placeholder="Your full name"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label htmlFor="email" className="text-base font-semibold leading-[22px] text-[var(--figma-ink)]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={inputClasses}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label htmlFor="phone" className="text-base font-semibold leading-[22px] text-[var(--figma-ink)]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={inputClasses}
                    placeholder="Your phone number"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label htmlFor="message" className="text-base font-semibold leading-[22px] text-[var(--figma-ink)]">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={`${inputClasses} min-h-[140px] resize-y`}
                    placeholder="Tell us how we can help"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <button
                    type="submit"
                    className="inline-flex w-fit items-center justify-center rounded-[64px] bg-[var(--figma-ink)] px-5 py-3 text-base font-semibold leading-[22px] text-white transition-opacity hover:opacity-90"
                  >
                    Send Message
                  </button>
                  <p className="text-sm leading-[18px] text-[var(--figma-ink)]">
                    We&apos;ll only use your information to respond to your enquiry and discuss
                    suitable learning support options.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
