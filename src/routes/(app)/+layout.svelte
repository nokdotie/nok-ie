<script lang="ts">
	export let data;
</script>

<div class="bg-neutral-100">
	<div class="fixed top-0 left-0 right-0 bg-neutral-100 z-50 shadow">
		<div class="flex flex-row gap-3 my-[16px] mx-[10px]">
			<a href="/" class="shrink-0">
				<img src="/images/logo.svg" alt="NOK.IE Logo" class="h-[48px] w-[48px]" />
			</a>
			<form class="grow relative group">
				<input
					name="q"
					placeholder="Search"
					value={data.form?.q ?? ''}
					class="h-[48px] w-full pl-[18px] pr-[128px] rounded-[14px] shadow duration-300 border border-neutral-300 group-hover:border-primary focus:border-primary outline-none text-paragraph-3"
				/>
				<button
					type="submit"
					class="h-[38px] px-[20px] rounded-[14px] bg-primary text-neutral-100 text-paragraph-4 font-semibold duration-300 group-hover:scale-95 absolute right-[5px] top-[5px]"
					>Search</button
				>
			</form>
		</div>
	</div>
	<div
		class="min-h-[calc(100vh-80px-129px)] sm:min-h-[calc(100vh-80px-107px)] mt-[80px] py-[25px] relative"
	>
		<slot />
	</div>
	<div class="py-[40px] sm:py-[44px] border-t-[1px] border-neutral-400 bg-neutral-100">
		<div
			class="px-[16px] sm:px-[24px] mx-auto max-w-[1318px] flex flex-col sm:flex-row sm:justify-between text-center gap-3"
		>
			<div class="text-paragraph-4 text-neutral-600">© NOK.IE</div>
			<div class="text-paragraph-4 text-neutral-400 flex divide-x justify-center">
				<div class="px-[16px] sm:px-[24px]">
					<a class=" text-neutral-600 hover:text-neutral-800 duration-300" href="/privacy-policy"
						>Privacy Policy</a
					>
				</div>
				<div class="px-[16px] sm:px-[24px]">
					<a class="text-neutral-600 hover:text-neutral-800 duration-300" href="/terms-service"
						>Terms of Service</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
