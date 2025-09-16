"use client";
import { useState } from "react";

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center z-50 text-sm">
      <p>
        Wir verwenden Cookies, um unsere Website zu optimieren. Mehr Infos in unserer{" "}
        <a href="/datenschutz" className="underline">Datenschutzerklärung</a>.
      </p>
      <button
        onClick={() => setAccepted(true)}
        className="mt-3 md:mt-0 bg-primary text-white px-4 py-2 rounded hover:bg-primaryDark"
      >
        Akzeptieren
      </button>
    </div>
  );
}
