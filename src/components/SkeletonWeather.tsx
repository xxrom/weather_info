import { memo } from "react";
import { Skeleton } from "./ui/skeleton";

export const SkeletonWeather = memo(() => (
  <div className="grid justify-center align-middle items-center">
    <div className="grid grid-cols-1 sm:grid-cols-[128px_1fr] justify-items-center align-middle sm:space-x-4">
      <Skeleton className="h-[128px] w-[128px] rounded-md border-2 border-slate-300" />

      <Skeleton className="h-[128px] w-[256px] rounded-md border-2 border-slate-300 mt-4 sm:mt-0" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center sm:space-x-4 mt-4">
      <Skeleton className="h-[128px] w-full mt-4 rounded-md border-2 border-slate-300" />
      <Skeleton className="h-[128px] w-full mt-4 rounded-md border-2 border-slate-300" />
    </div>
  </div>
));
