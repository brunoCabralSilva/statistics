/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
        'display': 'display',
        'spacing': 'margin, padding',
        'opacity': 'opacity',
      },
      spacing: {
        '5%': '5%',
        '10%': '12%',
        '80%': '80%',
        '17%': '17%%',
        '22%': '22%%',
        '60%': '60%',
      },
      colors: {
        'g-transp': 'rgb(74,210,149,0.2)',
        'green-site': 'rgb(74,210,149)',
      },
    },
  },
  plugins: [],
}


