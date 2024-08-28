"use client";

import Image from "next/image";
import { WeatherObjectInfoType } from "@/actions/weatherCurrent";
import { Card } from "../ui/card";
import { Highlight } from "../ui/Highlight";
import { memo } from "react";

const imageLoader = ({ src }: { src: string }) => {
  return `https://openweathermap.org/img/wn/${src}@2x.png`;
};

export const Icon = memo(
  async ({ icon, main, description }: WeatherObjectInfoType) => (
    <Card className="grid grid-span-1 grid-flow-row gap-2 grid-cols-[128px_1fr] p-4 overflow-scroll">
      {icon && (
        <div className="grid bg-slate-200 dark:bg-slate-600 rounded-md">
          <Image
            alt="weather"
            height={128}
            width={128}
            priority={true}
            loader={imageLoader}
            src={icon}
          />
        </div>
      )}

      <div className="grid items-center ml-2">
        <div>{`Conditions:`}</div>
        <Highlight>{`${main}`}</Highlight>
        <div>{`(${description})`}</div>
      </div>
    </Card>
  )
);
