<script>
  export let options = [];
  export let display_func = a => a;
  export let index = 0;
  export let value;

  $: {
    value = options[index];
    console.log(value);
  }

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

<select
    bind:value={index}
    class="{$$props.class} {defaultClass}"
    >
  {#each options as option, i}
    <option value={i}>{display_func(option)}</option>
  {/each}
</select>
