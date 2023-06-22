/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
        "background": {
            DEFAULT: "#f7f7f7",
            second: "#eeeeee",
            third: "#2d2e49"
        },
        "primary": {
            DEFAULT: "#691469",
            second: "#Eadbed",
        },
        "accent": {
            DEFAULT: "#FFCC36"
        },
        "txt": {
            light: "#ffffff",
            DEFAULT: "#070b04",
        }
    }
  },
  plugins: [],
}
