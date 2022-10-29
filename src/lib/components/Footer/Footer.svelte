<script lang="ts">
	import { footerNavigation } from '$lib/constants';
</script>

<footer
	class="layout-x flex flex-col items-center justify-between gap-6 border-t border-gray-100 py-10 dark:border-gray-800 md:flex-row"
>
	<ul class="flex gap-6">
		{#each footerNavigation as navItem}
			<li class="text-sm font-semibold dark:text-white/90">
				<a href={navItem.href}>{navItem.text}</a>
			</li>
		{/each}
	</ul>
	<p class="text-sm text-gray-400">© 2022 Duy Nguyen. All rights reserved.</p>
</footer>
