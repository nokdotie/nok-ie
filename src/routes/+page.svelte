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
			class="text-center text-[35px] sm:text-[40px] md:text-[48px] font-bold mb-[10px] md:mb-[14px] text-[#222223] leading-[1.25em]"
		>
			Our website is under construction...
		</h1>

		<p class="text-center text-[18px] mb-[40px] text-[#8d8d91] leading-[1.667em]">
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
					class="w-full min-h-[64px] sm:min-h-[86px] mb-[15px] sm:mb-0 px-[20px] py-[15px] sm:pr-[170px] lg:pr-[190px] border border-[#f6f6f6] hover:border-[#fe6100] focus:border-[#fe6100] focus:outline-none rounded-[12px] bg-[#f6f6f6] text-[18px] text-[#222223]"
					name="email"
					type="email"
					required
					placeholder="Email address"
				/>
				<button
					class="static sm:absolute sm:right-[11px] p-[20px] sm:px-[30px] self-stretch sm:self-center text-[#ffffff] font-semibold bg-[#fe6100] rounded-[12px]"
					>Subscribe</button
				>
			</form>

			{#if form?.ok === true}
				<div class="text-center text-[18px] text-[#fe6100] font-semibold mt-[15px]">
					<p>Thanks for subscribing.</p>
					<p>We will notify you when we launch.</p>
				</div>
			{:else if form?.ok === false}
				<p class="text-center text-[18px] text-[#fe6100] font-semibold mt-[15px]">
					Oops! Something went wrong.
				</p>
			{/if}
		</div>
	</div>
</div>

<div class="py-[40px] sm:py-[44px] border-t-[1px] boder-[#e9e9e9]">
	<div
		class="px-[16px] sm:px-[24px] mx-auto max-w-[1318px] flex items-center flex-col sm:flex-row sm:justify-between"
	>
		<img src="/images/logo.svg" alt="NOK.IE Logo" class="h-[49px] mb-[28px] sm:mb-0" />
		<p>Copyright © NOK.IE</p>
	</div>
</div>
