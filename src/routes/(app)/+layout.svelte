<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<meta name="robots" content="index, follow" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Nok.ie" />
	<meta property="og:url" content={$page.url.toString()} />
	<meta property="og:locale" content="en_IE" />

	<meta name="twitter:url" content={$page.url.toString()} />
</svelte:head>

<div class="flex flex-col min-h-full bg-white">
	<main class="flex flex-grow flex-col w-full">
		<div class="flex-shrink-0">
			<Header />
		</div>

		<slot />
	</main>

	<div class="flex-shrink-0 w-full">
		<Footer />
	</div>
</div>
