<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
</script>

<svelte:head>
	<title>NOK.IE | Coming Soon</title>
</svelte:head>

<div
	class="py-[20px] sm:py-[23px] md:py-[28px] lg:py-[32px] px-[16px] sm:px-[24px] mx-auto max-w-[1318px]"
>
	<img src="/images/logo.svg" alt="NOK.IE Logo" class="h-[40px] md:h-[49px]" />
</div>

<div
	class="pt-[40px] sm:pt-[50px] md:pt-[60px] lg:pt-[100px] pb-[100px] sm:pb-[125px] md:pb-[156px] lg:pb-[195px] items-center"
>
	<div
		class="px-[16px] sm:px-[24px] mx-auto mb-[40px] sm:mb-[32px] md:mb-[53px] lg:mb-[64px] max-w-[926px]"
	>
		<img src="/images/coming-soon.svg" alt="Coming Soon" />
	</div>

	<div class="px-[16px] sm:px-[24px] mx-auto max-w-[668px]">
		<h1
			class="text-heading-2 sm:text-heading-1 text-center font-thicccboi font-bold mb-[10px] md:mb-[14px] text-neutral-800 leading-[1.25em]"
		>
			Our website is under construction...
		</h1>

		<p class="text-center text-paragraph-md mb-[40px] text-neutral-600 leading-[1.667em]">
			Be notified as soon as our new website is available. Type your email address below to receive
			an update once we launch.
		</p>

		<div>
			<form
				method="post"
				action="?/subscribe"
				class="relative flex flex-col sm:flex-row"
				use:enhance
			>
				<input
					class="w-full min-h-[64px] sm:min-h-[86px] mb-[15px] sm:mb-0 px-[20px] py-[15px] sm:pr-[170px] lg:pr-[190px] border border-neutral-300 duration-300 hover:border-primary focus:border-primary outline-none rounded-[12px] bg-neutral-300 text-paragraph-md text-neutral-800"
					name="email"
					type="email"
					required
					placeholder="Email address"
				/>
				<button
					class="static sm:absolute sm:right-[11px] p-[20px] sm:px-[30px] self-stretch sm:self-center text-neutral-100 font-semibold bg-primary rounded-[12px] duration-300 hover:scale-[0.98] sm:hover:scale-[0.95]"
					>Subscribe</button
				>
			</form>

			{#if form?.ok === true}
				<div class="text-center text-paragraph-md text-primary font-semibold mt-[15px]">
					<p>Thanks for subscribing.</p>
					<p>We will notify you when we launch.</p>
				</div>
			{:else if form?.ok === false}
				<p class="text-center text-paragraph-md text-primary font-semibold mt-[15px]">
					Oops! Something went wrong.
				</p>
			{/if}
		</div>
	</div>
</div>

<div class="py-[40px] sm:py-[44px] border-t-[1px] border-neutral-400">
	<div
		class="px-[16px] sm:px-[24px] mx-auto max-w-[1318px] flex items-center flex-col sm:flex-row sm:justify-between"
	>
		<img src="/images/logo.svg" alt="NOK.IE Logo" class="h-[49px] mb-[28px] sm:mb-0" />
		<p class="text-paragraph-md text-neutral-600">Copyright © NOK.IE</p>
	</div>
</div>
