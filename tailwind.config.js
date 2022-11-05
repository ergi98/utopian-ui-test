/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				SansPro: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
				Inter: ["Inter", ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				go: {
					"0%, 100%": { transform: "translateX(-2px)" },
					"50%": { transform: "translateX(2px)" },
				},
			},
			animation: {
				go: "go 1.15s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
