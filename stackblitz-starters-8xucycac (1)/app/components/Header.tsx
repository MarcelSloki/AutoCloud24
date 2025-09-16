"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="AutoCloud24 Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-xl font-bold text-[#0084A8]">AutoCloud24</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/#funktionen" className="hover:text-[#0084A8]">
            Funktionen
          </Link>
          <Link href="/#marktwert" className="hover:text-[#0084A8]">
            Marktwert
          </Link>
          <Link href="/#preise" className="hover:text-[#0084A8]">
            Preise
          </Link>
          <Link href="/#app" className="hover:text-[#0084A8]">
            App
          </Link>
          <Link href="/faq" className="hover:text-[#0084A8]">
            FAQ
          </Link>
          <Link href="/dashboard" className="hover:text-[#0084A8]">
            Dashboard
          </Link>
          <Link href="/contact" className="hover:text-[#0084A8]">
            Kontakt
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/demo"
            className="px-4 py-2 rounded-md bg-[#0084A8] text-white text-sm font-semibold hover:bg-[#006d8a]"
          >
            Demo buchen
          </Link>
        </div>
      </div>
    </header>
  );
}
