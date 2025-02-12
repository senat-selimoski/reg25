import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        gray: "var(--gray)",
        error: "var(--error)",
        disabled: "var(--disabled)",
        dark: "var(--dark)"
      },
      fontFamily: {
        heading: ['Geist', 'sans-serif'],
        body: ['Geist', 'sans-serif'],
        mono: ['GeistMonoVF', 'monospace'],
      },
      fontSize: {
        'heading-sm': '1.125rem',
      },
      lineHeight: {
        'heading-sm': '1.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
