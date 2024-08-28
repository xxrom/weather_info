"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "../../context/themeProvider";
import { memo, useCallback } from "react";

export const ThemeToggler = memo(() => {
  const { theme, storageKey, setTheme } = useTheme();

  const localTheme =
    (typeof window !== "undefined" && localStorage?.getItem(storageKey)) ||
    theme;

  const onChangeTheme = useCallback(
    () => setTheme(localTheme === "dark" ? "light" : "dark"),
    [localTheme]
  );

  return (
    <div className="absolute top-2 right-6" suppressHydrationWarning>
      <Button
        variant="outline"
        className="dark:text-slate-100"
        onClick={onChangeTheme}
        suppressHydrationWarning
      >
        {localTheme === "dark" ? "𖤓" : "☾"}
      </Button>
    </div>
  );
});
