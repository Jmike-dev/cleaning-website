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
          'dark-grey':'#474555',
          'grey':'#ACA9BB',
          'green':'#00874F',
          'light-green':'#00C080'
        }
        
      }
    },
  },
  plugins: [],
}

