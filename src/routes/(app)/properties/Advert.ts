export type Advert = {
	advertUrl: string;
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
};
