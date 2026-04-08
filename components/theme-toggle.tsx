"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
      className={`
        relative w-14 h-8 rounded-full transition
        ${isDark ? "bg-[color:var(--color-ski-600)]" : "bg-slate-300"}
      `}
    >
      {/* Thumb */}
      <div
        className={`
          absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md
          transition-transform duration-300
          ${isDark ? "translate-x-6" : ""}
        `}
      />
    </button>
  );
}
