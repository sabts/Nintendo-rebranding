export const URL_BASE = 'http://localhost:3000';
const URL_API_USER = '/api/user';

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

export { saveUserData };
