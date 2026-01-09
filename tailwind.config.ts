import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0E2034',
        'primary-light': '#1a3a5c',
        secondary: '#C4A35A',
        accent: '#8B1538',
        'accent-dark': '#6d1029',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Open Sans', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
