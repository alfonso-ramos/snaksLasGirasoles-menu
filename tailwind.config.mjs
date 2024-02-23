/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: ['"Poppins"', ...defaultTheme.fontFamily.sans]
		},
		colors:{
			'primary': '#EEC643',
			'secondary': '#011638',
			'night': '#141414',
			'white': '#fff',
			'zafre': '#0D21A1',
			'alabaster': '#F5F2E8',
		},
		fontSize:{
			'base': ['1rem', {
				lineHeight: '150%',
			}],
			// Headers
			'lg': 
			['1.5rem', {
				lineHeight: '110%'
			}],
			'xl': 
			['3rem', {
				lineHeight: '110%'
			}],
			'2xl': 
			['4rem', {
				lineHeight: '110%'
			}],
			
		}
	},
	plugins: [],
}
