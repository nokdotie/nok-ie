export type GraphQlQueryResponse = {
	data: {
		advert: {
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
			advertiser?: {
				name: string;
				pictureUrl: string;
				emailAddresses: string[];
				phoneNumbers: string[];
				physicalAddresses: string[];
			};
		};
	};
};

export const graphQlQuery = `
    query($identifier: String!) {
        advert(identifier: $identifier) {
			advertPriceInEur
			propertyAddress
			propertyCoordinates {
				latitude
				longitude
			}
			propertyImageUrls
			propertySizeInSqtMtr
			propertyBedroomsCount
			propertyBathroomsCount
			advertiser {
				name
    			pictureUrl
				emailAddresses
				phoneNumbers
				physicalAddresses
			}
        }
    }
`;
