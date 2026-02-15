"use client";

import { Sun, Moon, Twitter, Linkedin } from "lucide-react";
import { useTheme } from "./theme-provider";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between py-6">
      <h1 className="font-display text-3xl font-bold text-foreground">
        Nacho Iannella
      </h1>
      <div className="flex items-center gap-3">
        <a
          href="https://twitter.com/niachito"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          aria-label="Twitter profile"
        >
          <Twitter className="h-4 w-4" />
        </a>
        <a
          href="https://linkedin.com/in/nachoiannella"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          aria-label="LinkedIn profile"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <button
          onClick={toggleTheme}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
      </div>
    </header>
  );
}
