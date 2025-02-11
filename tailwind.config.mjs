/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "rgb(var(--color-bg))",
        "box-bg": "rgb(var(--color-box))",
        "box-shadow": "rgb(var(--box-sd))",
        "box-border": "rgb(var(--box-border))",
        primary: "#8B4513", // Changed from blue to our wood dark brown
        "heading-1": "rgb(var(--heading-1))",
        "heading-2": "rgb(var(--heading-2))",
        "heading-3": "rgb(var(--heading-3))",
        // Adding our wood-themed colors
        wood: {
          dark: '#8B4513',    // Dark brown
          light: '#DEB887',   // Light walnut
          cream: '#FFFAF0',   // Cream
        },
        accent: {
          green: '#2F4F4F',   // Forest green
          terra: '#CD5C5C',   // Terracotta
        }
      },
      screens: {
        midmd: "880px",
      },
      gradients: {
        'wood': 'linear-gradient(45deg, #8B4513, #DEB887)',
      }
    },
  },
  plugins: [],
};