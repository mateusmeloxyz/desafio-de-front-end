import React from 'react';
import Image from 'next/image';

// Type definition for our props
interface ConditionProps {
  conditionCode: number;
  isDay?: boolean;
  size?: number;
  className?: string;
}

// Map condition codes to icon filenames
const getIconForCondition = (conditionCode: number, isDay: boolean = true): string => {
  // Default icon if no match is found
  let iconName = 'BsCloudFill';

  switch (conditionCode) {
    // Sunny / Clear
    case 1000:
      iconName = isDay ? 'BsBrightnessHighFill' : 'BsMoonFill';
      break;
    
    // Partly cloudy
    case 1003:
      iconName = isDay ? 'BsCloudSunFill' : 'BsCloudMoonFill';
      break;
    
    // Cloudy
    case 1006:
    case 1009:
      iconName = 'BsCloudFill';
      break;
    
    // Mist / Fog / Freezing fog
    case 1030:
    case 1135:
    case 1147:
      iconName = 'BsCloudFogFill';
      break;
    
    // Rain / Drizzle
    case 1063:
    case 1150:
    case 1153:
    case 1180:
    case 1183:
    case 1240:
      iconName = 'BsCloudDrizzleFill';
      break;
    
    // Moderate to heavy rain
    case 1186:
    case 1189:
    case 1192:
    case 1195:
    case 1243:
    case 1246:
      iconName = 'BsCloudRainFill';
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
      iconName = 'BsCloudSnowFill';
      break;
    
    // Sleet
    case 1069:
    case 1204:
    case 1207:
    case 1249:
    case 1252:
      iconName = 'BsCloudSleetFill';
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
      iconName = 'BsCloudHailFill';
      break;
    
    // Thunder
    case 1087:
    case 1273:
    case 1276:
    case 1279:
    case 1282:
      iconName = 'BsCloudLightningFill';
      break;
    
    // Blowing snow / Blizzard
    case 1114:
    case 1117:
      iconName = 'BsCloudSnowFill';
      break;
    
    default:
      // If we don't have a specific mapping, use a generic icon based on day/night
      iconName = isDay ? 'BsCloudFill' : 'BsCloudMoonFill';
  }

  return iconName;
};

const Condition: React.FC<ConditionProps> = ({ 
  conditionCode, 
  isDay = true, 
  size = 24, 
  className = '' 
}) => {
  const iconName = getIconForCondition(conditionCode, isDay);
  const iconPath = `/icons/${iconName}.svg`;

  return (
    <div className={`weather-condition ${className}`}>
      <Image 
        src={iconPath}
        alt={`Weather condition: ${iconName}`}
        width={size}
        height={size}
      />
    </div>
  );
};

export default Condition;