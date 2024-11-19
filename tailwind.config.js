/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#0C1E30",
        secondaryColor: "#00A8E1",
        thirdColor: "#1F80A5",
      },
    },
  },
  plugins: [],
};
