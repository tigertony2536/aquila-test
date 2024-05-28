import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '../../packages/**/*.{js,ts,jsx,tsx}',
    './**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './apps/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      md: '800px',
      lg: '1200px'
    },
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      colors: {
        'dark-gray': '#7f7f7f',
        'light-gray': '#e8e5e480'
      }
    }
  },

  plugins: []
};
