export function load({ url }) {
	const form = { q: url.searchParams.get('q') };

	return {
		form: form
	};
}
