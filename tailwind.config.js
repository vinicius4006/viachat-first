module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'green-logo': '#00d5bb',
        'blue-logo': '#00a6dc',
        'transition-gb': '#00cbc2',
        'secretary-color': '#5b9eae',
      },
      lineHeight: {
        '64': '4em',

      },
      backgroundImage: {
        'contactus': "url('/public/contactus.svg')",
      },
    },
    fontFamily: {
Poppins: ['Poppins, sans-serif'],

    },
    container: {
center:true,
padding:'1rem',
screens: {
lg: '1124px',
xl: '1124px',
'2xl': '1124px',
},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
