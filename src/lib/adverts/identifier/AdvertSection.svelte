<script lang="ts">
	import ContainerCenterLarge from '$lib/components/containers/ContainerCenterLarge.svelte';
</script>

<ContainerCenterLarge
	class="w-full pb-[20px] sm:pb-[25px] md:pb-8 lg:pb-10 pt-[15px] md:pt-[12px] lg:pt-[20px]"
>
	<h2
		class="text-neutral-800 text-[23px] sm:text-[28px] md:text-[32px] font-bold leading-[1.375em] mb-10"
	>
		<slot name="header" />
	</h2>

	<slot name="content" />
</ContainerCenterLarge>
