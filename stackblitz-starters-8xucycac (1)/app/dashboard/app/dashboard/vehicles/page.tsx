"use client";

import { useState } from "react";

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState([
    { id: 1, name: "BMW 320d", price: 18000 },
    { id: 2, name: "Audi A4", price: 22000 },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Fahrzeuge</h1>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-left">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Preis (€)</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v) => (
            <tr key={v.id} className="border-t">
              <td className="p-3">{v.id}</td>
              <td className="p-3">{v.name}</td>
              <td className="p-3">{v.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
