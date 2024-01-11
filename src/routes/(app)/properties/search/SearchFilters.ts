import { Float, Int } from '$lib/utils/Number';
import type { Page } from '@sveltejs/kit';
import { derived, type Readable } from 'svelte/store';

export interface SearchFilters {
	location: null | string;
	locationNorthEastLat: null | number;
	locationNorthEastLng: null | number;
	locationSouthWestLat: null | number;
	locationSouthWestLng: null | number;
	priceInEurMin: null | number;
	priceInEurMax: null | number;
	bedroomsCountMin: null | number;
	bedroomsCountMax: null | number;
	bathroomsCountMin: null | number;
	bathroomsCountMax: null | number;
	sizeInSqtMtrMin: null | number;
	sizeInSqtMtrMax: null | number;
}

export enum SearchFiltersQueryStringNames {
	Location = 'location',
	LocationNorthEastLat = 'locationNorthEastLat',
	LocationNorthEastLng = 'locationNorthEastLng',
	LocationSouthWestLat = 'locationSouthWestLat',
	LocationSouthWestLng = 'locationSouthWestLng',
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

export const SearchFilters = {
	empty: {
		location: null,
		locationNorthEastLat: null,
		locationNorthEastLng: null,
		locationSouthWestLat: null,
		locationSouthWestLng: null,
		priceInEurMin: null,
		priceInEurMax: null,
		bedroomsCountMin: null,
		bedroomsCountMax: null,
		bathroomsCountMin: null,
		bathroomsCountMax: null,
		sizeInSqtMtrMin: null,
		sizeInSqtMtrMax: null
	},
	fromPage(page: Readable<Page<Record<string, string>, string | null>>): Readable<SearchFilters> {
		return derived(page, ($page) => this.fromUrlSearchParams($page.url.searchParams));
	},
	fromUrlSearchParams(urlSearchParams: URLSearchParams): SearchFilters {
		const copy = new URLSearchParams(urlSearchParams.toString());

		return {
			location: copy.get(SearchFiltersQueryStringNames.Location),
			locationNorthEastLat: copy.has(SearchFiltersQueryStringNames.LocationNorthEastLat)
				? Float.fromString(copy.get(SearchFiltersQueryStringNames.LocationNorthEastLat) as string)
				: null,
			locationNorthEastLng: copy.has(SearchFiltersQueryStringNames.LocationNorthEastLng)
				? Float.fromString(copy.get(SearchFiltersQueryStringNames.LocationNorthEastLng) as string)
				: null,
			locationSouthWestLat: copy.has(SearchFiltersQueryStringNames.LocationSouthWestLat)
				? Float.fromString(copy.get(SearchFiltersQueryStringNames.LocationSouthWestLat) as string)
				: null,
			locationSouthWestLng: copy.has(SearchFiltersQueryStringNames.LocationSouthWestLng)
				? Float.fromString(copy.get(SearchFiltersQueryStringNames.LocationSouthWestLng) as string)
				: null,
			priceInEurMin: copy.has(SearchFiltersQueryStringNames.PriceInEurMin)
				? Int.fromString(copy.get(SearchFiltersQueryStringNames.PriceInEurMin) as string)
				: null,
			priceInEurMax: copy.has(SearchFiltersQueryStringNames.PriceInEurMax)
				? Int.fromString(copy.get(SearchFiltersQueryStringNames.PriceInEurMax) as string)
				: null,
			bedroomsCountMin: copy.has(SearchFiltersQueryStringNames.BedroomsCountMin)
				? Int.fromString(copy.get(SearchFiltersQueryStringNames.BedroomsCountMin) as string)
				: null,
			bedroomsCountMax: copy.has(SearchFiltersQueryStringNames.BedroomsCountMax)
				? Int.fromString(copy.get(SearchFiltersQueryStringNames.BedroomsCountMax) as string)
				: null,
			bathroomsCountMin: copy.has(SearchFiltersQueryStringNames.BathroomsCountMin)
				? Int.fromString(copy.get(SearchFiltersQueryStringNames.BathroomsCountMin) as string)
				: null,
			bathroomsCountMax: copy.has(SearchFiltersQueryStringNames.BathroomsCountMax)
				? Int.fromString(copy.get(SearchFiltersQueryStringNames.BathroomsCountMax) as string)
				: null,
			sizeInSqtMtrMin: copy.has(SearchFiltersQueryStringNames.SizeInSqtMtrMin)
				? Int.fromString(copy.get(SearchFiltersQueryStringNames.SizeInSqtMtrMin) as string)
				: null,
			sizeInSqtMtrMax: copy.has(SearchFiltersQueryStringNames.SizeInSqtMtrMax)
				? Int.fromString(copy.get(SearchFiltersQueryStringNames.SizeInSqtMtrMax) as string)
				: null
		};
	},
	toUrlSearchParams(filters: SearchFilters): URLSearchParams {
		const urlSearchParams = new URLSearchParams();

		if (filters.location)
			urlSearchParams.set(SearchFiltersQueryStringNames.Location, filters.location);
		if (filters.locationNorthEastLat)
			urlSearchParams.set(
				SearchFiltersQueryStringNames.LocationNorthEastLat,
				filters.locationNorthEastLat.toString()
			);
		if (filters.locationNorthEastLng)
			urlSearchParams.set(
				SearchFiltersQueryStringNames.LocationNorthEastLng,
				filters.locationNorthEastLng.toString()
			);
		if (filters.locationSouthWestLat)
			urlSearchParams.set(
				SearchFiltersQueryStringNames.LocationSouthWestLat,
				filters.locationSouthWestLat.toString()
			);
		if (filters.locationSouthWestLng)
			urlSearchParams.set(
				SearchFiltersQueryStringNames.LocationSouthWestLng,
				filters.locationSouthWestLng.toString()
			);
		if (filters.priceInEurMin)
			urlSearchParams.set(
				SearchFiltersQueryStringNames.PriceInEurMin,
				filters.priceInEurMin.toString()
			);
		if (filters.priceInEurMax)
			urlSearchParams.set(
				SearchFiltersQueryStringNames.PriceInEurMax,
				filters.priceInEurMax.toString()
			);
		if (filters.bedroomsCountMin)
			urlSearchParams.set(
				SearchFiltersQueryStringNames.BedroomsCountMin,
				filters.bedroomsCountMin.toString()
			);
		if (filters.bedroomsCountMax)
			urlSearchParams.set(
				SearchFiltersQueryStringNames.BedroomsCountMax,
				filters.bedroomsCountMax.toString()
			);
		if (filters.bathroomsCountMin)
			urlSearchParams.set(
				SearchFiltersQueryStringNames.BathroomsCountMin,
				filters.bathroomsCountMin.toString()
			);
		if (filters.bathroomsCountMax)
			urlSearchParams.set(
				SearchFiltersQueryStringNames.BathroomsCountMax,
				filters.bathroomsCountMax.toString()
			);
		if (filters.sizeInSqtMtrMin)
			urlSearchParams.set(
				SearchFiltersQueryStringNames.SizeInSqtMtrMin,
				filters.sizeInSqtMtrMin.toString()
			);
		if (filters.sizeInSqtMtrMax)
			urlSearchParams.set(
				SearchFiltersQueryStringNames.SizeInSqtMtrMax,
				filters.sizeInSqtMtrMax.toString()
			);

		return urlSearchParams;
	},
	length(filters: SearchFilters): number {
		return [
			filters.location,
			filters.priceInEurMin,
			filters.priceInEurMax,
			filters.bedroomsCountMin,
			filters.bedroomsCountMax,
			filters.bathroomsCountMin,
			filters.bathroomsCountMax,
			filters.sizeInSqtMtrMin,
			filters.sizeInSqtMtrMax
		].filter((value) => null !== value && '' !== value).length;
	}
};
