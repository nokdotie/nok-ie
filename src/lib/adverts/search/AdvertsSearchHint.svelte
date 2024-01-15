<script lang="ts">
	import MapMarkerIcon from '$lib/components/icons/MapMarkerIcon.svelte';
	import HomeIcon from '$lib/components/icons/HomeIcon.svelte';

	export let icon: 'MapMarkerIcon' | 'HomeIcon';
	export let title: string;
	export let description: string;

	const iconClass =
		'text-neutral-100 bg-primary p-[10px] inline-block text-lg font-medium leading-[1.667em] max-h-16 max-w-full min-h-[64px] min-w-[64px] align-middle w-16 mb-[22px] rounded-[1e+06px] border-0';
</script>

<div class="py-8">
	{#if 'MapMarkerIcon' === icon}
		<MapMarkerIcon class={iconClass} />
	{:else if 'HomeIcon' === icon}
		<HomeIcon class={iconClass} />
	{/if}

	<h2 class="text-neutral-800 text-[22px] font-bold leading-[1.364em] mb-3.5">
		{title}
	</h2>
	<p class="text-neutral-600 text-lg font-medium leading-[1.667em]">
		{description}
	</p>
</div>
