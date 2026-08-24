/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F6F2EA', // Primary warm ivory / cream
          200: '#EFE9DE',
          300: '#DDD5C8', // Supporting light beige
          400: '#C9BEAD',
        },
        espresso: {
          900: '#181614', // Charcoal
          800: '#231B15',
          700: '#2B211B', // Secondary espresso brown
          600: '#3D3129',
          500: '#544439',
        },
        sage: {
          50: '#F4F6F2',
          100: '#E5E9E0',
          200: '#CAD4C1',
          500: '#66705A', // Accent muted olive / sage green
          600: '#545D4A',
          700: '#434B3B',
        },
        charcoal: '#181614',
        'warm-grey': '#7A7571',
        'light-beige': '#DDD5C8',
        'border-subtle': '#E5DFD5',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'tightest': '-0.035em',
        'widest-editorial': '0.18em',
      },
      lineHeight: {
        'extra-tight': '1.08',
      }
    },
  },
  plugins: [],
}
