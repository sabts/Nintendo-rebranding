import axios from 'axios';

export const URL_BASE = 'http://localhost:3000';
const URL_API_USER = '/api/user';

const registerUser = async data => {
	const response = await axios.post(
		`${URL_BASE}${URL_API_USER}/register`,
		data
	);
	console.log('Usuario registrado:', response.data);
	return response.data;
};

const login = async body => {
	const response = await axios.post(`${URL_BASE}${URL_API_USER}/login`, body);
	return response.data;
};

const getFavorites = async userId => {
	const response = await axios.get(
		`${URL_BASE}${URL_API_USER}/favorites`,
		userId
	);
	return response.data;
};

const addFavoriteGame = async (userId, gameId, state) => {
	const response = await axios.patch(`${URL_BASE}${URL_API_USER}/favorites`, {
		userId,
		gameId,
		state
	});
	return response.data;
};

const addProducts = async (gameData, userId) => {
	const response = await axios.patch(
		`${URL_BASE}${URL_API_USER}/shopping-cart`,
		{
			gameId: gameData.gameId,
			name: gameData.name,
			thumbnail: gameData.thumbnail,
			hardware: gameData.hardware,
			format: gameData.format,
			price: gameData.price,
			userId: userId
		}
	);
	console.log('Datos enviados al backend:', { ...gameData, userId });
	return response.data;
};

const getProductsinCart = async userId => {
	const response = await axios.post(
		`${URL_BASE}${URL_API_USER}/shopping-cart`,
		{
			userId
		}
	);
	return response.data;
};

const removeProductFromCart = async (gameId, userId) => {
	const response = await axios.patch(
		`${URL_BASE}${URL_API_USER}/shopping-cart/remove`,
		{ gameId, userId }
	);

	return response.data;
};

export {
	registerUser,
	login,
	getFavorites,
	addFavoriteGame,
	addProducts,
	getProductsinCart,
	removeProductFromCart
};
