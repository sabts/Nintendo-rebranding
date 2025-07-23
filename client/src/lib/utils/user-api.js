import axios from "axios"

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

export { registerUser, login };
