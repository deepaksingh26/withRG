"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
   { href: "/", label: "Home" },
  { href: "/why-withrg", label: "Why WithRG" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/our-impact", label: "Our Impact" },
  { href: "/our-footprint", label: "Our Footprint" },
  { href: "/stories", label: "Stories" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-wrg-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="#WithRG"
            width={48}
            height={48}
            className="w-15 h-15 object-contain"
            priority
          />
          {/* <div className="leading-tight">
            <span className="font-black text-wrg-orange text-lg tracking-tight">#with</span>
            <span className="font-black text-wrg-green text-lg tracking-tight">RG</span>
          </div> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-wrg-light text-wrg-blue font-semibold"
                  : "text-wrg-ink hover:bg-wrg-light hover:text-wrg-blue"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/join-withrg"
            className="bg-wrg-orange text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-wrg-orange-dark transition-colors"
          >
            Join the Movement
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-wrg-ink hover:bg-wrg-light transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-wrg-border px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-wrg-light text-wrg-blue font-semibold"
                  : "text-wrg-ink hover:bg-wrg-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/join-withrg"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-wrg-orange text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-wrg-orange-dark transition-colors text-center"
          >
            Join the Movement
          </Link>
        </div>
      )}
    </header>
  );
}
