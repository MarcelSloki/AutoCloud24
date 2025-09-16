"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Login bei AutoCloud24
        </h1>
        <button
          onClick={() => signIn("google")}
          className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Mit Google anmelden
        </button>
      </div>
    </div>
  );
}
