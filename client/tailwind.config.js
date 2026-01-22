/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  safelist: ['bg-booking', 'bg-diary', 'bg-doctor'],
  theme: {
    extend: {
      colors: {
        'blue-100':'#e5f2ff','blue-200':'#b7dbff','blue-300':'#89c4ff','blue-400':'#5caeff',
        'blue-500':'#2e97ff','blue':'#0080ff','blue-600':'#006ad3','blue-700':'#0053a6',
        'blue-800':'#003d7a','blue-900':'#00264d'
      },
      fontFamily: { TenorSans:['Tenor Sans','sans-serif'], Rubik:['Rubik','sans-serif'] },
      backgroundImage: {
        booking:"url('../public/images/booking.jpg')",
        doctor:"url('../public/images/doctor.jpg')",
        diary:"url('../public/images/diary.jpg')"
      }
    }
  },
  plugins: []
};
