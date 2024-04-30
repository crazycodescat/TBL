/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '300px',
      md: '700px',
      lg: '1200px',
      xl: '1400px',
    },
    colors: {
      white: '#ffffff',
      black: '#000',
      tree: '#454545',
      tree_a0: '#E2E8F0',
      tree_a1: '#E8E8E8',
      Rating: '#37803A',
      tree_a2: '#616161',
      priceOFF: '#A7A7A7',
      inputBar: '#F3F3F3',
      FContentCColor: '#0E210F',
      ProfileTextColor: '#026406',
      ActiveTextColor: '#C8DAC8',
      HoverMenuColor: '#F2FFF3',
      searchBar: '#F3F3F3',
      baseBgColor: '#F3F3F3',
      yellow: '#ebc95b',
      red: '#FF0000',
      opaqueGray: 'rgba(73, 74, 73, 0.2)',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widestt: '.25em',
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        1: 'auto',
        2: 'auto, auto',
        3: 'auto auto auto',
        '3-1fr': '1fr 1fr 1fr',
        4: 'auto auto auto auto',
      },
    },
  },
  plugins: [],
};
