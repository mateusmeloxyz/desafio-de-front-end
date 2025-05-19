export default async function CurrentWeather() {
  const apikey = process.env.WEATHER_API_KEY;
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=London`,
  );
  const data = await response.json();
  return (
    <div>
      <h1>Current Weather in {data.location.name}</h1>
      <p>Temperature: {data.current.temp_c}°C</p>
      <p>Condition: {data.current.condition.text}</p>
    </div>
  );
}
