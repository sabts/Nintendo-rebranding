import { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getAllGames} from '../utils/games-api';
const GameProvider = ({ children }) => {
	const [games, setGames] = useState([]);

	useEffect(() => {
	  getGamesInMongoDB(setGames); 
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
  
  const getGamesInMongoDB = async (setGames) => {
	try {
	  const allGames = await getAllGames();
	  console.log('Games desde MongoDB:', allGames);
	  setGames(allGames); 
	} catch (error) {
	  console.error('Error al obtener juegos:', error);
	}
  };
  
  export default GameProvider;