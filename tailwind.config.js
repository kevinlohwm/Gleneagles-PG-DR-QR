/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f7',
          100: '#ccefef',
          200: '#99dfde',
          300: '#66cfce',
          400: '#33bfbd',
          500: '#00afad', // Primary Gleneagles teal
          600: '#008c8b',
          700: '#006a68',
          800: '#004746',
          900: '#002323',
        },
        secondary: {
          50: '#e6eaef',
          100: '#ccd5df',
          200: '#99abbe',
          300: '#66829e',
          400: '#33587d',
          500: '#002e5d', // Secondary Gleneagles navy
          600: '#00254a',
          700: '#001c38',
          800: '#001225',
          900: '#000913',
        },
        accent: {
          50: '#fff7e6',
          100: '#ffeecc',
          200: '#ffdd99',
          300: '#ffcc66',
          400: '#ffbb33',
          500: '#ffaa00', // Accent gold
          600: '#cc8800',
          700: '#996600',
          800: '#664400',
          900: '#332200',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      screens: {
        'print': {'raw': 'print'},
      },
    },
  },
  plugins: [],
};