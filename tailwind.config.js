/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        card: '0 0 0.5rem rgba(0, 0, 0, 0.02)',
        popover: '0 0 0.5rem rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
