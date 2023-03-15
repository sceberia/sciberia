/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "../../packages/ui/components/**/*.{ts,tsx}",
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    colors: {
      "custom-black": "#070918",
      "primary": "#0040F4",
      "primary-hover": "#0438CA",
      "secondary": "#314968",
    },
    plugins: [],
}
  