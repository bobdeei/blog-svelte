import type { PageServerLoad } from './$types';

type Post = {
	slug: string;
	title: string;
	date: number;
	excerpt: string;
};

type Data = {
	posts: Post[];
};

export const load: PageServerLoad<Data> = async () => {
	const allPostFiles = import.meta.glob('/src/lib/data/posts/*.mdx');
	const iterablePostFiles = Object.entries(allPostFiles);

	const posts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata }: any = await resolver();
			const slug = path.slice(20, -4);

			return {
				slug,
				...metadata
			};
		})
	);

	return {
		posts
	};
};
