import { AdvertsSearch } from '$lib/adverts/search/AdvertsSearch';

export default (advertsSearch: null | AdvertsSearch, after: null | string) => {
	const prefix = '/properties';

	if (null === advertsSearch && null === after) return prefix;
	if (null === advertsSearch) return `${prefix}?after=${after}`;
	if (null === after) return `${prefix}?${AdvertsSearch.toUrlSearchParams(advertsSearch)}`;

	return `${prefix}?${AdvertsSearch.toUrlSearchParams(advertsSearch).toString()}&after=${after}`;
};
