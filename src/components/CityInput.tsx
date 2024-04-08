"use client";

import {
  ChangeEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  memo,
  useState,
} from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { formatUrl } from "@/utils/url-text";

export type CityInput = {
  placeholder?: string;
};

export const CityInput = memo(({ placeholder }: CityInput) => {
  const router = useRouter();

  const [city, setCity] = useState(placeholder || "dubai");

  const onChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value.toLowerCase());
  };

  const changeCity = () => {
    router.push(`/${city}`);
  };

  const onClickGoToCity: MouseEventHandler<HTMLButtonElement> = () => {
    changeCity();
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      changeCity();
    }
  };

  return (
    <div className="grid grid-flow-row grid-cols-2 gap-2 my-2 mt-8">
      <Input
        className="inline-grid"
        value={formatUrl(city)}
        onChange={onChangeCity}
        onKeyDown={onKeyDown}
      />

      <Button className="inline-grid" onClick={onClickGoToCity}>
        Change City
      </Button>
    </div>
  );
});
