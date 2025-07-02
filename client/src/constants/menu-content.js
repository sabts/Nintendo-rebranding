const MENU_ITEMS = [
	{
		title: 'Games',
		items: [
			{
				label: 'Switch 2 Games',
				key: 'switch2',
				url: '/link-to-switch2-game-filter'
			},
			{
				label: 'Switch Games',
				key: 'switch',
				url: '/link-to-switch-game-filter'
			},
			{ label: 'Phone Games', key: 'phone', url: '/link-to-phone-game-filter' },
			{ label: 'Amiibo', key: 'amiibo', url: '/link-to-amiibo-filter' }
		]
	},
	{
		title: 'Shop',
		items: [
			{
				label: 'Hardware',
				subitems: [
					{
						label: 'Switch 2',
						key: 'switch2',
						url: '/link-to-switch2-hardware'
					},
					{ label: 'Switch', key: 'switch', url: '/link-to-switch-hardware' },
					{
						label: 'Switch OLED',
						key: 'oled',
						url: '/link-to-switch-oled-hardware'
					},
					{
						label: 'Switch Lite',
						key: 'lite',
						url: '/link-to-switch-lite-hardware'
					},
					{
						label: 'Accessories',
						key: 'accessories',
						url: '/link-to-accessories'
					}
				]
			},
			{
				label: 'Merchandise',
				key: 'merchandise',
				url: '/link-to-merch-store'
			}
		]
	},
	{
		title: 'News',
		items: [
			{ label: 'News', key: 'news', url: '/news' } // La página que se carga directamente
		]
	}
];
