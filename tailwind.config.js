/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '479px',
			md: '768px',
			lg: '991px'
		},
		colors: {
			primary: {
				DEFAULT: '#FF9900'
			},
			neutral: {
				800: '#222223',
				700: '#616066',
				600: '#8D8D91',
				500: '#B7B7B7',
				400: '#E9E9E9',
				300: '#F6F6F6',
				200: '#F9F9F9',
				100: '#FFFFFF'
			},
			green: {
				100: '#def2e6',
				200: '#7fdca4',
				300: '#05c168',
				400: '#11845b'
			},
			red: {
				100: '#ffeff0',
				200: '#ffbec2',
				300: '#ff5a65',
				400: '#dc2b2b'
			}
		},
		fontFamily: {
			sans: ['Thicccboi', 'sans-serif']
		},
		boxShadow: {
			100: '0 0 0 0 rgba(20,20,43,0.07)',
			200: '0 1px 6px 0 rgba(20,20,43,0.09)',
			300: '0 2px 12px 0 rgba(20,20,43,0.07)',
			400: '0 3px 20px 0 rgba(8,15,52,0.06)',
			500: '0 10px 30px 0 rgba(8,15,52,0.06)'
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
