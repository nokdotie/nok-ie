<script>
	import PropertiesSearchRoute from '$routes/(app)/properties/search/Route';
	import SearchIcon from '$lib/components/icons/SearchIcon.svelte';
	import ContainerCenterLarge from '$lib/components/containers/ContainerCenterLarge.svelte';
	import Image from '$lib/components/images/Image.svelte';
</script>

<div class="py-5 sm:py-[23px] md:py-7 lg:py-8 relative z-10 bg-neutral-100">
	<ContainerCenterLarge>
		<div class="flex items-center justify-between">
			<div>
				<a href="/" class="flex items-center group">
					<Image src="/images/logo.svg" alt="Logo" class="h-[40px]" />
					<span
						class="transition duration-300 text-neutral-800/90 group-hover:text-neutral-800 text-2xl font-bold leading-[1.667em]"
						>Nok.ie</span
					>
				</a>
			</div>
			<div class="flex items-center">
				<a href={PropertiesSearchRoute(null)} class="group p-[6px]">
					<SearchIcon
						class="h-[26px] text-neutral-700 transition duration-300 group-hover:text-primary"
					/></a
				>
			</div>
		</div>
	</ContainerCenterLarge>
</div>
