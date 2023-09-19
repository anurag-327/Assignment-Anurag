/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'cairo': ['cairo','sans-serif'],
    },
    fontSize: {
      sm: ['14px', '19.07px'],
      base: ['18px', '20px'],
      lg: ['28px', '52.47px'],
      xl: ['24px', '32px'],
    },
    extend: {
      colors:{
        "dark":"#0D0B21",
        "dark-02":"#15132B",
        "primary":"#211A75",
        "secondary":"#6418C3",
        "grey-01":"#A5A5A5",
        "yellow-01":"#FFAB2D",
        "grey-01":"#A5A5A5"
    },
    
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    
    styled: true, // include daisyUI colors and design decisions for all components
  },
}
