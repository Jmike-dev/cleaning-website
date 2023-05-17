/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'primary':{
          'blue':'#145AFD',
          'purple':'#BDC4FF',
          'green':'#4DBE9E',
          'black':'#1B1A28'
        }
        
      }
    },
  },
  plugins: [],
}

