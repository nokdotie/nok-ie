export default function (identifier: string, after: null | string) {
	const prefix = `/counties/${identifier}/properties`;
	return null === after ? prefix : `${prefix}?after=${after}`;
}
