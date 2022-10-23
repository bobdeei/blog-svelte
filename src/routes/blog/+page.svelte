<script lang="ts">
	import Icon from '@iconify/svelte';

	import { routes } from '$lib/constants';

	const posts = [
		{
			slug: 'how-i-learn-programming',
			title: 'How I Learn Programming',
			excerpt:
				'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
			date: new Date('09/10/2022')
		},
		{
			slug: 'strategy-vs-tactic',
			title: 'Strategy vs Tactic',
			excerpt:
				'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
			date: new Date('10/5/2022')
		},
		{
			slug: 'influence-book-summary',
			title: 'Influence: Book Summary',
			excerpt:
				'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.',
			date: new Date('10/15/2022')
		}
	];
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
			{#each posts as post}
				{@const href = `${routes.BLOG.href}/${post.slug}`}

				<li class="gap-4 md:flex">
					<time class="hidden basis-[160px] pt-6 pl-8 text-sm text-gray-500 md:block">
						{post.date.toDateString()}
					</time>

					<a
						class="layout-px block space-y-4 py-6 transition hover:bg-gray-50 dark:hover:bg-slate-800 md:rounded-2xl md:px-5"
						{href}
					>
						<time class="border-l-2 pl-4 text-sm text-gray-400 md:hidden">
							{post.date.toDateString()}
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
