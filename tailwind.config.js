module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        lightbg: 'var(--color-lightbg)',
        darkbg: 'var(--color-darkbg)',
        primarytext: 'var(--color-primarytext)',
        icon: 'var(--color-icon)'
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'focus-within'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within']
  },
  plugins: []
}
