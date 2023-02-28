/** @type {import('tailwindcss').Config} */
const fallbackFonts = (font) => [
   font,
   'system-ui',
   '-apple-system',
   'BlinkMacSystemFont',
   'Segoe UI',
   'Roboto',
   'Helvetica Neue',
   'Arial',
   'Noto Sans',
   'sans-serif',
   'Apple Color Emoji',
   'Segoe UI Emoji',
   'Segoe UI Symbol',
   'Noto Color Emoji',
];

module.exports = {
   mode: 'jit',
   content: ['./src/**/*.{ts,tsx}'],
   theme: {
      fontFamily: {
         inter: fallbackFonts('Inter var'),
         sohne: fallbackFonts('Sohne'),
      },
      extend: {
         backgroundImage: {
            skeleGradient: `
               radial-gradient(at 7% 0%, rgba(255, 153, 218, 0.4) 0px, transparent 30%), 
               radial-gradient(at 78% 4%, rgba(255, 142, 157, 0.55) 0px, transparent 35%), 
               radial-gradient(at 98% 95%, rgba(166, 115, 255, 0.6) 0px, transparent 40%), 
               radial-gradient(at 3% 82%, rgba(255, 171, 159, 0.45) 0px, transparent 45%);
            `,
         },
         keyframes: {
            float: {
               '0%, 100%': {
                  transform: 'translateY(0%)',
                  rotate: '15deg',
               },
               '25%': {
                  transform: 'translateY(-25%)',
                  rotate: '10deg',
               },
               '50%': {
                  transform: 'translateY(-0%)',
                  rotate: '5deg',
               },
               '75%': {
                  transform: 'translateY(-25%)',
                  rotate: '10deg',
               },
            },
         },
         animation: {
            float: 'float 8s ease-in-out infinite',
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [require('@tailwindcss/typography')],
};
