export default function (arg: { endCursor: string | null }) {
	return `/properties/sitemap.xml${arg.endCursor ? `?after=${arg.endCursor}` : ''}`;
}
