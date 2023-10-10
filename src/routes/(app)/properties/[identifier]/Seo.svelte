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

	const title = `Nok.ie | ${advert.propertyAddress}`;
	const description = `Property for sale: ${
		advert.propertyAddress
	}, €${advert.advertPriceInEur.toLocaleString('en-IE')}, ${Math.floor(
		advert.propertySizeInSqtMtr
	)} m², ${advert.propertyBedroomsCount} beds, ${advert.propertyBathroomsCount} bathrooms`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	{#each advert.propertyImageUrls as propertyImageUrl}
		<meta property="og:image" content={propertyImageUrl} />
	{/each}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{#each advert.propertyImageUrls as propertyImageUrl}
		<meta name="twitter:image" content={propertyImageUrl} />
	{/each}

	<!-- eslint-disable -->
	{@html JsonLd(schema)}
</svelte:head>
