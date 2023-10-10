<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';
</script>

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
