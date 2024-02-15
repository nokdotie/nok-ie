import { redirect } from '@sveltejs/kit';
import PropertiesListRoute from './(app)/properties/(list)/Route';

export function load() {
	throw redirect(308, PropertiesListRoute(null, null));
}
