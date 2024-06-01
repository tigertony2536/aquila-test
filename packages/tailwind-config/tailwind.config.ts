import type { Config } from 'tailwindcss';

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
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
      sans: ['Roboto']
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

export default config;
