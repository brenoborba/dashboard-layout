import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      inter: 'var(--font-inter)',
      poppins: 'var(--font-poppins)',
    },
    extend: {},
  },
  plugins: [],
}
export default config
