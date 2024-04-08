"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "../../context/themeProvider";
import { memo } from "react";

export const ThemeToggler = memo(() => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="absolute top-2 right-6 sm:right-2" suppressHydrationWarning>
      {theme !== "light" && (
        <Button
          variant="outline"
          className="dark:text-slate-100"
          onClick={() => setTheme("light")}
          suppressHydrationWarning
        >
          𖤓
        </Button>
      )}

      {theme !== "dark" && (
        <Button
          variant="outline"
          onClick={() => setTheme("dark")}
          suppressHydrationWarning
        >
          ☾
        </Button>
      )}
    </div>
  );
});
