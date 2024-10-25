/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',  
        secondary: '#ffed4a',  
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], 
        sans: ['Poppins', 'Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}

