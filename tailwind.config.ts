

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'principal': '#9acd32',
        'letra': '#dbefc8',
        'corSombra': '#1240229c',
        'corLetra': '#124020',
        'corEspecial': '#aaff00',
        '': '',
        '': '',
        '': '',
      },
      fontFamily: {
        fontPrincipal: ['Caveat','cursive'],
        segundaFont: ['fantasy'],
        terceiraFont: ['Arial','Helvetica', 'sans-serif'],

      },
    },
  },
  plugins: [],
};
export default config;
