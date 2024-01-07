export default (url: null | URL) => {
	const prefix = '/properties/map';

	if (null === url || '' === url.search) return prefix;
	return `${prefix}${url.search}`;
};
