module.exports = {
  prefix: 'tw-',
  mode: 'jit',
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: [
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
