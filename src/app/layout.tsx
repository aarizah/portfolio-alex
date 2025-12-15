import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/fix/theme-provider"
import Script from "next/script";




export const metadata: Metadata = {
  title: "Alex Ariza | Full-Stack + AI",
  description: "Full-Stack Developer focused on LLM/RAG integrations: Next.js + Node/FastAPI + AWS with latency, cost, and accuracy metrics from day one.",
};

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
*/
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* Load VANTA scripts with afterInteractive for better timing */}
          <Script 
            src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" 
            strategy="afterInteractive" 
          />
          <Script 
            src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js" 
            strategy="afterInteractive" 
          />
        </head>
        
        <body className="overflow-x-hidden">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
