import React from "react";
import CurrentWeather from "@/app/ui/current-weather";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export default async function CityWeatherPage({ params }: PageProps) {
  // Decode the city parameter (replace %20 with spaces, etc.)
  const data = await params; // first await for params to be able to use them
  const city = decodeURIComponent(data.city);

  // If city is empty, redirect to 404
  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <main className="flex flex-col items-center justify-center">
        <Link
          href="/"
          className="mb-4 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          ← Back to City Selection
        </Link>
        <CurrentWeather city={city} />
      </main>
    </div>
  );
}
