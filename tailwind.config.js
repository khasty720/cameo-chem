import {nextui} from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d1742',
        },
        secondary: {
          DEFAULT: '#0ea5e9',
          50: '#b4e5fa',
          100: '#a1def9',
          200: '#7ad0f7',
          300: '#54c3f5',
          400: '#2db5f2',
          500: '#0ea5e9',
          600: '#0b80b4',
          700: '#085a7f',
          800: '#04354a',
          900: '#010f15',
        },
      },
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: {
              foreground: '#ffffff',
              DEFAULT: '#1d1742',
            },
            secondary: {
              foreground: '#ffffff',
              DEFAULT: '#0ea5e9',
            },
          },
        },
      },
    }),
  ],
};
