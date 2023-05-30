export function load() {
	return {
		properties: [...Array(18)].map(() => ({
			id: `property-1`,
			label: 'Home in Downtown, Los Angeles',
			address: '8706 Herrick Ave, Los Angeles',
			image: {
				label: 'Image of a house',
				url: 'https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template.jpg'
			},
			price: { inEur: 435000 },
			size: { inSqtMtr: 2508, inSqtFt: 27000 },
			bedroomsCount: 3,
			bathroomsCount: 2
		}))
	};
}
