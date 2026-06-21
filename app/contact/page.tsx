import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/SectionHeading";
import { IconLocation, IconMail, IconPhone } from "@/components/icons";
import { cardHoverClass } from "@/lib/card-styles";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free learning assessment and discover how personalised tutoring can help your child build confidence and achieve their goals.",
};

const contactFaqs = [
  {
    question: "How quickly do you respond?",
    answer: "We aim to respond to all enquiries within one business day.",
  },
  {
    question: "Do you offer online tutoring?",
    answer:
      "Yes. We offer both online and in-person tutoring depending on location and availability.",
  },
  {
    question: "Can I arrange a free assessment?",
    answer:
      "Yes. Every family can book a free initial assessment before committing to regular sessions.",
  },
  {
    question: "What ages do you support?",
    answer: "We support students from primary school through to GCSE and A-Level.",
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        eyebrow="Contact"
        title="Book a free learning assessment"
        description="Whether your child needs help building confidence, preparing for exams or improving subject knowledge, we'd love to hear from you. Book a free assessment and we'll recommend the right support."
        primaryCta={{ label: "Book assessment", href: "#contact-form" }}
        secondaryCta={{ label: "View pricing", href: "/pricing" }}
        image={null}
        showContactCard
        padding="contact"
      />

      <section className="bg-section-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:hidden">
            <ImagePlaceholder
              src="/images/teaching-4.jpg"
              alt="Tutor supporting a student in the classroom"
              label="Learning support available"
              aspectRatio="wide"
              className="!aspect-[16/14]"
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="mb-8 hidden lg:block">
                <ImagePlaceholder
                  src="/images/teaching-4.jpg"
                  alt="Tutor supporting a student in the classroom"
                  label="Learning support available"
                  aspectRatio="wide"
                  className="!aspect-[16/14]"
                />
              </div>

              <h2 className="font-serif text-2xl font-medium text-text">
                Speak with our team
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Prefer to speak with someone? Call, email or send us a message. We aim to
                respond to all enquiries within one business day.
              </p>

              <ul className="mt-8 space-y-6">
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent-text transition-colors group-hover:bg-accent-button group-hover:text-white">
                      <IconPhone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text">Phone</p>
                      <p className="text-sm text-text-muted">{siteConfig.phone}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent-text transition-colors group-hover:bg-accent-button group-hover:text-white">
                      <IconMail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text">Email</p>
                      <p className="text-sm text-text-muted">{siteConfig.email}</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent-text">
                    <IconLocation className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-text">Location</p>
                    <p className="text-sm text-text-muted">{siteConfig.address}</p>
                    <p className="mt-1 text-xs text-text-muted">
                      Flexible appointment times available
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <form
                id="contact-form"
                className="rounded-[8px] border border-primary/10 bg-white p-6 sm:p-8"
                action="#"
                method="post"
              >
                <h3 className="font-serif text-xl font-medium text-text">
                  Send us a message
                </h3>
                <p className="mt-1 text-sm text-text-muted">
                  Tell us a little about your child and we&apos;ll recommend the most suitable
                  support.
                </p>

                <div className="mt-6">
                  <label htmlFor="parentName" className="block text-sm font-medium text-text">
                    Parent Name
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    className="mt-1.5 w-full rounded-[4px] border border-primary/15 bg-section-warm px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="Jane Smith"
                  />
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1.5 w-full rounded-[4px] border border-primary/15 bg-section-warm px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="mt-1.5 w-full rounded-[4px] border border-primary/15 bg-section-warm px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="07123 456789"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="schoolYear" className="block text-sm font-medium text-text">
                    Child&apos;s School Year
                  </label>
                  <select
                    id="schoolYear"
                    name="schoolYear"
                    className="mt-1.5 w-full rounded-[4px] border border-primary/15 bg-section-warm px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="primary">Primary School</option>
                    <option value="year-7">Year 7</option>
                    <option value="year-8">Year 8</option>
                    <option value="year-9">Year 9</option>
                    <option value="year-10">Year 10</option>
                    <option value="year-11">Year 11 (GCSE)</option>
                    <option value="year-12">Year 12 (A-Level)</option>
                    <option value="year-13">Year 13 (A-Level)</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label htmlFor="subject" className="block text-sm font-medium text-text">
                    Subject Required
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="mt-1.5 w-full rounded-[4px] border border-primary/15 bg-section-warm px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="maths">Maths</option>
                    <option value="english">English</option>
                    <option value="science">Science</option>
                    <option value="gcse">GCSE Support</option>
                    <option value="a-level">A-Level Support</option>
                    <option value="study-skills">Study Skills</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-medium text-text">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1.5 w-full resize-y rounded-[4px] border border-primary/15 bg-section-warm px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="Tell us about your child's goals, challenges or the support you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-accent-button py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-button-hover sm:w-auto sm:px-8"
                >
                  Send message
                </button>

                <p className="mt-4 text-xs text-text-muted">
                  We&apos;ll only use your information to respond to your enquiry and discuss
                  suitable learning support options.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-primary/10" />
      </div>

      <section className="bg-section-warm pt-12 pb-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions"
              description="Quick answers before you get in touch."
            />
          </div>

          <dl className="space-y-4">
            {contactFaqs.map((faq) => (
              <div
                key={faq.question}
                className={`rounded-[8px] border border-primary/10 bg-section-white p-6 ${cardHoverClass}`}
              >
                <dt className="font-serif text-lg font-medium text-text">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-text-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection
        title="Ready to unlock your child's potential?"
        description="Book a free learning assessment and discover how personalised tutoring can help build confidence, improve grades and develop lifelong learning skills."
      />
    </>
  );
}
