import React from "react";
import Condition from "@/app/ui/condition";
import ConditionIcon from "@/app/ui/conditionIcon";
import { kmhToMs } from "../lib/utils";

interface CurrentWeatherProps {
  city?: string;
}

export default async function CurrentWeather({ city = "London" }: CurrentWeatherProps) {
  const apikey = process.env.WEATHER_API_KEY;
  
  if (!apikey) {
    return (
      <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <p className="text-red-500">Error: Weather API key is missing. Please check your environment variables.</p>
      </div>
    );
  }
  
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=1&aqi=no&alerts=no`,
      { cache: "no-store" },
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data || !data.location || !data.current || !data.forecast) {
      throw new Error('Invalid data structure received from the API');
    }

  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-2">{data.location.name}, {data.location.country}</h1>
      <p className="text-lg mb-2">{data.current.condition.text}</p>

      <div className="flex items-center justify-center mb-4 flex-col">
        <div className="text-5xl font-semibold">{data.current.temp_c}°C</div>
        <ConditionIcon
          conditionCode={data.current.condition.code}
          isDay={data.current.is_day}
          size={64}
          className="mr-4"
        />
      </div>
      <div className="flex gap-4">
        <Condition data={data.forecast.forecastday[0].hour[3]} />
        <Condition data={data.forecast.forecastday[0].hour[9]} />
        <Condition data={data.forecast.forecastday[0].hour[15]} />
        <Condition data={data.forecast.forecastday[0].hour[21]} />
      </div>

      <div className="flex space-x-4 mt-2">
        <p className="text-sm">
          High: {data.forecast.forecastday[0].day.maxtemp_c}°C
        </p>
        <p className="text-sm">
          Low: {data.forecast.forecastday[0].day.mintemp_c}°C
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
        <p>Wind speed {kmhToMs(data.current.wind_kph)} m/s</p>
        <p>Sunrise {data.forecast.forecastday[0].astro.sunrise}</p>
        <p>Sunset {data.forecast.forecastday[0].astro.sunset}</p>
        <p>Humidity {data.current.humidity}%</p>
      </div>
    </div>
  );
  } catch (error) {
    console.error('Weather API Error:', error);
    return (
      <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2 text-red-500">Weather Data Unavailable</h1>
        <p className="text-lg mb-2">
          {error instanceof Error 
            ? error.message 
            : `Could not load weather data for "${city}". The city might not exist in the database or there was an API error.`}
        </p>
        <p className="mt-4">Please try another city or check back later.</p>
      </div>
    );
  }
}
