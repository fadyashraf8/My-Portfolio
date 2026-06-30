/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          bg: {
            light: '#F6F3ED',
            dark: '#0C0D0E',
          },
          text: {
            light: '#131419',
            dark: '#F1EFEB',
            mutedLight: '#606470',
            mutedDark: '#A0A5B5',
          },
          card: {
            light: '#EAE5DC',
            dark: '#1C1E20',
          },
          border: {
            light: '#D3CDC3',
            dark: '#2A2C30',
          },
          accent: {
            light: '#E54B27',
            dark: '#FF5B37',
            hoverLight: '#C93B1B',
            hoverDark: '#E04A27',
          }
        }
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
