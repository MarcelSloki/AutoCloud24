"use client";

import { useState } from "react";
import { Vehicle } from "../lib/demoData";
import VehicleDetail from "./VehicleDetail";

export default function ResultsTable({ vehicles }: { vehicles: Vehicle[] }) {
  const [selected, setSelected] = useState<Vehicle | null>(null);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Gefundene Fahrzeuge</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-3 py-2 text-left">Fahrzeug</th>
            <th className="border px-3 py-2 text-left">Preis</th>
            <th className="border px-3 py-2 text-left">Marktwert</th>
            <th className="border px-3 py-2 text-left">Marge</th>
            <th className="border px-3 py-2 text-left">Standzeit</th>
            <th className="border px-3 py-2 text-left">Risiko</th>
            <th className="border px-3 py-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v) => {
            const marginAbs = v.marketValue - v.price;
            return (
              <tr key={v.id} className="hover:bg-gray-50">
                <td className="border px-3 py-2">{v.title}</td>
                <td className="border px-3 py-2">{v.price.toLocaleString()} €</td>
                <td className="border px-3 py-2">{v.marketValue.toLocaleString()} €</td>
                <td className="border px-3 py-2">{marginAbs.toLocaleString()} €</td>
                <td className="border px-3 py-2">{v.standzeitDays} Tage</td>
                <td className="border px-3 py-2">{v.riskScore}/5</td>
                <td className="border px-3 py-2">
                  <button
                    onClick={() => setSelected(v)}
                    className="text-[#0084A8] underline"
                  >
                    Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {selected && <VehicleDetail vehicle={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
