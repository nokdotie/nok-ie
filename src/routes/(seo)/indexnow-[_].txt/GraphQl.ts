export type GraphQlQueryResponse = {
	data: {
		seo: {
			isIndexNowKeyValid: boolean;
		};
	};
};

export const graphQlQuery = `
    query($key: String) {
        seo {
            isIndexNowKeyValid(key: $key)
        }
    }
`;
