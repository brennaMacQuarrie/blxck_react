/** @type {import('tailwindcss').Config} */

module.exports = {
  variants: {
    textColor: ['hover', 'focus', 'group-hover'],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blx-gold': '#e7c376',
        'blx-blue': '#7ebec5',
      },
      transitionProperty: {
        'width': 'width',
      }
    },
    fontFamily: {
      Blackout: ["Blackout", "sans-serif"],
      Russo: ["Russo", "sans-serif"],
      SpaceAge: ["SpaceAge", "sans-serif"],
      Arial: ["Arial", "sans-serif"]
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      'lg': '1.5rem',
      xl: '2rem',
      '2xl': '2.8rem',
      '3xl': '3.8rem',
      '4xl': '6rem',
      '5xl': '7rem',
    },
    
  },
  plugins: [],
}
