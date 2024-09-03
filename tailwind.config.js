module.exports = {
  content: [
    './src/**/*.{html,js}', // Specify the paths where Tailwind should look for class names
  ],
  darkMode: 'media', // or 'class' or false for no dark mode
  theme: {
    width: {
      'custom-width': 'var(--beforewidth)',
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
