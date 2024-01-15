<script lang="ts">
	import ContainerExpandVertically from '$lib/components/containers/ContainerExpandVertically.svelte';
	import AdvertSection from './AdvertSection.svelte';

	export let description: string;
</script>

<AdvertSection>
	<div slot="header">About the property</div>

	<ContainerExpandVertically slot="content" maxHeightClass="max-h-[300px]">
		{#each description.split(/(?:[\r\n|\r|\n]+)/g) as paragraph}
			<p class="text-neutral-600 text-lg font-medium leading-[1.667em] mb-[23px] sm:mb-7 md:mb-8">
				{paragraph}
			</p>
		{/each}
	</ContainerExpandVertically>
</AdvertSection>
