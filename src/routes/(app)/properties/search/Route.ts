import { AdvertsSearch } from '../../../../lib/adverts/search/AdvertsSearch';

export default (advertsSearch: null | AdvertsSearch) => {
	const prefix = '/properties/search';

	if (null === advertsSearch) return prefix;
	return `${prefix}?${AdvertsSearch.toUrlSearchParams(advertsSearch).toString()}`;
};
