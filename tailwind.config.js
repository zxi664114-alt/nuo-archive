/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 深空黑系 —— 背景层级
        void: '#050505',
        charcoal: '#0d0d0f',
        ash: '#15151a',
        smoke: '#1d1d24',
        // 朱砂红 —— 核心强调色
        cinnabar: {
          DEFAULT: '#c0322a',
          deep: '#7d1f1a',
          glow: '#e04a3f',
        },
        // 矿物白
        mineral: {
          DEFAULT: '#e8e2d6',
          dim: '#a39e92',
        },
        // 辅助：吉神金 / 凶神青
        auspicious: '#c9a24b',
        fierce: '#3a6b6b',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Songti SC"', 'serif'],
        sans: ['"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
