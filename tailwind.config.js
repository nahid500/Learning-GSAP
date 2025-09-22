/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',     // App Router files
    './pages/**/*.{js,ts,jsx,tsx}',   // For compatibility if you use Pages
    './components/**/*.{js,ts,jsx,tsx}' // Your UI components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
