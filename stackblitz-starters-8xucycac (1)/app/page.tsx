import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Willkommen bei <span className="text-blue-600">AutoCloud24</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Deine professionelle Lösung für Fahrzeugverwaltung, Händler-Logs und
        Exportfunktionen.
      </p>
      <div className="space-x-4">
        <Link
          href="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Jetzt anmelden
        </Link>
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          Zum Dashboard
        </Link>
      </div>
    </div>
  );
}

