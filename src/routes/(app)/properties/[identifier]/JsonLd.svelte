<script lang="ts">
	import JsonLd from '$lib/utils/JsonLd';
	import type { RealEstateListing, WithContext } from 'schema-dts';

	export let advert: {
		advertPriceInEur: number;
		propertyAddress: string;
		propertyCoordinates: {
			latitude: number;
			longitude: number;
		};
		propertyImageUrls: Array<string>;
		propertySizeInSqtMtr: number;
		propertyBedroomsCount: number;
		propertyBathroomsCount: number;
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
			priceCurrency: 'EUR'
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

<!-- eslint-disable -->
{@html JsonLd(schema)}
