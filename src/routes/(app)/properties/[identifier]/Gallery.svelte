<script lang="ts">
	import { onError } from '$lib/utils/HtmlImageElement';

	export let advert: {
		propertyImageUrls: Array<string>;
	};
</script>

<ul role="list" class="grid grid-cols-2 gap-4 sm:grid-cols-3">
	{#each advert.propertyImageUrls as propertyImageUrl}
		<li class="relative">
			<div class="aspect-photo overflow-hidden rounded-lg">
				<img
					src={propertyImageUrl}
					on:error|preventDefault={onError('/images/placeholder.svg')}
					alt=""
					class="h-full w-full object-cover object-center aspect-photo"
				/>
			</div>
		</li>
	{/each}
</ul>
