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
      container: {
        padding: '2rem',
      },
    },
    
  },
  plugins: [
    
  ],
  
}
