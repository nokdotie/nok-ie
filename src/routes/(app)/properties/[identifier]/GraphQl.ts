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
			sources {
				__typename
				... on DaftIeAdvert {
					url
				}
				... on DngIeAdvert {
					url
				}
				... on MyHomeIeAdvert {
					url
				}
				... on PropertyPalComAdvert {
					url
				}
				... on SherryFitzIeAdvert {
					url
				}
				... on BuildingEnergyRatingCertificate {
					url
					number
					rating
					energyRatingInKWhPerSqtMtrPerYear
					carbonDioxideEmissionsIndicatorInKgCO2PerSqtMtrPerYear
				}
			}
        }
    }
`;
