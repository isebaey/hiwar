module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#00B2A9",
        secondary: "#FF6F61",
        accent: "#333333",
        background: "#F4F4F4",
        sidebar: "#1F2937",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "group-hover"],
      textColor: ["group-hover"],
      opacity: ["group-hover"],
    },
  },
  plugins: [],
};
