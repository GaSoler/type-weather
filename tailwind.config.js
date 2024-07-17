/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Nunito",
      },
      colors: {
        gray: {
          100: '#FAFAFA',
          200: '#BFBFD4',
          300: '#ABABC4',
          400: '#7F7F98',
          500: '#3B3B54',
          600: '#1E1E29',
          700: '#1C1C27',
          800: '#16161F',
          900: '#13131A',
        },
        white: '#FFFFFF',
        blue: '#8FB2F5'
      },
      backgroundImage: {
        pattern: 'url(/background.png)'
      }
    },
  },
  plugins: [],
}

