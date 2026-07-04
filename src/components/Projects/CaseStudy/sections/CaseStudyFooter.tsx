import Link from "next/link";

export function CaseStudyFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-black py-14">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-4 px-5 text-center sm:px-6 md:flex-row md:px-10 md:text-left">
        <p className="text-xs text-white/35">
          ? {new Date().getFullYear()} Alex Ariza. Built as a product case study.
        </p>
        <Link
          href="/#projects"
          className="text-xs font-semibold text-white/45 transition-colors hover:text-white"
        >
          ? All projects
        </Link>
      </div>
    </footer>
  );
}
