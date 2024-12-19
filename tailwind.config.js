/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/src/assets/header.jpg')",
        bcBg: "url('/src/assets/breadCumb.png')",
      },
      colors: {
        primary: "#B88E2F",
      },
      width: {
        container: "1238px",
      },
    },
  },
  plugins: [],
};
