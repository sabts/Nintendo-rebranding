import { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getAllGames} from '../utils/api';
const AuthProvider = ({ children }) => {
	const [games, setGames] = useState([]);
  
	// Llamada a la función para obtener los juegos de la API
	useEffect(() => {
	  getGamesInMongoDB(setGames); // Aquí se usa la función getGamesInMongoDB
	}, []);
  
	return (
	  <AuthContext.Provider
		value={{
		  games,
		  setGames
		}}
	  >
		{children}
	  </AuthContext.Provider>
	);
  };
  
  // Aquí defines la función getGamesInMongoDB, que obtiene los juegos de la API
  const getGamesInMongoDB = async (setGames) => {
	try {
	  const allGames = await getAllGames();
	  console.log('Games desde MongoDB:', allGames); // Verifica los juegos obtenidos
	  setGames(allGames); // Actualiza el estado con los juegos
	} catch (error) {
	  console.error('Error al obtener juegos:', error); // Manejo de errores
	}
  };
  
  export default AuthProvider;