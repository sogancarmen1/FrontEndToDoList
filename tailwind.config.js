/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        brand: {
          50: "#F6F9FF",
        },
        other: "#757575",
        bordercolor: "#BDBDBD",
        emailColor: "#212121",
        password: "#424242",
        logInColor: "#7B76F1",
      },
      boxShadow: {
        "custom-shadow":
          "0 4px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
