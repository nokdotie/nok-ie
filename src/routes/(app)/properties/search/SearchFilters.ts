import { Float, Int } from '$lib/utils/Number';

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
	fromUrl(url: URL): SearchFilters {
		const search = url.searchParams;

		return {
			location: search.get(SearchFiltersQueryStringNames.Location),
			locationNorthEastLat: search.has(SearchFiltersQueryStringNames.LocationNorthEastLat)
				? Float.fromString(search.get(SearchFiltersQueryStringNames.LocationNorthEastLat) as string)
				: null,
			locationNorthEastLng: search.has(SearchFiltersQueryStringNames.LocationNorthEastLng)
				? Float.fromString(search.get(SearchFiltersQueryStringNames.LocationNorthEastLng) as string)
				: null,
			locationSouthWestLat: search.has(SearchFiltersQueryStringNames.LocationSouthWestLat)
				? Float.fromString(search.get(SearchFiltersQueryStringNames.LocationSouthWestLat) as string)
				: null,
			locationSouthWestLng: search.has(SearchFiltersQueryStringNames.LocationSouthWestLng)
				? Float.fromString(search.get(SearchFiltersQueryStringNames.LocationSouthWestLng) as string)
				: null,
			priceInEurMin: search.has(SearchFiltersQueryStringNames.PriceInEurMin)
				? Int.fromString(search.get(SearchFiltersQueryStringNames.PriceInEurMin) as string)
				: null,
			priceInEurMax: search.has(SearchFiltersQueryStringNames.PriceInEurMax)
				? Int.fromString(search.get(SearchFiltersQueryStringNames.PriceInEurMax) as string)
				: null,
			bedroomsCountMin: search.has(SearchFiltersQueryStringNames.BedroomsCountMin)
				? Int.fromString(search.get(SearchFiltersQueryStringNames.BedroomsCountMin) as string)
				: null,
			bedroomsCountMax: search.has(SearchFiltersQueryStringNames.BedroomsCountMax)
				? Int.fromString(search.get(SearchFiltersQueryStringNames.BedroomsCountMax) as string)
				: null,
			bathroomsCountMin: search.has(SearchFiltersQueryStringNames.BathroomsCountMin)
				? Int.fromString(search.get(SearchFiltersQueryStringNames.BathroomsCountMin) as string)
				: null,
			bathroomsCountMax: search.has(SearchFiltersQueryStringNames.BathroomsCountMax)
				? Int.fromString(search.get(SearchFiltersQueryStringNames.BathroomsCountMax) as string)
				: null,
			sizeInSqtMtrMin: search.has(SearchFiltersQueryStringNames.SizeInSqtMtrMin)
				? Int.fromString(search.get(SearchFiltersQueryStringNames.SizeInSqtMtrMin) as string)
				: null,
			sizeInSqtMtrMax: search.has(SearchFiltersQueryStringNames.SizeInSqtMtrMax)
				? Int.fromString(search.get(SearchFiltersQueryStringNames.SizeInSqtMtrMax) as string)
				: null
		};
	}
};
