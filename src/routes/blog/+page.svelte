<script lang="ts">
	import Icon from '@iconify/svelte';

	import { routes } from '$lib/constants';

	// Types
	import type { PageData } from './$types';

	// Props
	export let data: PageData;
</script>

<section class="space-y-6">
	<div class="layout space-y-6">
		<h1>Writing on new technologies and my own experience along with other interesting stuff.</h1>
		<p>
			I used these posts and notes to organize my thoughts, share it with others and record my own
			experience. If my humble experience is helpful to you, I'll be very happy :)
		</p>
	</div>

	<section class="md:layout-x">
		<ul class="space-y-8 border-gray-100 pt-6 dark:border-gray-700 md:border-l md:pt-0">
			{#each data.posts as post}
				{@const href = `${routes.BLOG.href}/${post.slug}`}
				{@const createdAt = new Date(post.date).toDateString()}

				<li class="gap-4 md:flex">
					<time class="hidden basis-[160px] pt-6 pl-8 text-sm text-gray-500 md:block">
						{createdAt}
					</time>

					<a
						class="layout-px block space-y-4 py-6 transition hover:bg-gray-50 dark:hover:bg-slate-800 md:rounded-2xl md:px-5"
						{href}
					>
						<time class="border-l-2 pl-4 text-sm text-gray-500 dark:border-gray-500 md:hidden">
							{createdAt}
						</time>
						<h2 class="md:!mt-0">{post.title}</h2>
						<p class="text-sm leading-relaxed text-gray-600">
							{post.excerpt}
						</p>
						<a class="inline-flex items-center gap-1 text-sm font-semibold text-emerald-400" {href}>
							Read article
							<Icon icon="bx:chevron-right" width="16" />
						</a>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</section>
