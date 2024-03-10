module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#D8D4D5',
          'main-dark-bg': '#6E7271',
          'secondary-dark-bg': '#384D48',
          'light-gray': '#E2E2E2',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
          'wed-icon-font': '#605a4f',
          'sidebar-color': '#8c867b',
          'light-blue': '#A9C2F0'
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
          'light-blue': '#A9C2F0',
          'logo-font': '#605a4f'
        },
        colors: {
          'wed-icon-font': '#605a4f'
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
        },
      },
    },
    plugins: [],
  };