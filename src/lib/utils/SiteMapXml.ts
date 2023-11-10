function response(parentNode: string, childNode: string, urls: string[]) {
	const lastmod = new Date().toISOString().slice(0, 10);

	return new Response(
		`
		|<?xml version="1.0" encoding="UTF-8" ?>
		|<${parentNode} xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		|	${urls
			.map(
				(url) => `
		|		<${childNode}>
		|			<loc>${url}</loc>
		|			<lastmod>${lastmod}</lastmod>
		|			<changefreq>daily</changefreq>
		|		</${childNode}>
		|	`
			)
			.join('\n\t')}
		|</${parentNode}>
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

export function sitemap(urls: string[]) {
	return response('urlset', 'url', urls);
}

export function sitemapIndex(urls: string[]) {
	return response('sitemapindex', 'sitemap', urls);
}
