/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cozy: {
          cream: '#FFF8F0',
          warm: '#FFE5D9',
          brown: '#8B5E3C',
          rust: '#C65D21',
          sage: '#A8B38D',
          terracotta: '#D67D3E',
          amber: '#FFB347',
          latte: '#E6D5B8',
        },
        primary: {
          50: '#FFF5EB',
          100: '#FFE4B5',
          200: '#FFD39B',
          300: '#FFB366',
          400: '#FFA07A',
          500: '#FF8C42',
          600: '#FF7F50',
          700: '#FF6B3D',
          800: '#FF5C2A',
          900: '#FF4D17',
        },
      },
      fontFamily: {
        cozy: ['Quicksand', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'cozy': '0 4px 6px -1px rgba(139, 94, 60, 0.1), 0 2px 4px -1px rgba(139, 94, 60, 0.06)',
      },
    },
  },
  plugins: [],
} 