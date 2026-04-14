/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body:    ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        brand:   "#1A3848",
        "brand-mid": "#254D63",
        accent:  "#C9933A",
        "accent-lt": "#E8B96A",
        surface: "#F2EFE9",
        line:    "#E0DDD7",
        muted:   "#6B6B6B",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #1A3848 0%, #254D63 100%)",
      },
    },
  },
};
