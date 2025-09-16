// app/dashboard/page.tsx
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", preis: 12000 },
  { month: "Feb", preis: 13500 },
  { month: "Mär", preis: 12800 },
  { month: "Apr", preis: 14000 },
  { month: "Mai", preis: 15000 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Übersicht</h1>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500 text-sm">Aktive Fahrzeuge</p>
          <p className="text-2xl font-bold">23</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500 text-sm">Ø Verkaufspreis</p>
          <p className="text-2xl font-bold">14.200 €</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500 text-sm">Neue Händlerkontakte</p>
          <p className="text-2xl font-bold">5</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white shadow rounded-xl p-6 h-80">
        <h2 className="text-lg font-bold text-gray-700 mb-4">
          Marktpreisentwicklung
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="preis" stroke="#2563eb" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
