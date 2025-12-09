/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef5f3',
          100: '#fde8e4',
          200: '#fbd5cd',
          300: '#f8b5a8',
          400: '#f28b76',
          500: '#ed6e47', // UM6P Light Orange
          600: '#d7492a', // UM6P Primary Orange
          700: '#b63820',
          800: '#952f1d',
          900: '#7b2a1e',
          950: '#43130c',
        },
        accent: {
          50: '#fef5f3',
          100: '#fde8e4',
          200: '#fbd5cd',
          300: '#f8b5a8',
          400: '#f28b76',
          500: '#ed6e47', // UM6P Light Orange
          600: '#d7492a', // UM6P Primary Orange
          700: '#b63820',
          800: '#952f1d',
          900: '#7b2a1e',
        },
        um6p: {
          // Primary Palette
          orange: '#d7492a',         // UM6P Primary Orange - Pantone 173
          'light-orange': '#ed6e47', // UM6P Light Orange - Pantone 1645
          charcoal: '#3b3b3c',       // UM6P Charcoal Black - Pantone 440
          white: '#ffffff',          // UM6P White
          
          // Science & Technology Pole
          'science-dark': '#1125A9',  // Dark Blue - Pantone 2728 C
          'science-light': '#5987DA', // Light Blue - Pantone 2727 C
          'science-green': '#6ACCB2', // Light Green - Pantone 3248 C
          
          // Health Pole
          'health-dark': '#00594C',   // Dark Green - Pantone 7716 C
          
          // Business & Management Pole
          'business-dark': '#EAA902',  // Dark Yellow - Pantone 1235 C
          'business-light': '#FFD040', // Light Yellow - Pantone 7404 C
          'business-purple': '#D65C72', // Light Purple - Pantone 701 C
          
          // Humanities, Economics & Social Sciences Pole
          'humanities-dark': '#9F2842', // Dark Purple - Pantone 207 C
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
