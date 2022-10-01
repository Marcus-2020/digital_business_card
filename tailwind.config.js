/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary-dark': {
        400: '#1A1B21',
        900: '#161619'
      },
      'primary-light': {
        300: '#D5D4D8',
        200: '#F5F5F5',
        100: '#FFFFFF',
      },
      'text-primary': {
        100: '#1E1F26',
        200: '#DCDCDC',
        600: '#374151',
      },
      'text-secondary': {
        400: '#F3BF99'
      },
      'icon-primary': {
        'gray': '#918E9B',
        'dark': '#1E1F26'
      },
      'button-primary': {
        'white': '#FFFFFF',
        'linkedin-blue': '#5093E2',
      }
    },
    extend: {},
  },
  plugins: []
}
