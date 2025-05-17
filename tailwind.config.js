/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004b8d',
          light: '#1f6bb2',
          dark: '#003567',
        },
        secondary: {
          DEFAULT: '#e6a400',
          light: '#ffbc38',
          dark: '#b68100',
        },
      },
    },
  },
  plugins: [],
};
