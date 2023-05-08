/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    
    extend: {
      colors:{
        'gold':'#D1AA68',
         'themeblue':'#33537D',
         'background': '#D1AA6814'

      },
    },
  },
  plugins: [],
}
