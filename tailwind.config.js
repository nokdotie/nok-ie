/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			primary: '#FE6100',
			neutral: {
				800: '#222223',
				700: '#616066',
				600: '#8D8D91',
				500: '#B7B7B7',
				400: '#E9E9E9',
				300: '#F6F6F6',
				200: '#F9F9F9',
				100: '#FFFFFF'
			}
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '992px'
		},
		fontFamily: {
			sans: ['Thicccboi', 'sans-serif']
		},
		fontSize: {
			'heading-1': ['48px', { lineHeight: '1.250em' }],
			'heading-2': ['32px', { lineHeight: '1.375em' }],
			'heading-3': ['22px', { lineHeight: '1.364em' }],
			'heading-4': ['20px', { lineHeight: '1.400em' }],
			'heading-5': ['18px', { lineHeight: '1.333em' }],
			'heading-6': ['16px', { lineHeight: '1.375em' }],
			'paragraph-1': ['24px', { lineHeight: '1.083em' }],
			'paragraph-2': ['20px', { lineHeight: '1.100em' }],
			'paragraph-3': ['18px', { lineHeight: '1.111em' }],
			'paragraph-4': ['16px', { lineHeight: '1.125em' }]
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
