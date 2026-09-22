import { ScrollStagger, StaggerChild } from "@/components/motion/ScrollReveal";
import { fadeInUpTight } from "@/lib/motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <ScrollStagger
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}
    >
      <StaggerChild variants={fadeInUpTight}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
          {eyebrow}
        </p>
      </StaggerChild>
      <StaggerChild variants={fadeInUpTight}>
        <h2 className="text-3xl text-white md:text-4xl lg:text-[2.75rem] lg:leading-tight">
          {title}
        </h2>
      </StaggerChild>
      {description ? (
        <StaggerChild variants={fadeInUpTight}>
          <p className="mt-4 text-base leading-7 text-gray-400 md:text-lg">{description}</p>
        </StaggerChild>
      ) : null}
    </ScrollStagger>
  );
}
