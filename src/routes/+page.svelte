<script lang="ts">
	import Icon from '@iconify/svelte';

	import { socials } from '$lib/constants';
</script>

<section class="layout space-y-8">
	<h1>Software Engineer, entrepreneurs, and player.</h1>
	<p>
		I'm Duy, a software engineer and entrepreneur based in New York City. I'm the founder and CEO of
		MF, where we develop technologies and solution that empower regular people to become their own
		boss.
	</p>
	<ul class="flex items-center gap-6">
		{#each Object.values(socials) as social}
			<li class="text-gray-500">
				<a href={social.href} target="_blank" rel="noreferrer">
					<Icon icon={social.icon} width="20" />
				</a>
			</li>
		{/each}
	</ul>
</section>
