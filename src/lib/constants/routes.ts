const routes = {
	HOME: {
		href: '/',
		text: 'Home'
	},
	ABOUT: {
		href: '/about',
		text: 'About'
	},
	BLOG: {
		href: '/blog',
		text: 'Blog'
	},
	PROJECTS: {
		href: '/projects',
		text: 'Projects'
	},
	NOTES: {
		href: '/notes',
		text: 'Notes'
	}
};

export const navigation = Object.values(routes).filter(
	(navItem) => navItem.href !== routes.HOME.href
);
export const footerNavigation = [routes.ABOUT, routes.BLOG, routes.PROJECTS, routes.NOTES];

export default routes;
