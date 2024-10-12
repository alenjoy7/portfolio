/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        chakie: ["chakie", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        typing: "typing 1s steps(11), blink 0.7s infinite",
        fadeInTop: "fadeInTop 1s ease-in-out",
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInImage: "fadeInImage 1s ease-in-out",
        marqueeHorizontal: "marqueeX var(--duration) infinite linear",
        marqueeVertical: "marqueeY var(--duration) linear infinite",
      },
      keyframes: {
        fadeInTop: {
          "0%": { opacity: "0", marginTop: 12 },
          "100%": { opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInImage: {
          "0%": { opacity: "0", marginTop: "40dvh" },
          "100%": { opacity: "1" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": {
            "border-right-color": "transparent",
          },
        },
        marqueeX: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        marqueeY: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
