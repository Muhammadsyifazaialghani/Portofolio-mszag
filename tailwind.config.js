/** @type {import('tailwindcss').Config} */
export default {
  // Arahkan ke semua file yang akan menggunakan kelas Tailwind
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Definisikan warna kustom sesuai dengan CSS yang ada
      colors: {
        // Warna utama
        primary: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1d4ed8',
          foreground: '#f8fafc',
        },
        secondary: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
        
        // Warna background
        background: {
          DEFAULT: '#0f0f23',
          light: '#1a1a2e',
          lighter: '#16213e',
        },
        
        // Warna surface
        surface: {
          DEFAULT: '#1e1e3f',
          light: '#252550',
        },
        
        // Warna teks
        foreground: {
          DEFAULT: '#f8fafc',
          muted: '#cbd5e1',
          subtle: '#94a3b8',
        },
        
        // Warna border
        border: {
          DEFAULT: 'rgba(148, 163, 184, 0.1)',
          light: 'rgba(148, 163, 184, 0.2)',
        },
        
        // Gradients
        gradient: {
          primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          dark: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 100%)',
        },
        
        // Shadow
        shadow: {
          glow: '0 0 20px rgba(37, 99, 235, 0.3)',
        },
      },
      
      // Extend spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      
      // Extend borderRadius
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      
      // Extend animation
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'shimmer': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease forwards',
        'slide-in-left': 'slide-in-left 0.8s ease forwards',
        'slide-in-right': 'slide-in-right 0.8s ease forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      
      // Extend backdrop blur
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}