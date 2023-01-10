module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}",
    "./src/**/*"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
