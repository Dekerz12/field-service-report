/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'google-sans': ['Google Sans', 'serif'],
      },
      colors: {
        accent: '#5b3c88',
        primary: '#d8d8d8',
      },
    },
  },
  plugins: [],
};
