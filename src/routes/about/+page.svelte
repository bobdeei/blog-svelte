<script lang="ts">
	import Icon from '@iconify/svelte';

	import { contact, socialList } from '$lib/constants';
</script>

<section class="layout grid gap-16 md:grid-cols-2">
	<div class="space-y-6">
		<div class="pb-6 md:hidden">
			<img
				class="h-80 w-80 rotate-3 rounded-2xl"
				src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&w=1080&q=75"
				alt=""
			/>
		</div>
		<h1>I'm Duy Nguyen. I live in New York City, where I develop the future.</h1>
		<p>
			I’ve loved making things for as long as I can remember, and wrote my first program when I was
			6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I
			taught myself to type on.
		</p>
		<p>
			The only thing I loved more than computers as a kid was space. When I was 8, I climbed the
			40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet,
			counted down from three, and jumped — hoping the tree was tall enough that with just a bit of
			momentum I’d be able to get to orbit.
		</p>
		<p>
			I spent the next few summers indoors working on a rocket design, while I recovered from the
			multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I
			was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our
			family computer from space.
		</p>
		<p>
			Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned
			shuttle kits you can assemble at home so that the next generation of kids really can make it
			to orbit — from the comfort of their own backyards.
		</p>
	</div>

	<div>
		<div class="hidden pb-6 md:block">
			<img
				class="h-80 w-80 rotate-3 rounded-2xl md:h-auto md:w-auto"
				src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&w=1080&q=75"
				alt=""
			/>
		</div>

		<ul class="space-y-4 pt-6 text-sm">
			{#each socialList as social}
				<li>
					<a
						class="group inline-flex items-center gap-4"
						href={social.href}
						target="_blank"
						rel="noreferrer"
					>
						<Icon
							class="text-gray-500 transition group-hover:text-primary"
							icon={social.icon}
							width="20"
						/>
						<span class="font-semibold text-gray-700 transition group-hover:text-primary">
							Follow on {social.name}
						</span>
					</a>
				</li>
			{/each}

			<li class="border-t border-gray-100 pt-4 dark:border-gray-700">
				<a
					class="group inline-flex items-center gap-4 text-sm"
					href={contact.EMAIL.href}
					target="_blank"
					rel="noreferrer"
				>
					<Icon
						class="text-gray-500 transition group-hover:text-primary"
						icon="entypo:mail"
						width="20"
					/>
					<span class="font-semibold text-gray-700 transition group-hover:text-primary">
						{contact.EMAIL.text}
					</span>
				</a>
			</li>
		</ul>
	</div>
</section>
