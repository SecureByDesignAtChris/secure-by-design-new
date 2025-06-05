/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#dcf0de',
          200: '#bbdfc0',
          300: '#86c090',
          400: '#4a9c62',
          500: '#2d7b45',
          600: '#1d6434',
          700: '#15512a',
          800: '#114024',
          900: '#0c301b',
        },
        secondary: {
          // Deep blue
          50: '#f0f6ff',
          100: '#dce7fb',
          200: '#bbd1f7',
          300: '#86aae9',
          400: '#4a75d6',
          500: '#2d4fa8',
          600: '#1d3887',
          700: '#152a69',
          800: '#112152',
          900: '#0c1838',
        },
        accent: {
          // Warm copper
          50: '#fdf4f0',
          100: '#fae5dc',
          200: '#f7ccbb',
          300: '#e9a686',
          400: '#d6754a',
          500: '#a8502d',
          600: '#87381d',
          700: '#692915',
          800: '#521f11',
          900: '#38160c',
        },
      },
      fontFamily: {
        sans: ['GoogleSans-Regular', 'ui-sans-serif', 'system-ui'],
        display: ['GoogleSans-Bold', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'smooth': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'smooth-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
