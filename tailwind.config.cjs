const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: colors.emerald[400],
				neutral: {
					light: {
						DEFAULT: colors.slate[800],
						border: colors.slate[700]
					},
					dark: {
						DEFAULT: colors.gray[900],
						border: colors.gray[800]
					}
				}
			},
			fontFamily: {
				title: ['Nunito', 'Amiko'],
				content: ['Quicksand']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
