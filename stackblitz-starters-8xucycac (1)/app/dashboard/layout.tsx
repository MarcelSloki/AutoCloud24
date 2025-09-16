// app/dashboard/layout.tsx
import "../globals.css";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-blue-600">AutoCloud24</h2>
          <p className="text-sm text-gray-500">Händler Dashboard</p>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-4">
          <Link href="/dashboard" className="block text-gray-700 hover:text-blue-600 font-medium">
            Übersicht
          </Link>
          <Link href="/dashboard/vehicles" className="block text-gray-700 hover:text-blue-600 font-medium">
            Fahrzeuge
          </Link>
          <Link href="/dashboard/logs" className="block text-gray-700 hover:text-blue-600 font-medium">
            Händler-Log
          </Link>
          <Link href="/dashboard/settings" className="block text-gray-700 hover:text-blue-600 font-medium">
            Einstellungen
          </Link>
        </nav>
        <div className="px-6 py-4 border-t text-sm text-gray-500">
          © {new Date().getFullYear()} AutoCloud24
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
