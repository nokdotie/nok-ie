<script lang="ts">
	let _for: string;
	export { _for as for };
</script>

<label
	for={_for}
	class="{$$props.class} block text-neutral-800 text-lg font-bold leading-[1.333em] mb-4"
>
	<slot />
</label>
