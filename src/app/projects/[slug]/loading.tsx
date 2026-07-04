export default function CaseStudyLoading() {
  return (
    <div className="min-h-screen bg-black">
      <div className="h-16 border-b border-white/5 bg-white/5 animate-pulse" />
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-6">
        <div className="h-12 w-2/3 bg-white/5 rounded-lg animate-pulse" />
        <div className="h-6 w-1/2 bg-white/5 rounded-lg animate-pulse" />
        <div className="h-64 bg-white/5 rounded-xl animate-pulse mt-8" />
      </div>
    </div>
  );
}
