import { Adverts } from '$lib/adverts/Adverts';
import { Counties } from '$lib/adverts/counties/Counties';
import { AdvertsSearch } from '$lib/adverts/search/AdvertsSearch';
import PropertiesListRoute from '$routes/(app)/properties/(list)/Route';
import { error, redirect } from '@sveltejs/kit';

export const load = async ({ params, url }) => {
	const county = Counties.one(params.identifier);
	if (null === county || undefined === county) {
		redirect(308, PropertiesListRoute(null, null));
	}

	const advertsSearch = { ...AdvertsSearch.empty, ...county.advertsSearch };
	const after = url.searchParams.get('after');
	const response = await Adverts.all(24, after, advertsSearch);

	if (0 === response.data.adverts.edges.length) {
		error(404);
	}

	return {
		county,
		advertsSearch,
		after,
		response
	};
};
