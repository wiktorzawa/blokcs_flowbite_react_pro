import flowbitePlugin from "flowbite/plugin";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /^(?:after|before):[^\s:]+$/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
      boxShadow: {
        "lg-light":
          "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [
    flowbitePlugin,
    require("flowbite-typography"),
    function ({ addVariant }: any) {
      addVariant("after", "&::after");
      addVariant("before", "&::before");
    },
  ],
} satisfies Config;
