import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-32 h-11 rounded-full bg-gradient-holy/50 hover:bg-gradient-divine hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg animate-divine-pulse flex items-center justify-center relative text-foreground hover:text-primary-foreground"
    >
      <div
        className={`flex items-center gap-2 text-sm font-semibold transition-opacity duration-400 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
      >
        Dark mode
        <Moon className="h-5 w-5" />
      </div>
      <div
        className={`absolute flex items-center gap-2 text-sm font-semibold transition-opacity duration-400 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      >
        Light mode
        <Sun className="h-5 w-5" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}