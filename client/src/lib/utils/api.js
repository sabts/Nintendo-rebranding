const URL_BASE = 'http://localhost:3000';
const URL_API_USERS = '/api/users/';
const URL_API_GAMES = '/api/games';

export const saveUserData = async (uid, email, name) => {
	try {
		const response = await fetch(URL_BASE + URL_API, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ uid, email, name })
		});

		if (!response.ok) {
			throw new Error('No se pudo guardar el usuario en MongoDB');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error al guardar el usuario en MongoDB:', error);
		throw error;
	}
};

export const getAllGames = async () => {
	try {
		const response = await fetch(URL_BASE + URL_API_GAMES);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			return [];
		}
	} catch (error) {
		console.log(error);
	}
};

export const getGameById = async uuid => {
	try {
		const response = await fetch(URL_BASE + URL_API_GAMES + uuid);
		if (response.ok) {
			const data = await response.json();
			console.log('Datos de juegos recibidos:', data);
			return data;
		} else {
			return [];
		}
	} catch (error) {
		console.log(error);
	}
};

export const updateDataById = async (id, body) => {
	try {
		const response = await fetch(URL_BASE + URL_API + id, {
			method: 'PATCH',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' }
		});
		console.log(URL_BASE + URL_API + id);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
