/** @type {import('tailwindcss').Config} */
export default {
  // Arahkan ke semua file yang akan menggunakan kelas Tailwind
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Di sini kita definisikan warna kustom dari CSS Anda
      colors: {
        'primary-light': '#a3aaff',
        'secondary-light': '#ff8aa3',
        background: '#121212',
        foreground: '#f5f5f7',
        muted: {
          DEFAULT: '#2e2e3e',
          foreground: '#a0a0b0',
        },
        primary: {
          DEFAULT: '#646cff',
          foreground: '#ffffff',
        },
        border: '#444466',
      },
    },
  },
  plugins: [],
}