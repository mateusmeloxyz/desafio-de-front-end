import React from "react";

interface WeatherMetadataItemProps {
  metadata: string;
  data: string | number;
  unit?: string;
  className?: string;
}

const WeatherMetadataItem: React.FC<WeatherMetadataItemProps> = ({
  metadata,
  data,
  unit = "",
  className = "",
}) => {
  return (
    <div className={`weather-metadata-item ${className}`}>
      <p className="text-sm">
        {metadata} {data}
        {unit && ` ${unit}`}
      </p>
    </div>
  );
};

export default WeatherMetadataItem;