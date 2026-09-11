import type { Metadata } from "next";
import { SITE_TITLE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_TITLE}`,
  description: "Privacy policy for alexariza.dev.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-16">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-gray-400 text-sm">Last updated: September 2026</p>
        <div className="space-y-4 text-gray-300 leading-7 [&_h2]:text-lg [&_h2]:text-white [&_h2]:pt-4">
          <p>
            This site is a personal portfolio operated by Alex Ariza (“I”, “me”). This policy explains
            what data this site collects and how it is used.
          </p>
          <h2>What this site collects</h2>
          <p>
            <strong>Analytics:</strong> this site uses privacy-friendly analytics to understand aggregate
            traffic (pages visited, approximate location, device type). No advertising cookies are set and
            no personal profiles are built.
          </p>
          <p>
            <strong>Email inquiries:</strong> when you contact me by email, I receive your email address
            and the message you send. That information is used only to reply and manage the conversation.
          </p>
          <h2>What this site does NOT collect</h2>
          <p>
            This site does not require an account, does not run advertising, does not sell data, and does
            not use tracking cookies.
          </p>
          <h2>Data retention</h2>
          <p>Analytics data is retained by the analytics provider under their retention policy. Email
            correspondence is retained for as long as needed to manage the conversation.</p>
          <h2>Your rights</h2>
          <p>
            If you are in the EU/EEA, UK, or any region with data protection laws, you may request access
            to, correction of, or deletion of your personal data. Contact me at the email below.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this policy: <a className="text-blue-400 hover:underline" href="mailto:arizah2020@gmail.com">arizah2020@gmail.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}
