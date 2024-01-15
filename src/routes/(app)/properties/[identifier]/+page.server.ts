import { Adverts } from '$lib/adverts/Adverts';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const response = await Adverts.one(params.identifier);

	if (null === response.data.advert) {
		throw error(404);
	}

	return {
		response
	};
};
