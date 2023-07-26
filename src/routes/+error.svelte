<script>
	import { page } from '$app/stores';
	import ErrorCard from '$lib/errors/ErrorCard.svelte';
	import ErrorCardImage from '$lib/errors/ErrorCardImage.svelte';
	import ErrorCardHeader from '$lib/errors/ErrorCardHeader.svelte';
	import ErrorCardBody from '$lib/errors/ErrorCardBody.svelte';
	import { derived } from 'svelte/store';

	const status = derived(page, ($page) => {
		switch ($page.error?.message) {
			case 'Not Found':
				return 404;
			default:
				return 500;
		}
	});
</script>

<svelte:head>
	<title>NOK.IE | {$status} Error</title>
</svelte:head>

<div class="h-screen flex flex-col justify-center">
	<ErrorCard>
		<ErrorCardImage>{$status}</ErrorCardImage>
		<ErrorCardHeader>Oops</ErrorCardHeader>
		<ErrorCardBody>
			{#if $status === 404}
				We’re sorry, it looks like the page you’re looking for doesn’t exist.
			{:else}
				We’re sorry, it looks like our website is having issues.
			{/if}
		</ErrorCardBody>
	</ErrorCard>
</div>
