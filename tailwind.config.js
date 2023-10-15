/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   "./src/**/*.{vue,js,ts}",
  // ],
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

