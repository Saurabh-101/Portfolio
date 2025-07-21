/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container:{
      center: true,
      padding: "15px",
    },
    screens:{
      sm:"640px",
      md:"768px",
      lg:"960px",
      xl:"1200px",
    },
    fontFamily:{
      primary: "var(--font-jetbrainsMono)",
    },
  	extend: {
  		colors:{
        primary: "#1c1c22",
        accent:{
          DEFAULT:"#FF5F1F",
          hover:"#E64E11"
        }
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
}