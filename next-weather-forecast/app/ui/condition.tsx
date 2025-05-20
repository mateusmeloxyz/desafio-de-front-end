import ConditionIcon from "./conditionIcon";
import { getTimeOfDay } from "@/app/lib/utils";

interface ConditionProps {
  data: {
    time: string;
    temp_c: number;
    condition: {
      code: number;
    };
    is_day: boolean;
  };
}

const Condition: React.FC<ConditionProps> = ({ data }) => {
  const timeOfDay = getTimeOfDay(data.time);
  return (
    <div className="flex flex-col items-center justify-center min-w-24">
      <p className="text-xl/[120%] font-extralight mb-4">{timeOfDay}</p>
      <div className="mb-4">
        <ConditionIcon
          conditionCode={data.condition.code}
          isDay={data.is_day}
          size={48}
          className="mb-4"
        />
        <div className="text-xl font-semibold">{data.temp_c.toFixed(0)}°C</div>
      </div>
    </div>
  );
};

export default Condition;
