"use client";

import { useState } from "react";
import SearchProfile, { SearchProfileData } from "../components/SearchProfile";
import ResultsTable from "../components/ResultsTable";
import { demoVehicles, Vehicle } from "../lib/demoData";

export default function DashboardPage() {
  const [profile, setProfile] = useState<SearchProfileData | null>(null);

  const filteredVehicles: Vehicle[] = demoVehicles.filter((v) => {
    if (!profile) return true;
    if (profile.brands.length > 0 && !profile.brands.includes(v.brand)) return false;
    if (profile.marginType === "absolute" && (v.marketValue - v.price) < profile.minMargin) return false;
    if (profile.marginType === "percent" && ((v.marketValue - v.price) / v.price) * 100 < profile.minMargin) return false;
    if (v.standzeitDays > profile.maxStandzeit) return false;
    if (profile.region && v.region !== profile.region) return false;
    return true;
  });

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">AutoCloud24 Dashboard (Demo)</h1>
      <SearchProfile onUpdate={(data) => setProfile(data)} />
      <ResultsTable vehicles={filteredVehicles} />
    </main>
  );
}
