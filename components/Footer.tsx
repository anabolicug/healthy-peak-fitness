import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💪</span>
              <span className="text-lg font-bold tracking-tight">
                Healthy Peak<span className="text-[#3b82f6]">Fitness</span>
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Your go-to source for expert fitness guidance, training programs, and health insights.
              Train smart. Eat well. Reach your peak.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-zinc-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-zinc-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/blog" className="text-sm text-zinc-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-sm text-zinc-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-zinc-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-zinc-400 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm text-zinc-300 hover:text-white transition-colors">Workouts</Link></li>
              <li><Link href="/blog" className="text-sm text-zinc-300 hover:text-white transition-colors">Nutrition</Link></li>
              <li><Link href="/blog" className="text-sm text-zinc-300 hover:text-white transition-colors">Recovery</Link></li>
              <li><Link href="/blog" className="text-sm text-zinc-300 hover:text-white transition-colors">Mindset</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Healthy Peak Fitness. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Powered by WordPress + Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}