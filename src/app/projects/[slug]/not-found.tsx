import Link from "next/link";

export default function CaseStudyNotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4 px-6">
      <h1 className="text-2xl font-bold">Project not found</h1>
      <p className="text-gray-400">This case study doesn&apos;t exist.</p>
      <Link
        href="/#work"
        className="text-brand hover:text-brand/80 transition-colors duration-150"
      >
        Back to Projects
      </Link>
    </div>
  );
}
