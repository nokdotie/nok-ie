<script lang="ts">
	import Error from '$lib/components/document/Error.svelte';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const titleAndDescriptionByStatusCode: Record<string, { title: string; description: string }> = {
		'404': {
			title: 'Not found',
			description: 'Sorry, we couldn’t find the page you’re looking for.'
		},
		'500': {
			title: 'Internal error',
			description: 'Sorry, something went wrong.'
		}
	};

	const titleAndDescription = derived(
		page,
		($page) => titleAndDescriptionByStatusCode[$page.status.toString()]
	);
</script>

<Error title={$titleAndDescription.title} description={$titleAndDescription.description} />
