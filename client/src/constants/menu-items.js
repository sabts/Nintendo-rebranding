export const MENU_ICONS = user => [
	{
		id: 'menu-home',
		icon: '/icons/menu - hamburger icon mobile.svg',
		alt: 'hamburger menu icon',
		action: 'toggleMenu'
	},
	{
		id: 'menu-search',
		icon: '/icons/menu icon - search.svg',
		alt: 'search menu icon',
		action: 'openSearch'
	},
	{
		id: 'menu-user',
		icon: user?.profileImageUrl || '/icons/no user - icon.svg',
		alt: user ? `${user.username} profile picture` : 'user menu icon',
		action: 'openUserMenu'
	}
];
