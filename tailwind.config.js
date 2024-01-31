/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      lit: '401px',
      min: '513px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      max_2xl: { max: '1552px' },
      max_2big: { max: '1400px' },
      max_big: { max: '1340px' },
      max_xl: { max: '1279px' },
      max_lg: { max: '1029px' },
      max_md: { max: '767px' },
      max_sm: { max: '639px' },
      max_min: { max: '512px' },
      max_lit: { max: '400px' }
    },
    extend: {}
  },
  plugins: []
}
