/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class' || '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        light: {
          primary: 'hsl(var(--color-light-primary) / <alpha-value>)',
          secondary: 'hsl(var(--color-light-secondary) / <alpha-value>)',
        },
        dark: {
          primary: 'hsl(var(--color-dark-primary) / <alpha-value>)',
          secondary: 'hsl(var(--color-dark-secondary) / <alpha-value>)',
        },
        neon: {
          primary: 'hsl(var(--color-neon-primary) / <alpha-value>)',
          secondary: 'hsl(var(--color-neon-secondary) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
}

