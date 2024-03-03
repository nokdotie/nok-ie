import { redirect } from '@sveltejs/kit';
import PropertiesListRoute from './(app)/properties/(list)/Route';

export function load() {
	redirect(308, PropertiesListRoute(null, null));
}
