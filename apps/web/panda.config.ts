import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],

  preflight: true,
  jsxFramework: 'react',

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    keyframes: {
      spin: {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },
    },
    textStyles: {
      h1: {
        value: {
          fontSize: '4xl',
          fontWeight: 'bold',
          lineHeight: '1.2',
        },
      },
      h2: {
        value: {
          fontSize: '3xl',
          fontWeight: 'bold',
          lineHeight: '1.2',
        },
      },
      h3: {
        value: {
          fontSize: '2xl',
          fontWeight: 'bold',
          lineHeight: '1.2',
        },
      },
      h4: {
        value: {
          fontSize: 'xl',
          fontWeight: 'bold',
          lineHeight: '1.2',
        },
      },
      h5: {
        value: {
          fontSize: 'lg',
          fontWeight: 'bold',
          lineHeight: '1.2',
        },
      },
      h6: {
        value: {
          fontSize: 'md',
          fontWeight: 'bold',
          lineHeight: '1.2',
        },
      },
      body: {
        value: {
          fontSize: 'md',
          fontWeight: 'normal',
          lineHeight: '1.5',
        },
      },
      button: {
        value: {
          fontSize: 'md',
          fontWeight: 'medium',
          lineHeight: '1.2',
        },
      },
      caption: {
        value: {
          fontSize: 'sm',
          fontWeight: 'normal',
          lineHeight: '1.2',
        },
      },
      Display: {
        value: {
          fontSize: '70px',
          fontWeight: 500,
          lineHeight: '80px',
        },
      },
      subtitle1: {
        value: {
          fontSize: '28px',
          fontWeight: 600,
          lineHeight: '32px',
        },
      },
      subtitle3: {
        value: {
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '22px',
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
