import PropertiesRoute from '$routes/(app)/properties/(list)/Route';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	redirect(301, PropertiesRoute(null, null));
};
