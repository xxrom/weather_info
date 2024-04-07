"use client"; // Error components must be Client Components

import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import { Highlight } from "@/components/ui/Highlight";
import { Button } from "@/components/ui/button";
import { CityInput } from "@/components/CityInput";

export type ErrorType = {
  error: Error & { digest?: string };
  reset: () => void;
};
export default function Error({ error }: ErrorType) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid justify-center p-12">
      <Card className="mt-4 p-8">
        <Highlight className="grid text-center text-3xl">
          Something went wrong!
        </Highlight>

        <Highlight className="grid text-center text-3xl mt-4">
          {error.message}
        </Highlight>
      </Card>

      <CityInput />
    </div>
  );
}
