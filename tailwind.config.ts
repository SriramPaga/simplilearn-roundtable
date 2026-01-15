import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0A1E42',
          orange: '#FF8C00',
          cyan: '#00D9FF',
        },
      },
      fontFamily: {
        // sans: ['Inter', 'system-ui', 'sans-serif'],
         satoshi: ['var(--font-satoshi)'],
      },
    },
  },
  plugins: [],
};
export default config;
