"use client";

import { useState } from "react";

export type SearchProfileData = {
  brands: string[];
  marginType: "absolute" | "percent";
  minMargin: number;
  maxStandzeit: number;
  region: string;
};

export default function SearchProfile({ onUpdate }: { onUpdate: (data: SearchProfileData) => void }) {
  const [brands, setBrands] = useState<string[]>([]);
  const [marginType, setMarginType] = useState<"absolute" | "percent">("absolute");
  const [minMargin, setMinMargin] = useState<number>(1000);
  const [maxStandzeit, setMaxStandzeit] = useState<number>(90);
  const [region, setRegion] = useState<string>("");

  const allBrands = ["BMW", "Audi", "Mercedes", "VW", "Ford"];

  const toggleBrand = (brand: string) => {
    setBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const applyProfile = () => {
    onUpdate({ brands, marginType, minMargin, maxStandzeit, region });
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Suchprofil einstellen</h2>

      {/* Markenwahl */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Bevorzugte Marken</label>
        <div className="flex flex-wrap gap-2">
          {allBrands.map((brand) => (
            <button
              key={brand}
              type="button"
              className={`px-3 py-1 rounded border ${
                brands.includes(brand)
                  ? "bg-[#0084A8] text-white border-[#0084A8]"
                  : "bg-gray-100 border-gray-300"
              }`}
              onClick={() => toggleBrand(brand)}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Marge */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Minimale Marge</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            className="border rounded px-2 py-1 w-28"
            value={minMargin}
            onChange={(e) => setMinMargin(Number(e.target.value))}
          />
          <select
            value={marginType}
            onChange={(e) => setMarginType(e.target.value as "absolute" | "percent")}
            className="border rounded px-2 py-1"
          >
            <option value="absolute">€ pro Fahrzeug</option>
            <option value="percent">% vom Marktwert</option>
          </select>
        </div>
      </div>

      {/* Standzeit */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Maximale Standzeit (in Tagen)</label>
        <input
          type="number"
          className="border rounded px-2 py-1 w-28"
          value={maxStandzeit}
          onChange={(e) => setMaxStandzeit(Number(e.target.value))}
        />
      </div>

      {/* Region */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Region</label>
        <input
          type="text"
          placeholder="z. B. NRW, Hamburg..."
          className="border rounded px-2 py-1 w-60"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
      </div>

      {/* Button */}
      <button
        onClick={applyProfile}
        className="bg-[#0084A8] text-white px-4 py-2 rounded hover:opacity-90"
      >
        Profil anwenden
      </button>
    </div>
  );
}
