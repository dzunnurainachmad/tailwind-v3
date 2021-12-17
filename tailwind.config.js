module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'primary': '#212121',
      'secondary': '#6D9886',
      'tertiary': '#D9CAB3',
      'quaternary': '#F6F6F6',
      'white': '#FFF',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

