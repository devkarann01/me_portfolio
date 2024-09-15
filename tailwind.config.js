/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '100% 50%',
      },
      translate: {
        '85p': '85%',
        '60p': '60%',
      },
     
      extend: {
        scrollBehavior: ['responsive'],
      },
      
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7%)' }, 
        },
      },
      animation: {
        'bounce-custom': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
}