/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#240D57",
          secondary: "#DDDDDD",
          accent: "#e87bf8",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
