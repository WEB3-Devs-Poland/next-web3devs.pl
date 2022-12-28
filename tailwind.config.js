module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: '#00000000',

      grayScale: {
        grey: '#101010',
        grey1: '#56575D',
        grey2: '#74767B',
        grey3: '#C9CACD',
        grey4: '#F0F0F2',
      },

      brand: {
        purple1: '#6802B1',
        purple2: '#9200FF',
        purple3: '#B754FF',
        gradient1: 'linear-gradient(45deg, #9200FF 10%, #B754FF 85%)',
        gradient2: 'linear-gradient(45deg, #B754FF 10%, #9200FF 85%)',
      },
    },

    extend: {
      dropShadow: {
        card: '0px 0px 16px #9404FC',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
