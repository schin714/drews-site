module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["'Ubuntu'", "sans-serif"],
      },
      colors: {
        ds: {
          dark: "#1F2336",
          accent: "#6CDBCA",
          light: "#24283C",
        },
      },
    },
  },
  plugins: [],
};
