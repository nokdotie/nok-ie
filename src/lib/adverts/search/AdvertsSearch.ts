import { Float, Int } from '$lib/utils/Number';
import type { Page } from '@sveltejs/kit';
import { derived, type Readable } from 'svelte/store';

export interface AdvertsSearch {
	location: null | string;
	locationNorthEastLat: null | number;
	locationNorthEastLng: null | number;
	locationSouthWestLat: null | number;
	locationSouthWestLng: null | number;
	propertyType: null | string;
	priceInEurMin: null | number;
	priceInEurMax: null | number;
	bedroomsCountMin: null | number;
	bedroomsCountMax: null | number;
	bathroomsCountMin: null | number;
	bathroomsCountMax: null | number;
	sizeInSqtMtrMin: null | number;
	sizeInSqtMtrMax: null | number;
}

export enum AdvertsSearchQueryStringNames {
	Location = 'location',
	LocationNorthEastLat = 'locationNorthEastLat',
	LocationNorthEastLng = 'locationNorthEastLng',
	LocationSouthWestLat = 'locationSouthWestLat',
	LocationSouthWestLng = 'locationSouthWestLng',
	PropertyType = 'propertyType',
	Coordinates = 'coordinates',
	PriceInEurMin = 'priceInEurMin',
	PriceInEurMax = 'priceInEurMax',
	BedroomsCountMin = 'bedroomsCountMin',
	BedroomsCountMax = 'bedroomsCountMax',
	BathroomsCountMin = 'bathroomsCountMin',
	BathroomsCountMax = 'bathroomsCountMax',
	SizeInSqtMtrMin = 'sizeInSqtMtrMin',
	SizeInSqtMtrMax = 'sizeInSqtMtrMax'
}

