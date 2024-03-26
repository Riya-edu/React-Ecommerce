/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}',
  'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    
    extend: {},
    colors: {
      indigo: {
        lighter: '#b3bcf5',
        default: '#5c6ac4',
        dark: '#202e78',
      },
      blue:  
      {
        lighter: '#b3bcf5',
      default: '#5c6ac4',
      dark: '#202e78'
    },

      red: {
        lighter: '#b3bcf5',
        default: '#5c6ac4',
        dark: '#202e78',
      }
    },
   
  plugins: [ ],
}
}

