

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
        'icoInput': '#9ca3af',
        'corFocus': '#3b82f6',
        'letra': '#dbefc8',
        'letra3': '#369927',
        'letra2': '#9acd32',
        'fundo': '#fff',
        'fundoCard': 'rgba(167, 234, 35, .412)',
        'fundoCard2': '#acff2f27',
        'corSombra': '#1240229c',
        'sombra': '#124022cc',
        'corLetra': '#124020',
        'corEspecial': '#aaff00',
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
