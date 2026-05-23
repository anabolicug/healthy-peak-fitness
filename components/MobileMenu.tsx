"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-[#64748b] hover:text-[#2563eb] transition-colors"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-[#e2e8f0] shadow-lg z-40">
          <nav className="flex flex-col px-4 py-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-[#64748b] hover:text-[#2563eb] border-b border-[#f1f5f9] last:border-0 transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 mb-1 px-4 py-2.5 bg-[#2563eb] text-white text-center text-sm font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}