export type AdvertFacet = {
	url: string;
};

const nonAdvertiserUrlPrefixes = ['https://ndber.seai.ie/'];

export const AdvertFacets = {
	filterAdvertisers: (facets: Array<AdvertFacet>): Array<AdvertFacet> =>
		facets.filter((facet) => !nonAdvertiserUrlPrefixes.some((p) => facet.url.startsWith(p)))
};
