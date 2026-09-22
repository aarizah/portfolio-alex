import { brand, seo } from "@/content/brand";

export const SITE_URL = "https://www.alexariza.dev";

export const SITE_TITLE = seo.title;

export const SITE_DESCRIPTION = seo.description;

export const SOCIAL_LINKS = {
  github: brand.social.github,
  linkedin: brand.social.linkedin,
  email: `mailto:${brand.email}`,
} as const;
