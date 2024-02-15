<script lang="ts">
	import CameraIcon from '$lib/components/icons/CameraIcon.svelte';

	export let src: null | undefined | string;
	export let alt: string;

	$: error = null === src || undefined === src || '' === src;
</script>

{#if !error}
	<img {src} {alt} loading="lazy" class={$$props.class} on:error|once={() => (error = true)} />
{:else}
	<div
		class="{$$props.class} flex items-center justify-center gap-x-2.5 bg-neutral-700 text-neutral-100 text-lg font-medium leading-[1.111em]"
	>
		<CameraIcon class="w-[22px]" />
		Image missing
	</div>
{/if}
