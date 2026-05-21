import type { Config } from 'tailwindcss'

// Tailwind-konfiguration för Jiyan — speglar CSS-variablerna från index.html
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Jiyan-designsystem (från index.html :root)
        navy:    '#041f4a',
        blue:    '#005689',
        'blue-lt': '#0084c6',
        red:     '#c70000',
        yellow:  '#ffbb00',
        off:     '#f6f6f6',
        border:  '#dcdcdc',
        text:    '#121212',
        muted:   '#767676',
      },
      fontFamily: {
        // Arabiska/kurdiska typsnitt som i originalet
        serif: ['Noto Naskh Arabic', 'Georgia', 'serif'],
        sans:  ['Noto Sans Arabic', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'jiyan': '1300px',
      },
    },
  },
  plugins: [],
}

export default config
