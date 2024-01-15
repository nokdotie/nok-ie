<script lang="ts">
	export let id: string;
	export let type: 'text' | 'number' | 'email' | 'textarea' = 'text';
	export let placeholder = '';
	export let value: string | number | null = '';
	export let required = false;

	const defaultClass = [
		'bg-neutral-300',
		'text-neutral-800',
		'text-lg',
		'font-medium',
		'leading-[1.42857]',
		'h-[64px]',
		'w-full',
		'px-6',
		'py-2',
		'rounded-xl',
		'outline-none',
		'border',
		'border-neutral-300',
		'focus:border-primary',
		'transition',
		'duration-300',
		'placeholder:text-neutral-600'
	].join(' ');
</script>

{#if type === 'textarea'}
	<textarea
		{id}
		name={id}
		class="{$$props.class} {defaultClass}"
		{placeholder}
		{required}
		bind:value
		on:input
		on:blur
	/>
{:else}
	<input
		{id}
		name={id}
		list="list-{id}"
		class="{$$props.class} {defaultClass}"
		{...{ type }}
		{placeholder}
		{required}
		bind:value
		on:input
		on:blur
	/>
{/if}
