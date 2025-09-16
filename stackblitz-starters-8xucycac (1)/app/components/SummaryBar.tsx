"use client";
import { Vehicle } from "../lib/demoData";

type Props = {
  vehicles: Vehicle[];
};

export default function SummaryBar({ vehicles }: Props) {
  if (!vehicles || vehicles.length === 0) {
    return <div className="p-4 bg-gray-100 rounded">Keine Fahrzeuge gefunden.</div>;
  }

  const avgMargin =
    vehicles.reduce((sum, v) => sum + v.margin, 0) / vehicles.length;

  const avgStandzeit =
    vehicles.reduce((sum, v) => sum + v.standzeit, 0) / vehicles.length;

  const avgRisk =
    vehicles.reduce((sum, v) => sum + v.riskScore, 0) / vehicles.length;

  return (
    <div className="grid grid-cols-3 gap-4 bg-white shadow-md rounded-lg p-6 text-center mb-6">
      <div>
        <p className="text-sm text-gray-500">Ø Marge</p>
        <p className="text-lg font-bold text-green-600">
          {avgMargin.toFixed(1)} %
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Ø Standzeit</p>
        <p className="text-lg font-bold text-blue-600">
          {avgStandzeit.toFixed(0)} Tage
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Ø Risiko-Score</p>
        <p className="text-lg font-bold text-red-600">
          {avgRisk.toFixed(1)} / 5
        </p>
      </div>
    </div>
  );
}
