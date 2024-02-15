<script lang="ts">
	import { swipe } from 'svelte-gestures';
	import CloseIcon from '$lib/components/icons/CloseIcon.svelte';
	import ArrowLeftIcon from '$lib/components/icons/ArrowLeftIcon.svelte';
	import ArrowRightIcon from '$lib/components/icons/ArrowRightIcon.svelte';
	import Image from '$lib/components/images/Image.svelte';

	export let imageUrls: string[];
	export let selectedIndex: null | number;

	const selectPrevious = () => {
		if (null === selectedIndex) return;
		if (0 === selectedIndex) selectedIndex = imageUrls.length - 1;

		selectedIndex -= 1;
	};

	const selectNext = () => {
		if (null === selectedIndex) return;
		if (imageUrls.length - 1 === selectedIndex) selectedIndex = 0;

		selectedIndex += 1;
	};

	const onKeyDown = (event: KeyboardEvent) => {
		switch (event.key) {
			case 'Escape':
				selectedIndex = null;
				break;
			case 'a':
			case 'ArrowLeft':
				selectPrevious();
				break;
			case 'd':
			case 'ArrowRight':
				selectNext();
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
				selectedIndex = null;
				break;
			case 'right':
				selectPrevious();
				break;
			case 'left':
				selectNext();
				break;
		}
	};
</script>

<svelte:window on:keydown={onKeyDown} />

{#if null !== selectedIndex}
	<style>
		body {
			overflow: hidden;
		}
	</style>

	<div
		class="fixed inset-0 bg-neutral-800/90 text-neutral-300 backdrop-blur z-10"
		use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
		on:swipe={onSwipe}
	>
		<div class="flex flex-col h-full">
			<div class="self-end">
				<button class="p-[20px]" on:click|preventDefault={() => (selectedIndex = null)}>
					<CloseIcon class="w-[18px] h-[18px]" />
				</button>
			</div>
			<div class="h-[calc(100%-60px-120px)] flex items-center justify-between">
				<button on:click={selectPrevious} class="p-[20px] hidden sm:block">
					<ArrowLeftIcon class="w-[24px] h-[24px]" />
				</button>
				<Image
					src={imageUrls[selectedIndex]}
					alt=""
					class="w-full sm:w-[calc(100%-64px-64px)] max-h-full object-cover object-center grow shrink"
				/>
				<button on:click={selectNext} class="p-[20px] hidden sm:block">
					<ArrowRightIcon class="w-[24px] h-[24px]" />
				</button>
			</div>
			<div
				class="px-[10px] py-[20px] text-center overflow-x-scroll overflow-y-hidden space-x-[10px] whitespace-nowrap"
			>
				{#each imageUrls as imageUrl, index}
					<button on:click={() => (selectedIndex = index)} class="w-[80px] h-[80px]">
						<Image
							src={imageUrl}
							alt=""
							class="w-full h-full object-cover object-center {index === selectedIndex
								? 'brightness-50'
								: ''}"
						/>
					</button>
				{/each}
			</div>
		</div>
	</div>
{/if}
