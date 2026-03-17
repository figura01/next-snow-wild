import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4DA8FF",
          dark: "#2563EB",
          light: "#93C5FD",
        },

        snow: "#F8FAFC",

        dark: "#0F172A",

        accent: "#1E293B",
      },

      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },

      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.05)",
      },
    },
  },

  plugins: [],
};

export default config;
