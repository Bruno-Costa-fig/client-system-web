/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ['brand-color-blue-100']: "var(--brand-color-blue-100)",
        ['brand-color-blue-80']: "var(--brand-color-blue-80)",
        ['brand-color-blue-60']: "var(--brand-color-blue-60)",
        ['brand-color-blue-40']: "var(--brand-color-blue-40)",
        ['brand-color-blue-20']: "var(--brand-color-blue-20)",
        ['gray-color-100']: "var(--gray-color-100)",
        ['gray-color-80']: "var(--gray-color-80)",
        ['gray-color-60']: "var(--gray-color-60)",
        ['gray-color-40']: "var(--gray-color-40)",
        ['gray-color-20']: "var(--gray-color-20)",
        ['brand-color-green']: "var(--brand-color-green)",
        ['brand-color-yellow']: "var(--brand-color-yellow)",
        ['brand-color-red']: "var(--brand-color-red)",
      },
    },
  },
  plugins: [],
}
