import React from "react";
import Condition from "./condition";

export default async function CurrentWeather() {
  const apikey = process.env.WEATHER_API_KEY;
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=London&days=1&aqi=no&alerts=no`,
    { cache: "no-store" },
  );
  const data = await response.json();

  const isDay = data.current.is_day === 1;
  const conditionCode = data.current.condition.code;

  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-2">{data.location.name}</h1>

      <div className="flex items-center justify-center mb-4">
        <Condition
          conditionCode={conditionCode}
          isDay={isDay}
          size={64}
          className="mr-4"
        />
        <div className="text-5xl font-semibold">{data.current.temp_c}°C</div>
      </div>

      <p className="text-lg mb-2">{data.current.condition.text}</p>

      <div className="flex space-x-4 mt-2">
        <p className="text-sm">
          High: {data.forecast.forecastday[0].day.maxtemp_c}°C
        </p>
        <p className="text-sm">
          Low: {data.forecast.forecastday[0].day.mintemp_c}°C
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
        <p>Humidity: {data.current.humidity}%</p>
        <p>Wind: {data.current.wind_kph} km/h</p>
        <p>Feels like: {data.current.feelslike_c}°C</p>
        <p>UV Index: {data.current.uv}</p>
      </div>
    </div>
  );
}
