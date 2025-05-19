import React from "react";
import Image from "next/image";
import { getIconForCondition } from "@/app/lib/utils";

// Type definition for our props
interface ConditionIconProps {
  conditionCode: number;
  isDay?: boolean;
  size?: number;
  className?: string;
}

const ConditionIcon: React.FC<ConditionIconProps> = ({
  conditionCode,
  isDay = true,
  size = 24,
  className = "",
}) => {
  const iconName = getIconForCondition(conditionCode, isDay);
  const iconPath = `/icons/${iconName}.svg`;

  return (
    <div className={`weather-condition ${className}`}>
      <div className="relative w-full h-full dark:invert">
        <Image
          src={iconPath}
          alt={`Weather condition: ${iconName}`}
          width={size}
          height={size}
          className="transition-colors"
        />
      </div>
    </div>
  );
};

export default ConditionIcon;
