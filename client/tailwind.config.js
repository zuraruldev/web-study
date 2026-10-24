/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#090d16',
          subtle: '#0e1422',
          surface: '#12192b',
          elevated: '#161f33'
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          highlight: 'rgba(255, 255, 255, 0.18)'
        },
        alpro: {
          DEFAULT: '#10b981',
          bg: 'rgba(16, 185, 129, 0.1)',
          border: 'rgba(16, 185, 129, 0.25)',
          text: '#34d399'
        },
        basdat: {
          DEFAULT: '#06b6d4',
          bg: 'rgba(6, 182, 212, 0.1)',
          border: 'rgba(6, 182, 212, 0.25)',
          text: '#22d3ee'
        },
        psi: {
          DEFAULT: '#8b5cf6',
          bg: 'rgba(139, 92, 246, 0.1)',
          border: 'rgba(139, 92, 246, 0.25)',
          text: '#a78bfa'
        },
        arsikom: {
          DEFAULT: '#f59e0b',
          bg: 'rgba(245, 158, 11, 0.1)',
          border: 'rgba(245, 158, 11, 0.25)',
          text: '#fbbf24'
        },
        ketkom: {
          DEFAULT: '#14b8a6',
          bg: 'rgba(20, 184, 166, 0.1)',
          border: 'rgba(20, 184, 166, 0.25)',
          text: '#2dd4bf'
        },
        bindo: {
          DEFAULT: '#f43f5e',
          bg: 'rgba(244, 63, 94, 0.1)',
          border: 'rgba(244, 63, 94, 0.25)',
          text: '#fb7185'
        },
        pancasila: {
          DEFAULT: '#ef4444',
          bg: 'rgba(239, 68, 68, 0.1)',
          border: 'rgba(239, 68, 68, 0.25)',
          text: '#f87171'
        },
        matdas: {
          DEFAULT: '#6366f1',
          bg: 'rgba(99, 102, 241, 0.1)',
          border: 'rgba(99, 102, 241, 0.25)',
          text: '#818cf8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace']
      }
    },
  },
  plugins: [],
}
