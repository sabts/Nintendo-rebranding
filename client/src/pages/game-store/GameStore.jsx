import { useEffect, useState } from 'react';
import { GameStoreCard } from '../../components/ui/game-cards/GameCards';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {
	StyledFilterButton,
	StyledGamesContainer,
	StyledMainContainer,
	StyledTag,
	StyledTagsSection,
	StyledTitleSection
} from './game-store-styles';
import Modal from '../../components/modal/Modal';
import Filters from '../../components/filters/StoreFilters';
import { filtersGames } from '../../lib/utils/games-api';
import { useGameContext } from '../../lib/providers/game.providers';
import { useUserContext } from '../../lib/providers/user.providers';

const GameStore = () => {
	const { games } = useGameContext();
	const { user } = useUserContext();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedFilters, setSelectedFilters] = useState({
		age: [],
		hardware: [],
		franchise: [],
		gameGender: []
	});
	const [gamesFilter, setGamesFilter] = useState([]);

	const applyFilters = async newFilters => {
		const filter = await filtersGames(newFilters);
		setSelectedFilters(newFilters);
		setGamesFilter(filter);
	};

	useEffect(() => {
		setGamesFilter(games);
	}, [games]);

	//console.log(selectedFilters)
	return (
		<>
			<Header />
			<StyledMainContainer>
				<section>
					<StyledTitleSection>
						<h3>Games</h3>

						<StyledFilterButton onClick={() => setIsModalOpen(true)}>
							Filters
						</StyledFilterButton>
					</StyledTitleSection>

					<StyledTagsSection>
						{Object.entries(selectedFilters).map(([filterCategory, values]) =>
							Array.isArray(values) && values.length > 0
								? values.map(value => {
										console.log('Filtro seleccionado:', filterCategory, value);
										return (
											<StyledTag key={`${filterCategory}-${value}`}>
												{value}
												<button
													onClick={() =>
														removeFilter(
															filterCategory,
															value,
															setSelectedFilters
														)
													}
												>
													<img
														src='/icons/close  menu - icon.svg'
														alt='remove tag'
													/>
												</button>
											</StyledTag>
										);
								  })
								: null
						)}
					</StyledTagsSection>
				</section>

				{/* Mostrar los juegos filtrados */}
				<StyledGamesContainer>
					{gamesFilter.map(game => (
						<GameStoreCard
							key={game._id}
							gameId={game._id}
							name={game.name}
							slug={game.slug}
							thumbnail={game.thumbnail}
							price={game.price.digital}
							isFavorite={user.favorites?.includes(game._id)}
						/>
					))}
				</StyledGamesContainer>
			</StyledMainContainer>
			<Footer />

			{/* Modal de Filtros */}
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title={'Filters'}
			>
				<Filters
					applyFilters={applyFilters}
					onClose={() => setIsModalOpen(false)}
				/>
			</Modal>
		</>
	);
};

const removeFilter = (filterCategory, value, setSelectedFilters) => {
	setSelectedFilters(prevFilters => {
		const updatedFilters = { ...prevFilters };
		updatedFilters[filterCategory] = updatedFilters[filterCategory].filter(
			item => item !== value
		);
		// if(!updatedFilters){return games}
		return updatedFilters;
	});
};

export default GameStore;
