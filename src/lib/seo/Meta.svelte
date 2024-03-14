<script lang="ts">
	export let title: string;
	export let description: string;
	export let images: string[] = ['https://nok.ie/images/logo.svg'];

	export let index = true;
</script>

<svelte:head>
	<title>Nok.ie | {title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	{#each images as image}
		<meta property="og:image" content={image} />
	{/each}

	<meta name="twitter:site" content="@nokdotie" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{#each images as image}
		<meta property="twitter:image" content={image} />
	{/each}

	<meta name="robots" content={index ? 'index' : 'noindex'} />
</svelte:head>
