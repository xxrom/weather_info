"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "../../context/themeProvider";
import { memo, useCallback } from "react";

export const ThemeToggler = memo(() => {
  const { theme, setTheme } = useTheme();

  const onChangeTheme = useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [theme]
  );

  return (
    <div className="absolute top-2 right-6" suppressHydrationWarning>
      <Button
        variant="outline"
        className="dark:text-slate-100"
        onClick={onChangeTheme}
        suppressHydrationWarning
      >
        {theme === "dark" ? "𖤓" : "☾"}
      </Button>
    </div>
  );
});
