/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-primary': '#847ec2',
        primary: '#6B63C7',
        'dark-primary': '#4e44bd',
        grey: '#E5E5E5',
        'dark-grey': '#656565',
        'darkest-grey': '#474747',
        'light-grey': '#E9E9E9',
      },
      keyframes: {
        blinkingBg: {
          '0%, 100%': { backgroundColor: '#ededf0' },
          '50%': { backgroundColor: '#ffffff' },
        },
        zoom: {
          '0%': { transform: 'scale(0.1) rotate(0deg)' },
          '50%': { transform: 'scale(1) rotate(360deg)' },
          '100%': { transform: 'scale(0.1) rotate(0deg)' },
        },
      },
      animation: {
        blinkingBg: 'blinkingBg 1s ease-in-out infinite',
        zoom: 'zoom 3s ease-in-out infinite',
      },
      spacing: {
        '22px': '22px',
      },
    },
  },
  plugins: [],
}