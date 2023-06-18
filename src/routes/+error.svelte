<script>
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const status = derived(page, (page) => {
		switch (page.error?.message) {
			case 'Not Found':
				return 404;
			default:
				return 500;
		}
	});
</script>

<svelte:head>
	<title>NOK.IE | {$status} Error</title>
</svelte:head>

<div class="mx-[16px] sm:mx-[24px] mt-[63px] sm:mt-[80px] md:mt-[100px] lg:mt-[124px]">
	<div
		class="max-w-[476px] mx-auto px-[25px] sm:px-[35px] md:px-[70px] pt-[60px] md:pt-[64px] pb-[30px] md:pb-[34px] bg-neutral-100 rounded-[20px] shadow"
	>
		<div
			class="bg-primary/10 h-[150px] w-[150px] pt-[calc(40px/2)] rounded-full text-center mx-auto mb-[20px]"
		>
			<div
				class="bg-neutral-100 text-primary leading-[110px] w-[110px] rounded-full text-center mx-auto font-bold text-heading-1 shadow"
			>
				{$status}
			</div>
		</div>
		<h1
			class="text-heading-3 sm:text-heading-2 font-bold text-center mb-[10px] sm:mb-[15px] md:mb-[20px] lg:mb-[22px]"
		>
			Oops!
		</h1>
		<p class="text-paragraph-3 text-neutral-600 text-center mb-[40px] md:mb-[45px] lg:mb-[54px]">
			{#if $status === 404}
				We’re sorry, it looks like the page you’re looking for doesn’t exist.
			{:else}
				We’re sorry, it looks like our website is having issues.
			{/if}
		</p>

		<a
			class="block text-center px-[26px] py-[16px] heading-5 bg-primary text-neutral-100 rounded-[12px] hover:scale-95 duration-300"
			href="/"
		>
			Go Home
		</a>
	</div>
</div>
