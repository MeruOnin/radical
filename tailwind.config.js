/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'background-org': "#191825",
        'background-elm': "#3B3486"
      },
      fontFamily: {
        iranSans: ["iran-sans", "sans-serif"],
        iranSansReg: ["iran-sans-reg", "sans-serif"]
      },
      fontSize: {
        h1: "60px"
      }
    },
  },
  plugins: [],
}
