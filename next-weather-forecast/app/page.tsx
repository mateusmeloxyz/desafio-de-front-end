import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const cities = [
    "Madrid",
    "Fairbanks",
    "London",
    "Recife",
    "Vancouver",
    "Yakutsk",
  ];

  return (
    <div className="min-h-screen p-8">
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-5xl/[120%] mb-1 font-light">Weather</h1>
        <h2 className="text-xl mb-8">Select a City</h2>
        <Image
          src="/icons/la_globe-americas.svg"
          width={176}
          height={176}
          alt="Globe icon showing americas"
          className="transition-colors dark:invert-[1%] invert-[99%] mb-8"
        />
        <div className="grid grid-cols-3 space-x-2">
          {cities.map((city) => (
            <Link
              key={city}
              href={`/weather/${encodeURIComponent(city)}`}
              className="py-2 px-4 text-xl font-normal rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-center"
            >
              {city}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
