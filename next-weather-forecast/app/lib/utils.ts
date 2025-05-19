// Map condition codes to icon filenames
export const getIconForCondition = (
  conditionCode: number,
  isDay: boolean = true,
): string => {
  // Default icon if no match is found
  let iconName = "BsCloudFill";

  switch (conditionCode) {
    // Sunny / Clear
    case 1000:
      iconName = isDay ? "BsBrightnessHighFill" : "BsMoonFill";
      break;

    // Partly cloudy
    case 1003:
      iconName = isDay ? "BsCloudSunFill" : "BsCloudMoonFill";
      break;

    // Cloudy
    case 1006:
    case 1009:
      iconName = "BsCloudFill";
      break;

    // Mist / Fog / Freezing fog
    case 1030:
    case 1135:
    case 1147:
      iconName = "BsCloudFogFill";
      break;

    // Rain / Drizzle
    case 1063:
    case 1150:
    case 1153:
    case 1180:
    case 1183:
    case 1240:
      iconName = "BsCloudDrizzleFill";
      break;

    // Moderate to heavy rain
    case 1186:
    case 1189:
    case 1192:
    case 1195:
    case 1243:
    case 1246:
      iconName = "BsCloudRainFill";
      break;

    // Snow
    case 1066:
    case 1210:
    case 1213:
    case 1216:
    case 1219:
    case 1222:
    case 1225:
    case 1255:
    case 1258:
      iconName = "BsCloudSnowFill";
      break;

    // Sleet
    case 1069:
    case 1204:
    case 1207:
    case 1249:
    case 1252:
      iconName = "BsCloudSleetFill";
      break;

    // Freezing rain / ice
    case 1072:
    case 1168:
    case 1171:
    case 1198:
    case 1201:
    case 1237:
    case 1261:
    case 1264:
      iconName = "BsCloudHailFill";
      break;

    // Thunder
    case 1087:
    case 1273:
    case 1276:
    case 1279:
    case 1282:
      iconName = "BsCloudLightningFill";
      break;

    // Blowing snow / Blizzard
    case 1114:
    case 1117:
      iconName = "BsCloudSnowFill";
      break;

    default:
      // If we don't have a specific mapping, use a generic icon based on day/night
      iconName = isDay ? "BsCloudFill" : "BsCloudMoonFill";
  }

  return iconName;
};

/**
 * Converts wind speed from kilometers per hour (km/h) to meters per second (m/s)
 * Formula: 1 km/h = 0.277778 m/s
 * 
 * @param kmh - Wind speed in kilometers per hour
 * @returns - Wind speed in meters per second, rounded to 2 decimal places
 */
export const kmhToMs = (kmh: number): number => {
  // Conversion factor: 1 km/h = 0.277778 m/s
  const conversionFactor = 0.277778;
  return Number((kmh * conversionFactor).toFixed(2));
};

/**
 * Determines the time of day based on the hour in a datetime string
 * 
 * @param dateTimeStr - Datetime string in format "YYYY-MM-DD HH:MM"
 * @returns Time of day: "dawn", "morning", "afternoon", or "night"
 */
export const getTimeOfDay = (dateTimeStr: string): string => {
  // Parse the hour from the datetime string
  const hour = parseInt(dateTimeStr.split(' ')[1].split(':')[0], 10);
  
  // Determine time of day based on hour ranges
  if (hour >= 0 && hour < 6) {
    return "dawn";
  } else if (hour >= 6 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 18) {
    return "afternoon";
  } else {
    return "night";
  }
};
