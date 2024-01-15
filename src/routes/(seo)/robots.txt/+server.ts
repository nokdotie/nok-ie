export async function GET({ url }) {
	return new Response(
		`
		|User-agent: *
		|Disallow:

		|Sitemap: ${url.origin}/sitemap_index.xml
		`
			.trim()
			.replaceAll(/[\t ]*\|/g, ''),
		{
			headers: {
				'Content-Type': 'text/plain'
			}
		}
	);
}
