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
    <div
      className={`weather-metadata-item ${className} text-center pl-4 pr-4 text-xl`}
    >
      <p>{metadata} </p>
      <p>
        {data}
        {unit && ` ${unit}`}
      </p>
    </div>
  );
};

export default WeatherMetadataItem;
