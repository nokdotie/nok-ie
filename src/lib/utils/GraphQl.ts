function request(body: object) {
	return fetch('https://api.nok.ie/graphql', {
		method: 'POST',
		body: JSON.stringify(body)
	}).then((response) => response.json());
}

export function query<A>(query: string, variables: object): Promise<A> {
	return request({ query: query, variables: variables });
}

const pageInfoFragment = `hasNextPage endCursor`;
export type PageInfo = {
	hasNextPage: boolean;
	endCursor: string | null;
};

const edgeFragment = (attributes: string) => `cursor node { ${attributes} }`;
type Edge<A> = {
	cursor: string;
	node: A;
};

export const connectionFragment = (attributes: string) =>
	`pageInfo { ${pageInfoFragment} } edges { ${edgeFragment(attributes)} }`;
export type Connection<A> = {
	pageInfo: PageInfo;
	edges: Array<Edge<A>>;
};
