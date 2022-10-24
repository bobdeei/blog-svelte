<script lang="ts">
	import Icon from '@iconify/svelte';

	import { routes } from '$lib/constants';

	// Types
	import type { PageData } from './$types';

	// Props
	export let data: PageData;

	// Computed Props
	const createdAt = new Date(data.post.metadata.date).toDateString();
</script>

<section class="layout flex flex-col gap-8 md:flex-row md:gap-0">
	<a
		class="inline-flex h-10 w-10 items-center justify-center rounded-full border text-gray-500 dark:border-gray-700 dark:bg-slate-800 dark:text-gray-500"
		href={routes.BLOG.href}
	>
		<Icon icon="akar-icons:arrow-left" />
	</a>
	<div class="prose mx-auto space-y-8">
		<time
			class="block border-l-2 border-gray-200 pl-4 text-gray-500 dark:border-gray-500 dark:text-gray-500"
		>
			{createdAt}
		</time>
		<h1 class="text-center capitalize">{data.post.metadata.title}</h1>
		{@html data.post.body}
	</div>
</section>
