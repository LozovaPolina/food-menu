/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'shoot-arrow': {
          '0%': {transform: 'translate(0, 0)'},
          '50%': {transform: 'translate(8px, -8px)'},
          '100%': {transform: 'translate(0, 0)'},
        },
        scroll: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
        animation: {
          'arrow-move': 'shoot-arrow 1s ease-in-out',
          'scroll-x': 'scroll 40s linear infinite',

        },
        colors: {
          'main-text': 'rgba(var(--main-text))',
          'text': 'rgba(var(--text))',
          'border': 'rgba(var(--border))',
          'card-bg': 'rgba(var(--card-bg))',
          'body-bg-color': 'rgba(var(--body-bg-color))',
          'btn-color': 'rgba(var(--btn-color))'
        },
      boxShadow: {
        'website-overlay': '0 0 7px 0 rgba(0, 0, 0, 0.3)',
        'inset-custom': 'inset 0 0 50px rgba(var(--border), 1)',
        'custom': 'rgba(100, 100, 111, 0.1) 0px 4px 24px 0px',
        'dropdown-btn-shadow': '0 8px 20px rgba(var(--border), 0.4)',

      },
      spacing: {
        '0.8fr': '0.8fr',
      },
      screens: {
        maxMd: { max: '767px' },
      },

    },
  },
  plugins: [],
}


