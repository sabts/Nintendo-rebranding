export const MENU_ICONS = user => [
	{
		id: 'menu-home',
		icon: {
			mobile: '/icons/menu - hamburger icon mobile.svg',
			tablet: '/icons/menu - hamburger icon tablet.svg',
			desktop: '/icons/menu - hamburger icon desktop.svg'
		},
		alt: 'hamburger menu icon',
		action: 'toggleMenu'
	},
	{
		id: 'menu-search',
		icon: {
			mobile: '/icons/menu icon - search.svg',
			tablet: '/icons/menu icon - search tablet.svg',
			desktop: '/icons/menu icon - search desktop.svg'
		},
		alt: 'search menu icon',
		action: 'openSearch'
	},
	{
		id: 'menu-user',
		icon: {
			mobile: user?.profileImageUrl || '/icons/no user - icon.svg',
			tablet: user?.profileImageUrl || '/icons/no user - icon tablet.svg',
			desktop: user?.profileImageUrl || '/icons/no user - icon desktop.svg'
		},
		alt: user ? `${user.username} profile picture` : 'user menu icon',
		action: 'openUserMenu'
	}
];
