import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/fix/theme-provider";
import { StartProjectProvider } from "@/components/StartProjectModal";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";
import { seo } from "@/content/brand";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [...seo.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Alex Ariza",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <StartProjectProvider>{children}</StartProjectProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
