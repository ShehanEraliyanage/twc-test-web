/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1536px",
    },
    extend: {
      // colors: {
      //   mainBack1: "#083F46",
      // },
      zIndex: {
        "-1": "-1",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/main.png')",
        "hero-pattern2": "url('/images/main2.png')",
      },
    },
  },
  plugins: [],
};
