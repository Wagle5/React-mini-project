/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF4FF',
          100: '#D8E6FF',
          200: '#B4CDFF',
          300: '#8FB4FF',
          400: '#6A9BFF',
          500: '#4582FF',
          600: '#3563E9', // Main primary
          700: '#2C4FB6',
          800: '#213C80',
          900: '#162853',
        },
        secondary: {
          50: '#E6F9FF',
          100: '#CCF3FF',
          200: '#99E7FF',
          300: '#66DBFF',
          400: '#33CFFF',
          500: '#16B1FF', // Main secondary
          600: '#0095D9',
          700: '#007BB3',
          800: '#00628C',
          900: '#004866',
        },
        accent: {
          50: '#F5EDFF',
          100: '#EBDAFF',
          200: '#D7B5FF',
          300: '#C391FF',
          400: '#AF6CFF',
          500: '#9747FF', // Main accent
          600: '#8039D9',
          700: '#682CB3',
          800: '#50238C',
          900: '#371966',
        },
        success: {
          50: '#F0FCEB',
          100: '#E1F9D7',
          200: '#C3F3AF',
          300: '#A5EC88',
          400: '#88E660',
          500: '#56CA00', // Main success
          600: '#48AB00',
          700: '#3A8C00',
          800: '#2C6D00',
          900: '#1E4E00',
        },
        warning: {
          50: '#FFF9EB',
          100: '#FFF2D7',
          200: '#FFE5B0',
          300: '#FFD888',
          400: '#FFCC61',
          500: '#FFB400', // Main warning
          600: '#D99700',
          700: '#B37A00',
          800: '#8C5E00',
          900: '#664200',
        },
        error: {
          50: '#FFEEEE',
          100: '#FFDDDD',
          200: '#FFBBBB',
          300: '#FF9999',
          400: '#FF7777',
          500: '#FF4C51', // Main error
          600: '#D93F43',
          700: '#B33336',
          800: '#8C2728',
          900: '#661B1D',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      },
    },
  },
  plugins: [],
}