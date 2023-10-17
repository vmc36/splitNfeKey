/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        bgColor: '#FFFBFA',
        mainTitle: '#524C4C',
        strokeColor: 'rgba(82, 76, 76, 0.38)',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', ' sans-serif'],
      },
    },
  },
  plugins: [],
};
