<script lang="ts">
	import type { Thing, WithContext } from 'schema-dts';

	export let schema: Thing | WithContext<Thing>;
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html '<script type="application/ld+json">' + JSON.stringify(schema) + '</script>'}
</svelte:head>
