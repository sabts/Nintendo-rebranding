export const URL_BASE = 'http://localhost:3000';
const URL_API_USERS = '/api/users/';
const URL_API_GAMES = '/api/games';

const saveUserData = async (uid, email, name) => {
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

const getAllGames = async () => {
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

const getGameById = async uuid => {
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

const filtersGames = async (body) => {
	try {
		const response = await fetch(URL_BASE + URL_API_GAMES + "/filters", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			throw new Error("Error :(");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error in filter", error);
		return [];
	}
};

export { saveUserData, getAllGames, getGameById, filtersGames }
