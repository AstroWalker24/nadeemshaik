/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor:{
      primary:"#03C03C",
      terminal:"#ffffff",
      button1:"#FF0000",
      button2:"#FFFF00",
      button3:"#00ff00",
      trans:"#00ff00",
      dark:"#023020"
    },
    fontFamily:{
      primary:["NeueMachina-Regular","serif"],
      retro:["Terminal",'monospace']
    },
  },
  plugins: [],
}