<script lang="ts">
	import Analytics from '$lib/Analytics.svelte';

	import '../app.css';
</script>

<svelte:head>
	<style>
		html {
			height: 100%;
		}
		body {
			height: 100%;
		}
	</style>
</svelte:head>

<slot />
<Analytics />
