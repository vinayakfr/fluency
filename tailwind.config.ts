import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        float1: "float1 8s ease-in-out infinite",
        float2: "float2 8s ease-in-out infinite",
      },
      keyframes: {
        float1: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(100px)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-150px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
