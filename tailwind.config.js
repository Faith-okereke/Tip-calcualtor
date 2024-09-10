// @type {import('tailwindcss').Config}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Correct glob pattern
  ],
  theme: {
    extend: {
      colors: {
        'Strongcyan': 'hsl(172, 67%, 45%)',
        'Verydarkcyan': 'hsl(183, 100%, 15%)',
        'Darkgrayishcyan': 'hsl(186, 14%, 43%)',
        'Grayishcyan': 'hsl(184, 14%, 56%)',
        'Lightgrayishcyan': 'hsl(185, 41%, 84%)',
        'Verylightgrayishcyan': 'hsl(189, 41%, 97%)',
        'White': 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}
