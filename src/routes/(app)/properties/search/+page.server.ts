import { AdvertsSearch } from '$lib/adverts/search/AdvertsSearch';

export const load = async ({ url }) => {
	const advertsSearch = AdvertsSearch.fromUrlSearchParams(url.searchParams);

	return {
		advertsSearch
	};
};
