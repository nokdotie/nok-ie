<script lang="ts">
	import CameraIcon from '$lib/components/icons/CameraIcon.svelte';
	import ContainerCenterLarge from '$lib/components/containers/ContainerCenterLarge.svelte';
	import PrimaryButtonLight from '$lib/components/buttons/PrimaryButtonLight.svelte';
	import Image from '$lib/components/images/Image.svelte';

	export let imageUrl: null | string;
	export let onBrowseGalleryButtonClick: null | (() => void);
</script>

<div>
	<Image
		src={imageUrl || ''}
		alt=""
		class="w-full min-h-[415px] max-h-[615px] object-cover object-center"
	/>

	{#if null !== onBrowseGalleryButtonClick}
		<ContainerCenterLarge class="relative -mt-[100px]">
			<PrimaryButtonLight on:click={onBrowseGalleryButtonClick} class="!w-auto">
				<CameraIcon class="w-[22px] mr-2.5" />
				Browse Gallery
			</PrimaryButtonLight>
		</ContainerCenterLarge>
	{/if}
</div>
