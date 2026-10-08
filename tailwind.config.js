/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F5A623',
          amber: '#FBBF24',
          gold: '#E8A317',
          lightYellow: '#FEF3C7',
          lightBlue: '#E0F2FE',
          cream: '#FFFDF9',
          creamDark: '#FDF8EE',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


