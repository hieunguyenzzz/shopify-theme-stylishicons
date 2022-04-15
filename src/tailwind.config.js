module.exports = {
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
      colors: {
        "foreground": "rgb(var(--color-foreground))",
        "accent-1": "rgb(var(--color-base-accent-1))",
        "accent-2": "rgb(var(--color-base-accent-2))",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animatecss')({
      classes: ['animate__animated', 'animate__fadeIn','animate__fadeInDown','animate__fadeInUp', 'animate__bounceIn'],
      settings: {
        animatedSpeed: 500
      },
      variants: ['responsive', 'hover', 'reduced-motion'],
    }),
  ]
}
