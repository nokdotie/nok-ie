import { SearchFilters } from '../search/SearchFilters';

export default (searchFilter: null | SearchFilters, after: null | string) => {
	const prefix = '/properties';

	if (null === searchFilter && null === after) return prefix;
	if (null === searchFilter) return `${prefix}?after=${after}`;
	if (null === after) return `${prefix}?${SearchFilters.toUrlSearchParams(searchFilter)}`;

	return `${prefix}?${SearchFilters.toUrlSearchParams(searchFilter).toString()}&after=${after}`;
};
