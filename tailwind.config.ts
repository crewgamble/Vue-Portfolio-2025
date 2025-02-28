import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#586552',
        'secondary': '#434f45',
        'info': '#717b70',
        'light': '#7a8775',
        'dark': '#424c44',
      },
    },
  },
  plugins: [],
};

export default config;