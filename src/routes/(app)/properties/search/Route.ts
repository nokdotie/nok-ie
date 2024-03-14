import { SearchFilters } from './SearchFilters';

export default (searchFilter: null | SearchFilters) => {
	const prefix = '/properties/search';

	if (null === searchFilter) return prefix;
	return `${prefix}?${SearchFilters.toUrlSearchParams(searchFilter).toString()}`;
};
