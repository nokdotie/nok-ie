const staticformsUrl = 'https://api.staticforms.xyz/submit';
const staticformAccessKey = '9ea74cf6-e1b7-4b1d-9612-48c6b587a000';

export const actions = {
	subscribe: async ({ request }) => {
		const formData = await request.formData();
		formData.set('accessKey', staticformAccessKey);
		formData.set('subject', 'nok.ie - Subscribe');

		const formDataObject = Object.fromEntries(formData.entries());
		const formDataJsonString = JSON.stringify(formDataObject);

		const options = {
			method: 'POST',
			body: formDataJsonString,
			headers: { 'content-type': 'application/json' }
		};

		return fetch(staticformsUrl, options)
			.then((value) => ({ ok: value.ok }))
			.catch(() => ({ ok: false }));
	}
};
