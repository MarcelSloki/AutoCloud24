"use client";

import * as XLSX from "xlsx";
import { Vehicle } from "../lib/demoData";

export default function ExportButtons({ vehicles }: { vehicles: Vehicle[] }) {
  const exportCSV = () => {
    const headers = Object.keys(vehicles[0]);
    const rows = vehicles.map((v) => Object.values(v));
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "fahrzeuge.csv";
    a.click();
  };

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(vehicles);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Fahrzeuge");
    XLSX.writeFile(workbook, "fahrzeuge.xlsx");
  };

  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={exportCSV}
        className="bg-[#0084A8] text-white px-4 py-2 rounded"
      >
        CSV Exportieren
      </button>
      <button
        onClick={exportExcel}
        className="bg-[#00A86B] text-white px-4 py-2 rounded"
      >
        Excel Exportieren
      </button>
    </div>
  );
}
