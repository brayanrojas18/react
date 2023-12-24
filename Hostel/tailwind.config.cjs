/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('./src/assets/bg-loginsvg.svg')"
      },
      fontFamily: {
        sans: ['Nunito', 'Roboto', ...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      'h-primary': '#00ADB5',
      'h-primary-focus': '#007378',
      'h-error': '#dc2626',
      'h-error-focus': '#921919',
      'h-light': '#EEEEEE',
      'h-dark': '#222831',
      'h-semidark': '#393E46'
    }
  },
  plugins: [require('daisyui')]
}
