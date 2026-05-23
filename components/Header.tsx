"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">💪</span>
            <span className="text-lg font-bold text-[#0f172a] tracking-tight">
              Healthy Peak<span className="text-[#2563eb]">Fitness</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-[#64748b] hover:text-[#2563eb] transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-sm font-medium text-[#64748b] hover:text-[#2563eb] transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium text-[#64748b] hover:text-[#2563eb] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-[#64748b] hover:text-[#2563eb] transition-colors">
              Contact
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-[#2563eb] text-white text-sm font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors"
            >
              Get Started
            </Link>
          </nav>
          <button className="md:hidden p-2 text-[#64748b]" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}