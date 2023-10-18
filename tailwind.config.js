/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   "./src/**/*.{vue,js,ts}",
  // ],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a08be0",
          secondary: "#ff423f",
          accent: "#ed6ff2",
          neutral: "#161c27",
          "base-100": "#fcfcfd",
          info: "#43b2db",
          success: "#73e8c1",
          warning: "#a98b04",
          error: "#fb2a23",
        },
      },
    ],
  },
};
