module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'yellow-background': '#FEF48E',
      'red-headbar': '#90E39A',
      'green-body': '#EDD9A3',
      'post': '#FBE7C6'
     }),
     textColor: theme => ({
       ...theme('colors'),
       'satin-sheen-gold': '#c59849',
       'sunshine-yellow': "#DDF093",
       'green-body': '#EDD9A3'
     }),
     height:{
       'post': "150px"
     },
     
    screens: {
      'mobile': '375px',
      // => @media (min-width: 375px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... } 
  
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
