export default (url: URL) => {
	const prefix = '/properties/search';

	if (url.search == '') return prefix;
	return `${prefix}${url.search}`;
};
