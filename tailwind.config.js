/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '319px',
        'sm': '374px',
        'md': '424px',
        'lg': '660px',
        'xl': '768px',
        '2xl': '991px',
        '3xl': '1024px',
        '4xl': '1280px',
        '5xl': '1536px',
      },
      fontFamily: {
        'cursive': ['Tangerine'],
      }
    },
  },
  plugins: [],
});

