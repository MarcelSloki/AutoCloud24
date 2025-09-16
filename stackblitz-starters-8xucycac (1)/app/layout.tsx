// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AutoCloud24 Dashboard",
  description: "KI-gestütztes Dashboard für Händler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-gray-50 text-gray-900">
        {/* Menüleiste */}
        <header className="bg-blue-900 text-white shadow-md">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold">AutoCloud24</h1>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:underline">
                  Start
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/profil" className="hover:underline">
                  Profil
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:underline">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hauptinhalt */}
        <main className="max-w-7xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
