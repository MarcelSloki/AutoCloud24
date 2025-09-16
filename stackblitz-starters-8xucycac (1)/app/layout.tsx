import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "AutoCloud24",
  description: "Professionelle Fahrzeugverwaltung für Händler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-gray-50 text-gray-900">
        {/* Navigation */}
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">AutoCloud24</h1>
            <nav className="space-x-6">
              <Link href="/" className="hover:text-blue-600">
                Start
              </Link>
              <Link href="/dashboard" className="hover:text-blue-600">
                Dashboard
              </Link>
              <Link href="/login" className="hover:text-blue-600">
                Login
              </Link>
            </nav>
          </div>
        </header>

        {/* Inhalt */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 text-center py-4 mt-8 text-sm text-gray-600">
          © {new Date().getFullYear()} AutoCloud24 – Alle Rechte vorbehalten.
        </footer>
      </body>
    </html>
  );
}
