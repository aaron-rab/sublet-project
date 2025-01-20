/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
     
      extend: {
        colors: {
          'lightText': '#666666'
        },
        fontFamily: {
          'Lato': ['Lato', 'serif'],
          'Roboto': ['Roboto', 'serif'],
        },
      },
    },
    plugins: [],
  }