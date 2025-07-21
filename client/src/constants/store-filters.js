const BY_AGE = [
	{ value: 'PEGI 3', label: '3+ (suitable for all ages)' },
	{ value: 'PEGI 7', label: '7+ (suitable for children aged 7 and over)' },
	{ value: 'PEGI 12', label: '12+ (suitable for children aged 12 and over)' },
	{ value: 'PEGI 16', label: '16+ (suitable for children aged 16 and over)' }
];

const HARDWARE = [
	{ value: 'Switch', label: 'Nintendo Switch' },
	{ value: 'Switch 2', label: 'Nintendo Switch 2' },
	{ value: 'Mobile', label: 'Mobile (Smartphones/Tablets)' }
];

const FRANCHISE = [
	{ value: 'Mario', label: 'Mario' },
	{ value: 'The Legend of Zelda', label: 'The Legend of Zelda' },
	{ value: 'Minecraft', label: 'Minecraft' },
	{ value: 'Fortnite', label: 'Fortnite' },
	{ value: 'Pikmin', label: 'Pikmin' },
	{ value: 'Donkey Kong', label: 'Donkey Kong' },
	{ value: 'Animal Crossing', label: 'Animal Crossing' },
	{ value: 'Pokemon', label: 'Pokemon' }
];

const GAME_GENDER = [
	{ value: 'Action', label: 'Action' },
	{ value: 'Adventure', label: 'Adventure' },
	{ value: 'RPG', label: 'RPG (Role-Playing Game)' },
	{ value: 'Strategy', label: 'Strategy' },
	{ value: 'Shooter', label: 'Shooter' },
	{ value: 'Sports', label: 'Sports' },
	{ value: 'Simulation', label: 'Simulation' }
];

export const FILTERS = {
	BY_AGE,
	HARDWARE,
	FRANCHISE,
	GAME_GENDER
};
