import { ReactNode } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-6">
        <h2 className="text-xl font-bold mb-6">AutoCloud24</h2>
        <nav className="flex flex-col space-y-3">
          <Link href="/dashboard" className="hover:text-blue-400">
            Übersicht
          </Link>
          <Link href="/dashboard/vehicles" className="hover:text-blue-400">
            Fahrzeuge
          </Link>
          <Link href="/dashboard/logs" className="hover:text-blue-400">
            Händler-Logs
          </Link>
          <Link href="/dashboard/settings" className="hover:text-blue-400">
            Einstellungen
          </Link>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">{children}</main>
    </div>
  );
}
