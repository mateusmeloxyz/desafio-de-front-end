import React from "react";
import CurrentWeather from "./ui/current-weather";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="flex flex-col items-center justify-center">
        <CurrentWeather />
      </main>
    </div>
  );
}
