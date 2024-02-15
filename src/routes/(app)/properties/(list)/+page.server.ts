import { Adverts } from '$lib/adverts/Adverts';
import { AdvertsSearch } from '$lib/adverts/search/AdvertsSearch';
import { error } from '@sveltejs/kit';

export const load = async ({ url }) => {
	const advertsSearch = AdvertsSearch.fromUrlSearchParams(url.searchParams);
	const after = url.searchParams.get('after');
	const response = await Adverts.all(24, after, advertsSearch);

	if (0 === response.data.adverts.edges.length) {
		throw error(404);
	}

	return {
		advertsSearch,
		after,
		response
	};
};
