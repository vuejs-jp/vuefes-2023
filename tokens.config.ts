import { defineTheme } from 'pinceau'

// https://pinceau.dev/configuration/tokens-config
export default defineTheme({
  media: {
    mobile: '(max-width: 771px)',
    tablet: '(max-width: 981px)',
    desktop: '(max-width: 1920px)',
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
    sangosyo: '#F17C67',
    gradient: {
      vgreen: 'linear-gradient(180deg, #42B983 0%, #35495E 100%)',
      blue: 'linear-gradient(180deg, #3178C6 0%, #33A6B8 100%)',
      lightblue: 'linear-gradient(180deg, #33A6B8 0%, #74DFAF 100%)',
      red: 'linear-gradient(180deg, #F17C67 40.63%, #FFC408 100%)',
      yellow: 'linear-gradient(180deg, #FFC408 0%, #90B44B 100%)',
      lightgreen: 'linear-gradient(180deg, #90B44B 0%, #42B983 100%)',
    },
    sponsor: {
      platinum: '#93AF5E',
      gold: '#FFC408',
      silver: '#ADBFD4',
      bronze: '#F17C67',
      options: '#546F89',
    },
    timetable: {
      trackA: '#33A6B8',
      trackB: '#F17C67',
      trackC: '#3178C6',
      trackD: '#42B983',
      close: {
        title: '#8c8c8c',
        background: '#CBCBCB',
      },
    },
  },
  fontSize: {
    base: '0.0625rem',
  },
  space: {
    8: '8px',
    header: '88px',
    bodybottom: '88px',
  },
  zindex: {
    dialog: '9000',
    menu: '8000',
    alert: '10',
  },
})
