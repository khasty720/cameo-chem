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
          DEFAULT: '#173a69',
        },
        secondary: {
          DEFAULT: '#40b99e',
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
              DEFAULT: '#173a69',
            },
            secondary: {
              foreground: '#ffffff',
              DEFAULT: '#40b99e',
            },
          },
        },
      },
    }),
  ],
};
