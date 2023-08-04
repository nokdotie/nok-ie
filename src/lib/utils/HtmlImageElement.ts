export const onError = (src: string) => (event: Event) => {
	const isInstanceOfHtmlImageElement = event.currentTarget instanceof HTMLImageElement;
	if (!isInstanceOfHtmlImageElement) {
		console.error('Event was not emitted by an HTMLImageElement', event);
		return;
	}

	const img = event.currentTarget as HTMLImageElement;
	img.src = src;
};
