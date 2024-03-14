import { SearchFilters } from '../search/SearchFilters';

export default (searchFilter: null | SearchFilters) => {
	const prefix = '/properties/map';

	if (null === searchFilter) return prefix;
	return `${prefix}?${SearchFilters.toUrlSearchParams(searchFilter).toString()}`;
};
