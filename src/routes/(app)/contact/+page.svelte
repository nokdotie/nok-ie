<script lang="ts">
	import { enhance } from '$app/forms';
	import Meta from '$lib/components/seo/Meta.svelte';
	import DocumentHeader from '$lib/components/document/DocumentHeader.svelte';
	import DocumentFooter from '$lib/components/document/DocumentFooter.svelte';
	import ContainerCenterSmall from '$lib/components/containers/ContainerCenterSmall.svelte';
	import Label from '$lib/components/forms/Label.svelte';
	import Input from '$lib/components/forms/Input.svelte';
	import PrimaryButtonDark from '$lib/components/buttons/PrimaryButtonDark.svelte';
	import { Status } from '$lib/utils/Status';

	export let form;
</script>

<Meta
	index={true}
	title="Contact"
	description="Questions? We've got answers. Reach out anytime!"
	images={['https://nok.ie/android-chrome-512x512.png']}
/>

<DocumentHeader />

<div>
	<div class="bg-primary min-h-[60%] absolute top-0 inset-x-0" />
	<ContainerCenterSmall class="relative py-[82px] sm:py-[102px] md:py-[128px] lg:py-[160px]">
		<div class="mb-[40px] md:mb-[48px]">
			<h1
				class="text-center text-neutral-100 text-[33px] sm:text-[40px] md:text-5xl font-bold leading-[1.25em] mb-2.5 md:mb-3.5"
			>
				Get in touch
			</h1>
			<p class="text-center text-neutral-100 text-lg font-medium leading-[1.667em] mb-10">
				Questions? We've got answers. Reach out anytime!
			</p>
		</div>

		<div
			class="bg-neutral-100 shadow-400 px-[25px] sm:px-[35px] md:px-[52px] py-[51px] sm:py-16 md:py-20 rounded-[20px] md:rounded-3xl"
		>
			{#if null === form?.status || undefined === form?.status}
				<form method="POST" use:enhance class="space-y-[33px]">
					<div>
						<Label for="email">Email address</Label>
						<Input id="email" type="email" />
					</div>
					<div>
						<Label for="phone">Phone number</Label>
						<Input id="phone" type="number" />
					</div>
					<div>
						<Label for="message">Message</Label>
						<Input id="message" type="textarea" required class="min-h-[225px] h-auto !py-4" />
					</div>
					<div class="text-right">
						<PrimaryButtonDark>Send message</PrimaryButtonDark>
					</div>
				</form>
			{:else if Status.Success === form?.status}
				<div class="text-neutral-800 text-lg font-semibold leading-[1.667em] text-center">
					Thanks for reaching out!<br /> We'll get back to you soon.
				</div>
			{:else if Status.Failure === form?.status}
				<div
					class="text-red-400 text-lg font-semibold leading-[1.667em] text-center mb-2.5 md:mb-3.5"
				>
					Oops! That didn't work.<br /> Want to send us an email instead?
				</div>
				<div class="text-neutral-800 text-lg font-semibold leading-[1.667em] text-center">
					<a href="mailto:contact@nok.ie">contact@nok.ie</a>
				</div>
			{/if}
		</div>
	</ContainerCenterSmall>
</div>

<DocumentFooter />
