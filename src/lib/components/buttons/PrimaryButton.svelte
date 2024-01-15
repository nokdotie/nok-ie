<script lang="ts">
	export let href: null | string = null;

	const defaultClass = [
		'hover:bg-primary',
		'hover:text-neutral-100',
		'shadow-300 hover:shadow-100',
		'flex justify-center items-center',
		'text-lg font-semibold leading-[1.111em]',
		'px-5 sm:px-[30px] md:px-10 py-5',
		'rounded-xl',
		'border-0',
		'transition duration-300',
		'w-full sm:w-auto'
	].join(' ');
</script>

{#if null === href}
	<button class="{$$props.class} {defaultClass}" on:click>
		<slot />
	</button>
{:else}
	<a {href} class="{$$props.class} {defaultClass}" on:click>
		<slot />
	</a>
{/if}
