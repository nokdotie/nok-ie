<script lang="ts">
	import { swipe } from 'svelte-gestures';
	import { onError } from '$lib/utils/HtmlImageElement';

	export let advert: {
		propertyImageUrls: Array<string>;
	};

	let clickedIndex: number | null = null;

	const clickPrevious = () => {
		if (null === clickedIndex) return;
		if (0 === clickedIndex) clickedIndex = advert.propertyImageUrls.length - 1;

		clickedIndex -= 1;
	};

	const clickNext = () => {
		if (null === clickedIndex) return;
		if (advert.propertyImageUrls.length - 1 === clickedIndex) clickedIndex = 0;

		clickedIndex += 1;
	};

	const onKeyDown = (event: KeyboardEvent) => {
		switch (event.key) {
			case 'Escape':
				clickedIndex = null;
				break;
			case 'ArrowLeft':
				clickPrevious();
				break;
			case 'ArrowRight':
				clickNext();
				break;
		}
	};

	const onSwipe = (
		event: CustomEvent<{
			direction: 'top' | 'right' | 'bottom' | 'left';
			target: EventTarget;
		}>
	) => {
		switch (event.detail.direction) {
			case 'top':
			case 'bottom':
				clickedIndex = null;
				break;
			case 'right':
				clickPrevious();
				break;
			case 'left':
				clickNext();
				break;
		}
	};
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />
<svelte:head>
	{#if null !== clickedIndex}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

<ul role="list" class="grid grid-cols-2 gap-4 sm:grid-cols-3">
	{#each advert.propertyImageUrls as propertyImageUrl, index}
		<li class="relative">
			<div class="aspect-photo overflow-hidden rounded-lg">
				<button on:click|preventDefault={() => (clickedIndex = index)}>
					<img
						src={propertyImageUrl}
						on:error|preventDefault={onError('/images/placeholder.svg')}
						alt=""
						class="h-full w-full object-cover object-center aspect-photo hover:opacity-75"
					/>
				</button>
			</div>
		</li>
	{/each}
</ul>

{#if null !== clickedIndex}
	<div class="fixed inset-0 bg-black/90 backdrop-blur p-2">
		<div class="text-right">
			<button on:click|preventDefault={() => (clickedIndex = null)}>
				<svg
					class="h-6 w-6 text-gray-300 hover:text-gray-100"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
		<img
			src={advert.propertyImageUrls[clickedIndex]}
			use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
			on:swipe={onSwipe}
			alt=""
			class="m-auto object-scale-down h-[calc(100%-30px-44px)] w-full"
		/>
		<div class="flex justify-between group pt-2">
			<button
				on:click|preventDefault={clickPrevious}
				class="inline-flex items-center p-2 text-sm font-medium text-gray-300 hover:text-gray-100"
			>
				<svg
					class="mr-3 h-5 w-5 text-gray-300 group-hover:text-gray-100"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
						clip-rule="evenodd"
					/>
				</svg>
				Previous
			</button>
			<button
				on:click|preventDefault={clickNext}
				class="inline-flex items-center p-2 text-sm font-medium text-gray-300 hover:text-gray-100 group"
			>
				Next
				<svg
					class="ml-3 h-5 w-5 text-gray-300 group-hover:text-gray-100"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>
	</div>
{/if}
