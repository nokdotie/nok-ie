import { redirect } from '@sveltejs/kit';
import PropertiesRoute from './(app)/properties/(list)/Route';

export function load() {
	throw redirect(308, PropertiesRoute());
}
