export type GraphQlQueryResponse = {
	data: {
		seo: {
			indexNow: {
				isKeyValid: boolean;
			};
		};
	};
};

export const graphQlQuery = `
    query($key: String) {
        seo {
            indexNow {
                isKeyValid(key: $key)
            }
        }
    }
`;
