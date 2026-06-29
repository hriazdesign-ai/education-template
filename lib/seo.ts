import type { Metadata } from "next";
import { siteConfig } from "./content";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://brightpathlearning.co.uk";

export const defaultDescription =
  "Personalised tutoring and educational support for primary, secondary and college students. Book a free learning assessment today.";

export function createPageMetadata({
  title,
  description = defaultDescription,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const canonical = path ? `${siteUrl}${path}` : siteUrl;
  const socialTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
