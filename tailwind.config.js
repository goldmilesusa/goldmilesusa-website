module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#F0C65A',
          500: '#D7A12C',
          600: '#B78317'
        },
        ink: {
          950: '#050505',
          900: '#0A0A0A',
          800: '#111111'
        }
      },
      boxShadow: {
        gold: '0 18px 70px rgba(215,161,44,.18)'
      }
    }
  },
  plugins: []
};
