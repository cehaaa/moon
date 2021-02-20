module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage : theme => ({
        'receipt-shape' : "url('./assets/dragon.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
