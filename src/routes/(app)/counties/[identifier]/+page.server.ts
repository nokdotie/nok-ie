import CountyPropertiesRoute from '$routes/(app)/counties/[identifier]/properties/Route';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params, url }) => {
	redirect(301, CountyPropertiesRoute(params.identifier, url.searchParams.get('after')));
};
