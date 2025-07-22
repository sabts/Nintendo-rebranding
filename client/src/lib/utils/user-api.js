export const URL_BASE = 'http://localhost:3000';
const URL_API_USER = '/api/user';


const register = async (userData) => {
	try {
		const response = await axios.post(`${URL_BASE}${URL_API_USER}/register`, userData);

		console.log('Usuario registrado:', response.data);

		return response.data;
	} catch (error) {
		console.error('Error al registrar usuario:', error.response?.data || error.message);
		throw error;
	}
};

const login = async () => {
	try {
		const { data } = await axios
			.post(`${URL_BASE}${URL_API_USER}/login`, {
				email,
				password,
			});

		return data;
	} catch (error) {
		const message = error.response?.data?.message || 'Error in email or password';
		throw new Error(message);
	}
};

export { register, login };
