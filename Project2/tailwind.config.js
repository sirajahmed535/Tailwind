/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: { 
        "oswald": ["Oswald", 'sans-serif'] 
    },
    colors:{
      whitecolor: '#ffffff',
      backgroundcolor: '#000072',
    }
    },
  },
  plugins: [],
}

