/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#0D0127",
          gray: "#616161",
          blue: "#45F882", //replace with this #0E6DE8
          yellow: "#45F882", //replace with this #FFB321
          border: "#1a1a1a",
          "border-secondary": "#D1E5FF",
        },
      },
    },
  },
  plugins: [],
};
