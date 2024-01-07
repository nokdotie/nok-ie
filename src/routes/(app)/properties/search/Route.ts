export default (url: null | URL) => {
	const prefix = '/properties/search';

	if (null === url || '' === url.search) return prefix;
	return `${prefix}${url.search}`;
};
