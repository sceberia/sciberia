/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
      "../../packages/ui/components/**/*.{ts,tsx}",
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
      },
      colors: {
        "custom-white": "#ffffff",
        "custom-black": "#0A1044",
        "primary": "#000AF4",
        "primary-hover": "#0438CA",
        "secondary": "#314968",
        "primary-bg": "#F8F8F8",
        "light-blue": "D6E4FF"
      },
    },
    plugins: [],
}
  