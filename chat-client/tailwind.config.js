/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-sm': {
          'text-shadow': '1px 1px 2px rgba(0,0,0,0.25)',
        },
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0,0,0,0.35)',
        },
        '.text-shadow-lg': {
          'text-shadow': '3px 3px 6px rgba(0,0,0,0.45)',
        },
        '.text-shadow-none': {
          'text-shadow': 'none',
        },
      });
    }
  ],
};
