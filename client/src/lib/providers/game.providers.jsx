import { createContext, useContext, useEffect, useState } from 'react';
import { getAllGames } from '../utils/games-api';

export const GameContext = createContext()

export const useGameContext = () => {
	return useContext(GameContext)
}

const GameProvider = ({ children }) => {
	const [games, setGames] = useState([]);

	useEffect(() => {
		getGamesInMongoDB(setGames);
	}, []);

	return (
		<GameContext.Provider
			value={{
				games,
				setGames
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

const getGamesInMongoDB = async (setGames) => {
	try {
		const allGames = await getAllGames();
		//console.log('Games desde MongoDB:', allGames);
		setGames(allGames);
	} catch (error) {
		console.error('Error al obtener juegos:', error);
	}
};

export default GameProvider;