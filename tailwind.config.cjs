/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      colors:{
        primary:{
          100:'#00C1C4',
          200:'#01A8AB',
        },
        sidebar:'#00353F',
        secondary:{
          100:'#D9D9D9',
          200:'#9C9C9C',
        },
        warning:{
          100:'#FFB800',
          200:'#D79B00',
        },
        danger:{
          100:"#FF0000",
          200:"#CC0000",
        },
        info:{
          100:"#37B7FF",
          200:"#329FDD",
        },

      }
    },
  },
  plugins: [],
}
