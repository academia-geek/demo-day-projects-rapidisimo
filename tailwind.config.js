const { themeGeneral } = require('./src/theme/bridge')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': themeGeneral.primary,
        'secondary': themeGeneral.secondary,
        'success': themeGeneral.success,
        'error': themeGeneral.error,
        'info': themeGeneral.info,
        'quaternary': '#0E3FA9',
        'background': themeGeneral.background,
        'white': '#FFFFFF',
        'black': '#000000',
      },
    },
  },
  plugins: [],
}