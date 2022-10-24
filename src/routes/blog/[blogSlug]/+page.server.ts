import type { PageServerLoad } from './$types';

type Data = {
	post: {
		body: string;
		metadata: {
			title: string;
		};
	};
};

export const load: PageServerLoad<Data> = async (event) => {
	const { blogSlug } = event.params;

	const post = await import(`../../../lib/data/posts/${blogSlug}.mdx`);

	return {
		post: {
			body: post.default.$$render(),
			metadata: post.metadata
		}
	};
};
