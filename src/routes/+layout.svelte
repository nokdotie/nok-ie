<script lang="ts">
	import '../app.css';

	let humburgerMenuOpen = false;
	function toggleHumburgerMenu() {
		humburgerMenuOpen = !humburgerMenuOpen;
	}
</script>

<div class="min-h-screen bg-neutral-100">
	<div>
		<div
			class="py-[20px] sm:py-[23px] md:py-[28px] lg:py-[32px] px-[16px] sm:px-[24px] mx-auto max-w-[1318px] flex justify-between items-center"
		>
			<img src="/images/logo.svg" alt="NOK.IE Logo" class="h-[40px] md:h-[49px]" />

			<!-- <div class="hidden md:flex gap-[15px] items-center">
				<a class="text-paragraph-2 text-neutral-800 hover:text-primary duration-300" href="/_/properties">Buy</a>
				<a class="px-[26px] py-[16px] heading-5 bg-neutral-800 text-neutral-100 hover:bg-primary rounded-[12px] hover:scale-95 duration-300" href="/_/about">
					Post a property
				</a>
			</div>
			<div on:click={toggleHumburgerMenu} on:keypress={toggleHumburgerMenu} class="flex flex-col justify-around md:hidden w-[45px] h-[45px] p-[12px] bg-neutral-800 hover:bg-primary text-neutral-100 rounded-[12px] hover:scale-95 ">
				<div class="w-full h-[2px] bg-neutral-100 duration-300" class:rotate-45="{humburgerMenuOpen}" class:translate-y-[7px]="{humburgerMenuOpen}"></div>
				<div class="w-full h-[2px] bg-neutral-100 duration-300" class:opacity-0="{humburgerMenuOpen}"></div>
				<div class="w-full h-[2px] bg-neutral-100 duration-300" class:-rotate-45="{humburgerMenuOpen}" class:translate-y-[-7px]="{humburgerMenuOpen}"></div>
			</div> -->
		</div>

		<div
			class="w-screen duration-300 md:h-0 md:opacity-0"
			class:h-0={!humburgerMenuOpen}
			class:opacity-0={!humburgerMenuOpen}
			class:h-[calc(100vh-85px)]={humburgerMenuOpen}
			class:sm:h-[calc(100vh-91px)]={humburgerMenuOpen}
			class:opacity-100={humburgerMenuOpen}
		>
			<div class="h-full px-[16px] sm:px-[24px] flex flex-col justify-between">
				<div class="mt-[30px]">
					<a
						class="text-paragraph-2 text-[28px] pb-[12px] text-neutral-800 hover:text-primary duration-300"
						href="/_/properties">Buy</a
					>
				</div>

				<a
					class="my-[20px] sm:my-[23px] px-[40px] py-[20px] heading-5 bg-neutral-800 text-neutral-100 hover:bg-primary text-center rounded-[12px] hover:scale-95 duration-300"
					href="/_/about"
				>
					Post a property
				</a>
			</div>
		</div>
	</div>

	<div class="relative">
		<div
			class="pb-[82px] sm:pb-[102px] md:pb-[128px] lg:pb-[160px] px-[16px] sm:px-[24px] mx-auto max-w-[1318px]"
		>
			<slot />
		</div>
	</div>

	<div class="py-[40px] sm:py-[44px] border-t-[1px] border-neutral-400 bg-neutral-100">
		<div
			class="px-[16px] sm:px-[24px] mx-auto max-w-[1318px] flex items-center flex-col sm:flex-row sm:justify-between"
		>
			<img src="/images/logo.svg" alt="NOK.IE Logo" class="h-[49px] mb-[28px] sm:mb-0" />
			<p class="text-paragraph-4 text-neutral-600">Copyright © NOK.IE</p>
		</div>
	</div>
</div>
