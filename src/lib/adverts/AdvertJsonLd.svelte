<script lang="ts">
	import JsonLd from '$lib/components/seo/JsonLd.svelte';
	import type { RealEstateListing, WithContext } from 'schema-dts';

	export let advert: {
		advertPriceInEur: number;
		propertyDescription: string;
		propertyAddress: string;
		propertyCoordinates: {
			latitude: number;
			longitude: number;
		};
		propertyImageUrls: Array<string>;
		propertySizeInSqtMtr: number;
		propertyBedroomsCount: number;
		propertyBathroomsCount: number;
		advertiser: null | {
			name: string;
			pictureUrl: string;
			emailAddresses: string[];
			phoneNumbers: string[];
			physicalAddresses: string[];
		};
		sources: Array<
			| {
					__typename: 'DaftIeAdvert';
					url: string;
			  }
			| {
					__typename: 'DngIeAdvert';
					url: string;
			  }
			| {
					__typename: 'MyHomeIeAdvert';
					url: string;
			  }
			| {
					__typename: 'PropertyPalComAdvert';
					url: string;
			  }
			| {
					__typename: 'SherryFitzIeAdvert';
					url: string;
			  }
			| {
					__typename: 'BuildingEnergyRatingCertificate';
					url: string;
					number?: string;
					rating?: string;
					energyRatingInKWhPerSqtMtrPerYear?: number;
					carbonDioxideEmissionsIndicatorInKgCO2PerSqtMtrPerYear?: number;
			  }
		>;
	};

	const schema: WithContext<RealEstateListing> = {
		'@context': 'https://schema.org',
		'@type': 'RealEstateListing',
		offers: {
			'@type': 'Offer',
			price: advert.advertPriceInEur,
			priceCurrency: 'EUR',
			offeredBy: {
				'@type': 'RealEstateAgent',
				name: advert.advertiser?.name ?? '',
				logo: advert.advertiser?.pictureUrl ?? '',
				address: advert.advertiser?.physicalAddresses ?? [],
				telephone: advert.advertiser?.phoneNumbers ?? [],
				email: advert.advertiser?.emailAddresses ?? []
			}
		},
		mainEntity: {
			'@type': 'Accommodation',
			address: advert.propertyAddress,
			geo: {
				'@type': 'GeoCoordinates',
				latitude: advert.propertyCoordinates.latitude,
				longitude: advert.propertyCoordinates.longitude
			},
			floorSize: {
				'@type': 'QuantitativeValue',
				unitCode: 'MTK',
				value: advert.propertySizeInSqtMtr
			},
			numberOfBedrooms: advert.propertyBedroomsCount,
			numberOfBathroomsTotal: advert.propertyBathroomsCount,
			photos: advert.propertyImageUrls.map((url) => ({
				'@type': 'ImageObject',
				contentUrl: url
			})),
			sameAs: advert.sources.map((source) => source.url)
		}
	};
</script>

<JsonLd {schema} />
