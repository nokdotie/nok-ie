export default function (identifier: string, after: null | string) {
	const prefix = `/properties/counties/${identifier}`;
	return null === after ? prefix : `${prefix}?after=${after}`;
}
