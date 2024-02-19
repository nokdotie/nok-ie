<script lang="ts">
	import ContainerCenterLarge from '$lib/components/containers/ContainerCenterLarge.svelte';
</script>

<ContainerCenterLarge
	class="w-full pb-[12px] sm:pb-[22px] md:pb-12 lg:pb-10 pt-[10px] md:pt-[17px] lg:pt-[24px]"
>
	<h2
		class="text-neutral-800 text-[23px] sm:text-[28px] md:text-[32px] font-bold leading-[1.375em] mb-10"
	>
		<slot name="header" />
	</h2>

	<slot name="content" />
</ContainerCenterLarge>
