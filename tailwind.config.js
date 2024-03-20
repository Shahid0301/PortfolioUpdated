/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-background': "#121212",
        'subheading': "#9E9E9E"
      },
      fontFamily: {
        'Poppins':['Poppins']
      }
    },
  },
  plugins: [],
}

