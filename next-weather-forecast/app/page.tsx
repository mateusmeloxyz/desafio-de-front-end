import React from "react";
import Link from "next/link";

export default function Home() {
  const cities = [
    "Madrid",
    "Fairbanks",
    "London",
    "Recife",
    "Vancouver",
    "Yakutsk"
  ];

  return (
    <div className="min-h-screen p-8">
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Weather Forecast</h1>
        <h2 className="text-xl mb-6">Select a City</h2>
        <div className="flex flex-col space-y-2">
          {cities.map((city) => (
            <Link 
              key={city} 
              href={`/weather/${encodeURIComponent(city)}`}
              className="py-2 px-4 bg-white dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-center"
            >
              {city}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}