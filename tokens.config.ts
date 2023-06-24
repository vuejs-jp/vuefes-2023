import { defineTheme } from 'pinceau'

// https://pinceau.dev/configuration/tokens-config
export default defineTheme({
  media: {
    mobile: '(min-width: 320px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1280px)',
  },
  color: {
    white: '#FFF',
    vue: {
      blue: '#35495E',
      green: '#42B983',
    },
    typescript: {
      blue: '#3178C6',
    },
    sponsor: {
      platinum: '#93AF5E',
      gold: '#FFC408',
      silver: '#ADBFD4',
      bronze: '#F17C67',
    },
  },
  fontSize: {
    base: '0.0625rem',
  },
})
