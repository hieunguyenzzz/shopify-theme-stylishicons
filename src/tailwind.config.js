module.exports = {
  prefix: 'tw-',
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  content: [
    './**/*.liquid',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    namedGroups: ['one', 'two'],
    extend: {
    
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
