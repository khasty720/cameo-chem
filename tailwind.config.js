import {nextui} from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {},
      themes: {
        light: {
          layout: {},
        },
        dark: {
          layout: {},
        },
      },
    }),
  ],
};
