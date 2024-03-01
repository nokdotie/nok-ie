<script lang="ts">
  export let id: string;
  export let options: {label: string, value: string}[];
  export let placeholder = '';
  export let value: string | null;

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
  ].join(' ');

</script>

<select
	{id}
	name={id}
    bind:value={value}
    class="{$$props.class} {defaultClass}"
	class:!text-neutral-600={value === null}
    >
    <option value={null} disabled>{placeholder}</option>
  {#each options as {value, label}}
    <option value={value}>{label}</option>
  {/each}
</select>
