"use client";
import React, { useState } from "react";

type Result = { buy: number; sell: number };
const fmt = (n: number) => n.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

export default function MarketValueForm() {
  const [res, setRes] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const year = Number(fd.get("year") || "2018");
    const km = Number(fd.get("km") || "80000");
    const margin = Number(fd.get("margin") || "8");

    // DUMMY-Berechnung
    const base = 30000 - Math.floor(km / 10000) * 200 - Math.max(0, 2020 - year) * 500;
    const buy = Math.max(3000, Math.round(base * (1 - margin / 100)));
    const sell = Math.max(buy + 1000, Math.round(buy * 1.12));

    setTimeout(() => {
      setRes({ buy, sell });
      setLoading(false);
    }, 300);
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
        <input name="brand" placeholder="Marke" className="px-4 py-3 border rounded" />
        <input name="model" placeholder="Modell" className="px-4 py-3 border rounded" />
        <input name="year" placeholder="Baujahr (z. B. 2019)" className="px-4 py-3 border rounded" />
        <input name="km" placeholder="Kilometerstand (z. B. 85000)" className="px-4 py-3 border rounded" />
        <input name="region" placeholder="Region/PLZ (z. B. 40210)" className="px-4 py-3 border rounded" />
        <input name="margin" placeholder="Ziel-Marge % (z. B. 8)" className="px-4 py-3 border rounded" />
        <div className="md:col-span-2">
          <button disabled={loading} className="w-full md:w-auto px-6 py-3 rounded bg-primary text-white hover:bg-primaryDark">
            {loading ? "Berechne..." : "Marktwert berechnen"}
          </button>
        </div>
      </form>

      {res && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded bg-gray-50">
            <div className="text-sm text-gray-500">Empfohlener Einkaufspreis</div>
            <div className="text-2xl font-bold">{fmt(res.buy)}</div>
          </div>
          <div className="p-4 rounded bg-gray-50">
            <div className="text-sm text-gray-500">Prognostizierter Verkaufspreis</div>
            <div className="text-2xl font-bold">{fmt(res.sell)}</div>
          </div>

          <div className="md:col-span-2">
            <div className="text-sm text-gray-600 mb-2">Direkt zu den Plattformen:</div>
            <div className="flex flex-wrap gap-2">
              <a target="_blank" href="https://www.auto1.com" className="px-4 py-2 rounded border hover:bg-gray-50">AUTO1</a>
              <a target="_blank" href="https://www.caronsale.com" className="px-4 py-2 rounded border hover:bg-gray-50">CarOnSale</a>
              <a target="_blank" href="https://www.autoproff.com" className="px-4 py-2 rounded border hover:bg-gray-50">AutoProff</a>
              <a target="_blank" href="https://www.autoscout24.de" className="px-4 py-2 rounded border hover:bg-gray-50">AutoScout24</a>
              <a target="_blank" href="https://www.mobile.de" className="px-4 py-2 rounded border hover:bg-gray-50">mobile.de</a>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              * Später erfolgt hier die direkte Übergabe via Schnittstellen (API) mit deinen Filterkriterien.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
