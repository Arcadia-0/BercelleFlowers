/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: ['"Playfair Display"', 'serif'],
    },
    colors:{
      primary: '#A86F5E', // Brown
      secondary: '#EC8FAA', // Pink
    }
  },
  plugins: [],
}
 }
