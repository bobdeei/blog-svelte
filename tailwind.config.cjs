/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				title: ['Nunito', 'Amiko'],
				content: ['Quicksand']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
