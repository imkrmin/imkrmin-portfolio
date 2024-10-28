import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      snow: ["SMUSnowflake-Bold", "sans-serif"],
      pretendard: ["var(--font-pretendard)", "sans-serif"],
    },
    backgroundImage: {
      header: "url('/images/bg.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
