<script lang="ts">
	import { page } from '$app/stores';

	export let index: boolean;
	export let title: string;
	export let description: string;
	export let images: string[];
</script>

<svelte:head>
	<title>Nok.ie | {title}</title>
	<meta name="description" content={description} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Nok.ie" />
	<meta property="og:url" content={$page.url.toString()} />
	<meta property="og:locale" content="en_IE" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	{#each images as image}
		<meta property="og:image" content={image} />
	{/each}

	<meta name="twitter:url" content={$page.url.toString()} />
	<meta name="twitter:creator" content="@NokDotIe" />
	<meta name="twitter:site" content="@nokdotie" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{#each images as image}
		<meta property="twitter:image" content={image} />
	{/each}

	<meta name="robots" content={index ? 'index' : 'noindex'} />
</svelte:head>