export const AdvertsSearch = {
	empty: {
		location: null,
		locationNorthEastLat: null,
		locationNorthEastLng: null,
		locationSouthWestLat: null,
		locationSouthWestLng: null,
		propertyType: null,
		priceInEurMin: null,
		priceInEurMax: null,
		bedroomsCountMin: null,
		bedroomsCountMax: null,
		bathroomsCountMin: null,
		bathroomsCountMax: null,
		sizeInSqtMtrMin: null,
		sizeInSqtMtrMax: null
	},
	fromPage(page: Readable<Page<Record<string, string>, string | null>>): Readable<AdvertsSearch> {
		return derived(page, ($page) => this.fromUrlSearchParams($page.url.searchParams));
	},
	fromUrlSearchParams(urlSearchParams: URLSearchParams): AdvertsSearch {
		const copy = new URLSearchParams(urlSearchParams.toString());

		return {
			location: copy.get(AdvertsSearchQueryStringNames.Location),
			locationNorthEastLat: copy.has(AdvertsSearchQueryStringNames.LocationNorthEastLat)
				? Float.fromString(copy.get(AdvertsSearchQueryStringNames.LocationNorthEastLat) as string)
				: null,
			locationNorthEastLng: copy.has(AdvertsSearchQueryStringNames.LocationNorthEastLng)
				? Float.fromString(copy.get(AdvertsSearchQueryStringNames.LocationNorthEastLng) as string)
				: null,
			locationSouthWestLat: copy.has(AdvertsSearchQueryStringNames.LocationSouthWestLat)
				? Float.fromString(copy.get(AdvertsSearchQueryStringNames.LocationSouthWestLat) as string)
				: null,
			locationSouthWestLng: copy.has(AdvertsSearchQueryStringNames.LocationSouthWestLng)
				? Float.fromString(copy.get(AdvertsSearchQueryStringNames.LocationSouthWestLng) as string)
				: null,
			propertyType: copy.has(AdvertsSearchQueryStringNames.PropertyType)
				? copy.get(AdvertsSearchQueryStringNames.PropertyType)
				: null,
			priceInEurMin: copy.has(AdvertsSearchQueryStringNames.PriceInEurMin)
				? Int.fromString(copy.get(AdvertsSearchQueryStringNames.PriceInEurMin) as string)
				: null,
			priceInEurMax: copy.has(AdvertsSearchQueryStringNames.PriceInEurMax)
				? Int.fromString(copy.get(AdvertsSearchQueryStringNames.PriceInEurMax) as string)
				: null,
			bedroomsCountMin: copy.has(AdvertsSearchQueryStringNames.BedroomsCountMin)
				? Int.fromString(copy.get(AdvertsSearchQueryStringNames.BedroomsCountMin) as string)
				: null,
			bedroomsCountMax: copy.has(AdvertsSearchQueryStringNames.BedroomsCountMax)
				? Int.fromString(copy.get(AdvertsSearchQueryStringNames.BedroomsCountMax) as string)
				: null,
			bathroomsCountMin: copy.has(AdvertsSearchQueryStringNames.BathroomsCountMin)
				? Int.fromString(copy.get(AdvertsSearchQueryStringNames.BathroomsCountMin) as string)
				: null,
			bathroomsCountMax: copy.has(AdvertsSearchQueryStringNames.BathroomsCountMax)
				? Int.fromString(copy.get(AdvertsSearchQueryStringNames.BathroomsCountMax) as string)
				: null,
			sizeInSqtMtrMin: copy.has(AdvertsSearchQueryStringNames.SizeInSqtMtrMin)
				? Int.fromString(copy.get(AdvertsSearchQueryStringNames.SizeInSqtMtrMin) as string)
				: null,
			sizeInSqtMtrMax: copy.has(AdvertsSearchQueryStringNames.SizeInSqtMtrMax)
				? Int.fromString(copy.get(AdvertsSearchQueryStringNames.SizeInSqtMtrMax) as string)
				: null
		};
	},
	toUrlSearchParams(advertsSearch: AdvertsSearch): URLSearchParams {
		const urlSearchParams = new URLSearchParams();

		if (advertsSearch.location)
			urlSearchParams.set(AdvertsSearchQueryStringNames.Location, advertsSearch.location);
		if (advertsSearch.locationNorthEastLat)
			urlSearchParams.set(
				AdvertsSearchQueryStringNames.LocationNorthEastLat,
				advertsSearch.locationNorthEastLat.toString()
			);
		if (advertsSearch.locationNorthEastLng)
			urlSearchParams.set(
				AdvertsSearchQueryStringNames.LocationNorthEastLng,
				advertsSearch.locationNorthEastLng.toString()
			);
		if (advertsSearch.locationSouthWestLat)
			urlSearchParams.set(
				AdvertsSearchQueryStringNames.LocationSouthWestLat,
				advertsSearch.locationSouthWestLat.toString()
			);
		if (advertsSearch.locationSouthWestLng)
			urlSearchParams.set(
				AdvertsSearchQueryStringNames.LocationSouthWestLng,
				advertsSearch.locationSouthWestLng.toString()
			);
		if (advertsSearch.propertyType)
			urlSearchParams.set(
				AdvertsSearchQueryStringNames.PropertyType,
				advertsSearch.propertyType
			);
		if (advertsSearch.priceInEurMin)
			urlSearchParams.set(
				AdvertsSearchQueryStringNames.PriceInEurMin,
				advertsSearch.priceInEurMin.toString()
			);
		if (advertsSearch.priceInEurMax)
			urlSearchParams.set(
				AdvertsSearchQueryStringNames.PriceInEurMax,
				advertsSearch.priceInEurMax.toString()
			);
		if (advertsSearch.bedroomsCountMin)
			urlSearchParams.set(
				AdvertsSearchQueryStringNames.BedroomsCountMin,
				advertsSearch.bedroomsCountMin.toString()
			);
		if (advertsSearch.bedroomsCountMax)
			urlSearchParams.set(
				AdvertsSearchQueryStringNames.BedroomsCountMax,
				advertsSearch.bedroomsCountMax.toString()
			);
		if (advertsSearch.bathroomsCountMin)
			urlSearchParams.set(
				AdvertsSearchQueryStringNames.BathroomsCountMin,
				advertsSearch.bathroomsCountMin.toString()
			);
		if (advertsSearch.bathroomsCountMax)
			urlSearchParams.set(
				AdvertsSearchQueryStringNames.BathroomsCountMax,
				advertsSearch.bathroomsCountMax.toString()
			);
		if (advertsSearch.sizeInSqtMtrMin)
			urlSearchParams.set(
				AdvertsSearchQueryStringNames.SizeInSqtMtrMin,
				advertsSearch.sizeInSqtMtrMin.toString()
			);
		if (advertsSearch.sizeInSqtMtrMax)
			urlSearchParams.set(
				AdvertsSearchQueryStringNames.SizeInSqtMtrMax,
				advertsSearch.sizeInSqtMtrMax.toString()
			);

		return urlSearchParams;
	},
	length(advertsSearch: AdvertsSearch): number {
		return [
			advertsSearch.location,
			advertsSearch.propertyType,
			advertsSearch.priceInEurMin,
			advertsSearch.priceInEurMax,
			advertsSearch.bedroomsCountMin,
			advertsSearch.bedroomsCountMax,
			advertsSearch.bathroomsCountMin,
			advertsSearch.bathroomsCountMax,
			advertsSearch.sizeInSqtMtrMin,
			advertsSearch.sizeInSqtMtrMax
		].filter((value) => null !== value && '' !== value).length;
	}
};
