export default function (urls: string[]) {
	return new Response(
		`
		|<?xml version="1.0" encoding="UTF-8" ?>
		|<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		|	${urls.map((url) => `<url><loc>${url}</loc></url>`).join('\n\t')}
		|</urlset>
        `
			.trim()
			.replaceAll(/[\t ]*\|/g, ''),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
