import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        stroke: "var(--stroke)",
        "themes-black-10": "var(--themes-black-10)",
        "themes-black-100": "var(--themes-black-100)",
        "themes-black-20": "var(--themes-black-20)",
        "themes-black-40": "var(--themes-black-40)",
        "themes-black-5": "var(--themes-black-5)",
        "themes-black-80": "var(--themes-black-80)",
        "themes-logo-color-logo": "var(--themes-logo-color-logo)",
        "themes-logo-color-logo-2": "var(--themes-logo-color-logo-2)",
        "themes-primary-brand": "var(--themes-primary-brand)",
        "themes-secondary-indigo": "var(--themes-secondary-indigo)",
        "themes-secondary-purple": "var(--themes-secondary-purple)",
        "themes-white-10": "var(--themes-white-10)",
        "themes-white-100": "var(--themes-white-100)",
        "themes-white-40": "var(--themes-white-40)",
      },
    },
  },
  plugins: [],
};
export default config;
