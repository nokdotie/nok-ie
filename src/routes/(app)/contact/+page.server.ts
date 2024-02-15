import { Status } from '$lib/utils/Status';

const staticformsUrl = 'https://api.staticforms.xyz/submit';
const staticformAccessKey = '9ea74cf6-e1b7-4b1d-9612-48c6b587a000';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		formData.set('accessKey', staticformAccessKey);
		formData.set('subject', 'Nok.ie - Contact');

		const formDataObject = Object.fromEntries(formData.entries());
		const formDataJsonString = JSON.stringify(formDataObject);

		const options = {
			method: 'POST',
			body: formDataJsonString,
			headers: { 'content-type': 'application/json' }
		};

		return fetch(staticformsUrl, options)
			.then(() => ({ status: Status.Success }))
			.catch(() => ({ status: Status.Failure }));
	}
};
