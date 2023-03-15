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
        backgroundImage: {
          'main-background': "url('/background-image/background-main.png')",
        }
      },
      fontSize: {
        sm: ['18px', '28px'],
        base: ['20px', '32px'],
        lg: ['24px', '32px'],
        xl: ['40px', '58px'],
        'large': ['56px', '70px'],
        '2xl': ['64px', '78px'],
      },
      fontWeight: {
        regular: '400',
        semibold: '600',
        extrabold: '800',
      },
      colors: {
        "custom-white": "#ffffff",
        "border-primary": "#F3F3F3",
        "bg-primary": "#F8F8F8",
        "custom-black": "#0A1044",
        "primary": "#1A75FF",
        "primary-hover": "#0A5EDD",
        "secondary": "#314968",
        "primary-bg": "#F8F8F8",
        "light-blue": "#D6E4FF",
        "text-secondary": "#999DA6"
      },
    },
    plugins: [],
}
  