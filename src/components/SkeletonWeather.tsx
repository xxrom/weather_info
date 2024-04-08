import { memo } from "react";
import { Skeleton } from "./ui/skeleton";

export const SkeletonWeather = memo(() => (
  <div className="grid gap-2 min-w-[300px] sm:min-w-[600px]">
    <div className="grid w-full grid-cols-1 sm:grid-cols-[200px_1fr] justify-items-center align-middle gap-2">
      <Skeleton className="h-[128px] w-full max-w-[300px] rounded-md border-2 border-slate-300" />

      <Skeleton className="h-[128px] w-full max-w-[400px] rounded-md border-2 border-slate-300" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
      <Skeleton className="h-[150px] w-full rounded-md border-2 border-slate-300" />

      <Skeleton className="h-[150px] w-full rounded-md border-2 border-slate-300" />
    </div>
  </div>
));
