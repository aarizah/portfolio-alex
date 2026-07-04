import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study | Alex Ariza",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
