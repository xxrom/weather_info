import { memo } from "react";
import { Skeleton } from "./ui/skeleton";

export const SkeletonWeather = memo(() => (
  <div className="grid gap-2 w-full sm:w-fit sm:min-w-[600px]">
    <div className="grid w-full grid-cols-1 sm:grid-cols-[200px_1fr] justify-items-center align-middle gap-2">
      <Skeleton className="h-[86px] sm:h-[128px] w-full sm:max-w-[300px] rounded-md border-2 border-slate-300" />

      <Skeleton className="h-[162px] sm:h-[128px] w-full sm:max-w-[400px] rounded-md border-2 border-slate-300" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
      <Skeleton className="h-[174px] sm:h-[122px] w-full rounded-md border-2 border-slate-300" />

      <Skeleton className="hidden sm:grid h-[122px] w-full rounded-md border-2 border-slate-300" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-1 items-center gap-2">
      <Skeleton className="h-[478px] w-full rounded-md border-2 border-slate-300" />
    </div>
  </div>
));
