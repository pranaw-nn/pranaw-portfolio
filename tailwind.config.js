/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  safelist: [
    "animate-[spin_18s_linear_infinite]",
    "animate-[spin_28s_linear_infinite_reverse]",
    "border-blue-500/10",
    "border-cyan-500/8",
    "hover:border-blue-500/30",
    "hover:border-cyan-500/30",
    "hover:border-green-500/30",
    "hover:border-indigo-500/30",
  ],

  theme: {
    extend: {},
  },

  plugins: [],
}