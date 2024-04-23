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
        brand: {
          DEFAULT: '#0f172a',
          50: '#93a7d8',
          100: '#849bd3',
          200: '#6683c8',
          300: '#486abd',
          400: '#3a59a2',
          500: '#2f4884',
          600: '#243866',
          700: '#1a2748',
          800: '#0f172a',
          900: '#000001',
        },
        'brand-alt': {
          DEFAULT: '#1e293b',
          50: '#b3c1d8',
          100: '#a5b6d1',
          200: '#8aa0c4',
          300: '#6f8ab6',
          400: '#5574a7',
          500: '#47618c',
          600: '#3a4f71',
          700: '#2c3c56',
          800: '#1e293b',
          900: '#0b0f16',
        },
        accent: {
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
        heading: '#000836',
      },
    },
  },
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
