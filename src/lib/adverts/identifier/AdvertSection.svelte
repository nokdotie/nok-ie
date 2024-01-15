<script lang="ts">
	import ContainerCenterLarge from '$lib/components/containers/ContainerCenterLarge.svelte';
</script>

<ContainerCenterLarge
	class="w-full pb-[82px] sm:pb-[102px] md:pb-32 lg:pb-40 pt-[60px] md:pt-[67px] lg:pt-[84px]"
>
	<h2
		class="text-neutral-800 text-[23px] sm:text-[28px] md:text-[32px] font-bold leading-[1.375em] mb-10"
	>
		<slot name="header" />
	</h2>

	<slot name="content" />
</ContainerCenterLarge>
