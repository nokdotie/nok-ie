import type { Advert } from '$lib/adverts/Adverts';
import { priceInEurAbbrieviated } from '$lib/utils/Number';

const className = 'bg-neutral-100 text-neutral-800 border border-neutral-800 text-sm font-semibold leading-[1.143em] px-1.5 py-1 rounded';
const activeClassName = ['!bg-primary', '!border-primary', '!text-neutral-100'];

const position = (advert: Advert) =>
	new google.maps.LatLng(advert.propertyCoordinates.latitude, advert.propertyCoordinates.longitude);

const content = (advert: Advert) => {
	const div = document.createElement('div');
	div.textContent = priceInEurAbbrieviated(advert.advertPriceInEur);
	div.className = className

	return div;
};

const simplify = (value: number) => value.toPrecision(5).slice(0, -1);
const latLngFromMarker = (marker: google.maps.marker.AdvancedMarkerElement) => {
	if (typeof marker.position?.lat === 'number' && typeof marker.position?.lng === 'number')
		return new google.maps.LatLng(marker.position.lat, marker.position.lng);
	if (typeof marker.position?.lat === 'function' && typeof marker.position?.lng === 'function')
		return new google.maps.LatLng(marker.position.lat(), marker.position.lng());
	return null;
};

export const AdvertMapMarker = {
	fromAdvert: (advert: Advert) => {
		return new google.maps.marker.AdvancedMarkerElement({
			position: position(advert),
			content: content(advert)
		});
	},
	activate: (marker: google.maps.marker.AdvancedMarkerElement) => {
		const div = marker.content as HTMLDivElement;
		div.classList.add(...activeClassName)
	},
	deactivate: (marker: google.maps.marker.AdvancedMarkerElement) => {
		const div = marker.content as HTMLDivElement;
		div.classList.remove(...activeClassName)
	},
	equals: (
		a: google.maps.marker.AdvancedMarkerElement,
		b: google.maps.marker.AdvancedMarkerElement
	) => {
		const aLatLng = latLngFromMarker(a) ?? new google.maps.LatLng(0, 0);
		const bLatLng = latLngFromMarker(b) ?? new google.maps.LatLng(0, 0);

		return (
			simplify(aLatLng?.lat()) === simplify(bLatLng?.lat()) &&
			simplify(aLatLng?.lng()) === simplify(bLatLng?.lng())
		);
	},
	isInBounds: (map: google.maps.Map, marker: google.maps.marker.AdvancedMarkerElement) =>
		null !== marker.position &&
		undefined !== marker.position &&
		map.getBounds()?.contains(marker.position)
};
