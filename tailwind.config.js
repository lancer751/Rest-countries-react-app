/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
				"Dark-Blue": "hsl(209,23%,22%)",
				"Very-Dark-Blue-MD": "hsl(207, 26%, 17%)",
				"Very-Dark-Blue-ML": "hsl(200, 15%, 8%)",
				"Dark-Gray": "hsl(0, 0%, 52%)",
				"Very-Light-Gray": "hsl(0, 0%, 98%)",
			},
    },
  },
  plugins: [],
}

