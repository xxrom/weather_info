import Image from "next/image";
import { WeatherObjectInfoType } from "@/actions/weather";
import { Card, CardHeader } from "../ui/card";

export const IconWeather = ({
  icon,
  main,
  description,
}: WeatherObjectInfoType) => {
  return (
    <Card className="grid grid-span-1 grid-flow-row gap-2 grid-cols-[128px_1fr] p-4">
      {icon && (
        <div className="grid bg-slate-400 rounded-md">
          <Image
            alt="weather"
            height={128}
            width={128}
            priority={false}
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          />
        </div>
      )}

      <div className="grid items-center  ml-2">
        <div>{`Conditions:`}</div>
        <div>{`${main}`}</div>
        <div>{`(${description})`}</div>
      </div>
    </Card>
  );
};
