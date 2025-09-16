"use client";

import { useState } from "react";
import * as XLSX from "xlsx";

export default function UploadData() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (evt) => {
      const data = new Uint8Array(evt.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet);

      console.log("📂 Hochgeladene Daten:", json);
      alert("Datei erfolgreich eingelesen! (Demo: Konsole checken)");
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">📂 Historische Daten hochladen</h2>
      <p className="text-gray-600 mb-4">
        Lade deine Einkaufs-/Verkaufsdaten hoch (CSV oder Excel), damit die KI dein Profil noch
        besser versteht und Vorschläge optimiert.
      </p>
      <input
        type="file"
        accept=".csv, .xlsx"
        onChange={handleFile}
        className="mb-4"
      />
      {fileName && <p className="text-sm text-gray-500">✅ {fileName} hochgeladen</p>}
    </div>
  );
}
