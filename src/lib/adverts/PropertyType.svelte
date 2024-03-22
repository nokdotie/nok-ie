<script lang="ts">
	import HomeIcon from '$lib/components/icons/HomeIcon.svelte';

	export let propertyType: string;
</script>

{#if propertyType != 'Unknown'}
	<div class="{$$props.class} flex flex-row items-center gap-x-2">
		<HomeIcon class="w-[15px] text-neutral-600" />
		<div class="flex-1 text-neutral-600 text-base font-medium leading-[1.125em]">
			{propertyType}
		</div>
	</div>
{/if}
