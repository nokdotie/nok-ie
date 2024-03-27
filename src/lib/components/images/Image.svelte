<script lang="ts">
	import CameraIcon from '$lib/components/icons/CameraIcon.svelte';

	export let src: null | undefined | string;
	export let alt: string;

	$: error = null === src || undefined === src || '' === src;

	const copyrighted = [
		'https://photos-a.propertyimages.ie/media/4/2/2/4775224/059d3b5b-db17-41fc-bc3c-92606d6c76c4_l.jpg'
	].includes(src || '');
</script>

{#if error || copyrighted}
	<div
		class="{$$props.class} flex items-center justify-center gap-x-2.5 bg-neutral-700 text-neutral-100 text-lg font-medium leading-[1.111em]"
	>
		<CameraIcon class="w-[22px]" />
		Image missing
	</div>
{:else}
	<img {src} {alt} loading="lazy" class={$$props.class} on:error|once={() => (error = true)} />
{/if}
