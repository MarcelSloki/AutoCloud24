// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "AutoCloud24",
  description: "Deine Plattform für professionelle Fahrzeugbewertungen & Händler-Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-gray-50 text-gray-900">
        {/* HEADER */}
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">AutoCloud24</h1>
            <nav className="space-x-6">
              <Link href="/" className="hover:text-blue-600 font-medium">
                Startseite
              </Link>
              <Link href="/dashboard" className="hover:text-blue-600 font-medium">
                Dashboard
              </Link>
              <Link href="/login" className="hover:text-blue-600 font-medium">
                Login
              </Link>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-100 border-t mt-10">
          <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-600 flex justify-between">
            <p>© {new Date().getFullYear()} AutoCloud24</p>
            <p>Impressum · Datenschutz</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
