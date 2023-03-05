/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      Blackout: ["Blackout", "sans-serif"],
      Russo: ["Russo", "sans-serif"],
      SpaceAge: ["SpaceAge", "sans-serif"],
      Arial: ["Arial", "sans-serif"]
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.8rem',
      '2xl': '2.8rem',
      '3xl': '3.8rem',
      '4xl': '6rem',
      '5xl': '7rem',
    },
    extend: {
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  plugins: [],
}
