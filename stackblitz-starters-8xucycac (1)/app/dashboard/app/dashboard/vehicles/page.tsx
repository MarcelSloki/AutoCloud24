// app/dashboard/vehicles/page.tsx
"use client";

const vehicles = [
  { id: 1, model: "BMW 320d", baujahr: 2018, preis: "15.000 €" },
  { id: 2, model: "Audi A4", baujahr: 2019, preis: "18.500 €" },
  { id: 3, model: "VW Golf", baujahr: 2020, preis: "12.300 €" },
];

export default function VehiclesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Fahrzeuge</h1>
      <table className="w-full bg-white shadow rounded-xl overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-6 py-3">Modell</th>
            <th className="px-6 py-3">Baujahr</th>
            <th className="px-6 py-3">Preis</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v) => (
            <tr key={v.id} className="border-t hover:bg-gray-50">
              <td className="px-6 py-4">{v.model}</td>
              <td className="px-6 py-4">{v.baujahr}</td>
              <td className="px-6 py-4">{v.preis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

