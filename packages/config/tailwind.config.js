/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "../../packages/ui/components/**/*.{ts,tsx}",
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      colors: {
        "custom-white": "#ffffff",
        "custom-black": "#070918",
        "primary": "#000AF4",
        "primary-hover": "#0438CA",
        "secondary": "#314968",
        "primary-bg": "#F8F8F8",
        "light-blue": "D6E4FF"
      },
    },
    plugins: [],
}
  