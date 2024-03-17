/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				britishRacingGreen: {
					DEFAULT: '#034732',
					100: '#010f0a',
					200: '#011d14',
					300: '#022c1f',
					400: '#023b29',
					500: '#034732',
					600: '#079d6d',
					700: '#0af0a7',
					800: '#59f8c6',
					900: '#acfce2',
				},
				seaGreen: {
					DEFAULT: '#008148',
					100: '#001a0e',
					200: '#00331c',
					300: '#004d2a',
					400: '#006638',
					500: '#008148',
					600: '#00cc70',
					700: '#1aff98',
					800: '#66ffba',
					900: '#b3ffdd',
				},
				seaSalt: {
					DEFAULT: '#fafafa',
					100: '#323232',
					200: '#646464',
					300: '#969696',
					400: '#c8c8c8',
					500: '#fafafa',
					600: '#fbfbfb',
					700: '#fcfcfc',
					800: '#fdfdfd',
					900: '#fefefe',
				},
				white: {
					DEFAULT: '#ffffff',
					100: '#333333',
					200: '#666666',
					300: '#999999',
					400: '#cccccc',
					500: '#ffffff',
					600: '#ffffff',
					700: '#ffffff',
					800: '#ffffff',
					900: '#ffffff',
				},
			},
		},
	},
	plugins: [],
};
