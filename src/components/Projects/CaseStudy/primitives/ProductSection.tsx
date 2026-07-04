import { cn } from "@/components/ui/utils";

interface ProductSectionProps {
  id?: string;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  children?: React.ReactNode;
  variant?: "default" | "fullscreen" | "dark" | "gradient" | "spotlight";
  className?: string;
  align?: "center" | "left";
  containerClassName?: string;
}

export function ProductSection({
  id,
  eyebrow,
  headline,
  subheadline,
  children,
  variant = "default",
  className,
  align = "left",
  containerClassName,
}: ProductSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate scroll-mt-24 cs-section overflow-hidden",
        variant === "fullscreen" && "min-h-[86svh] flex flex-col justify-center py-20 md:py-24",
        variant === "dark" && "bg-[#050505] py-20 md:py-24",
        variant === "gradient" &&
          "bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.10),transparent_34%),linear-gradient(180deg,#030303,#08080c_48%,#030303)] py-20 md:py-24",
        variant === "spotlight" &&
          "bg-[radial-gradient(circle_at_36%_18%,rgba(59,130,246,0.14),transparent_32%),#050505] py-20 md:py-24",
        variant === "default" && "bg-black py-20 md:py-24",
        className
      )}
    >
      <div
        className={cn(
          "w-full max-w-[1180px] mx-auto px-5 sm:px-6 md:px-10",
          align === "center" && "text-center",
          containerClassName
        )}
      >
        {(eyebrow || headline || subheadline) && (
          <header
            className={cn(
              "mb-8 md:mb-10",
              align === "center" && "mx-auto max-w-3xl"
            )}
          >
            {eyebrow && <p className="cs-eyebrow mb-4 text-blue-300/70">{eyebrow}</p>}
            {headline && <h2 className="cs-headline text-white">{headline}</h2>}
            {subheadline && <p className="cs-subheadline mt-5 text-white/56">{subheadline}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
