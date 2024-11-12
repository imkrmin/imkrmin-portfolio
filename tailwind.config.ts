import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      snow: ["SMUSnowflake-Bold", "sans-serif"],
      okgung: ["OKGUNG", "sans-serif"],
      pretendard: ["var(--font-pretendard)", "sans-serif"],
    },
    screens: {
      tablet: { max: "1199px" },
      mobile: { max: "767px" },
    },
    extend: {
      backgroundImage: {
        header: "url('/images/bg.jpg')",
        "custom-gradient":
          "linear-gradient(-225deg, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)",
      },
      backgroundBlendMode: {
        multiply: "multiply",
      },
      animation: {
        "gradient-move": "gradientAnimation 4s linear infinite alternate",
      },

      keyframes: {
        gradientAnimation: {
          "0%": {
            backgroundPosition: "10% 10%",
          },
          "100%": {
            backgroundPosition: "90% 90%",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
