"use client";
import { useState } from "react";
import PricingCard from "./PricingCard";

type Tier = {
  name: "Starter" | "Premium" | "Excellence";
  users: string;
  features: string[];
  featuresMonth?: string[]; // falls du abweichende Features für 1M willst
  highlight?: boolean;
  priceYear: number;  // 12 Monate
  priceMonth: number; // 1 Monat
};

const tiers: Tier[] = [
  {
    name: "Starter",
    users: "1 Benutzer",
    priceYear: 99,
    priceMonth: 149,
    features: ["Basisfunktionen", "KI-Suchprofil", "KI-Marktwertberechnung"],
  },
  {
    name: "Premium",
    users: "3 Benutzer",
    priceYear: 129,
    priceMonth: 179,
    features: [
      "Basisfunktionen",
      "KI-Suchprofil",
      "KI-Marktwertberechnung",
      "Benachrichtigung via WhatsApp & E-Mail",
    ],
    highlight: true,
  },
  {
    name: "Excellence",
    users: "5 Benutzer + App (Privatankauf)",
    priceYear: 149,
    priceMonth: 199,
    features: [
      "Alles aus Premium",
      "App zum Fahrzeugeinkauf von Privat",
    ],
  },
];

export default function Pricing() {
  const [period, setPeriod] = useState<"year" | "month">("year");

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Unsere Pakete
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Wähle zwischen günstiger Jahresbindung oder flexibler monatlicher Laufzeit.
        </p>

        {/* Toggle 12M ↔︎ 1M */}
        <div className="flex items-center justify-center gap-0 mt-8">
          <button
            className={`px-5 py-2 text-sm font-semibold rounded-l-lg border transition ${
              period === "year"
                ? "bg-primary text-white border-primary"
                : "bg-white hover:bg-gray-100"
            }`}
            onClick={() => setPeriod("year")}
          >
            12 Monate
          </button>
          <button
            className={`px-5 py-2 text-sm font-semibold rounded-r-lg border transition ${
              period === "month"
                ? "bg-primary text-white border-primary"
                : "bg-white hover:bg-gray-100"
            }`}
            onClick={() => setPeriod("month")}
          >
            1 Monat
          </button>
        </div>

        {/* Karten */}
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {tiers.map((t) => {
            const price =
              period === "year"
                ? `€ ${t.priceYear} / Monat`
                : `€ ${t.priceMonth} / Monat`;

            const features =
              period === "year" || !t.featuresMonth ? t.features : t.featuresMonth;

            return (
              <PricingCard
                key={t.name}
                title={t.name}
                price={price}
                users={t.users}
                features={features}
                highlight={t.highlight}
                ctaHref="#demo"
                ctaLabel="Vertrag abschließen"
              />
            );
          })}
        </div>

        <p className="text-xs text-center text-gray-500 mt-6">
          zzgl. USt. Abrechnung per SEPA-Lastschrift, automatische Rechnungsstellung.
        </p>
      </div>
    </section>
  );
}
