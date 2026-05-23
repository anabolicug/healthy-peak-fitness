import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl mb-6">🔍</div>
      <h1 className="text-5xl font-black text-[#0f172a] mb-4">404</h1>
      <h2 className="text-xl font-bold text-[#64748b] mb-2">Page Not Found</h2>
      <p className="text-[#94a3b8] mb-8 max-w-md">
        Looks like this page doesn't exist. It may have been moved or deleted.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-[#2563eb] text-white font-bold rounded-lg hover:bg-[#1d4ed8] transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 border border-[#e2e8f0] text-[#64748b] font-semibold rounded-lg hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
        >
          Read the Blog
        </Link>
      </div>
    </div>
  );
}