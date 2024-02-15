<script lang="ts">
	import AdvertSection from './AdvertSection.svelte';
	import Image from '$lib/components/images/Image.svelte';

	export let imageUrls: string[];
	export let onImageClick: (index: number) => void;
</script>

<AdvertSection>
	<div slot="header">Property gallery</div>

	<div
		slot="content"
		class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 md:gap-x-[26px] gap-y-5 md:gap-y-[41px]"
	>
		{#each imageUrls as imageUrl, index}
			<button
				class="transition duration-300 hover:brightness-50"
				on:click={() => onImageClick(index)}
				><Image src={imageUrl} alt="" class="w-full aspect-square object-cover object-center" />
			</button>
		{/each}
	</div>
</AdvertSection>
