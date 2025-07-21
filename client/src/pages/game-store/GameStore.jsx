import { useContext, useState } from "react";
import { GameStoreCard } from "../../components/ui/game-cards/GameCards"
import { AuthContext } from "../../lib/context/AuthContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { StyledFilterButton, StyledGamesContainer, StyledMainContainer, StyledTag, StyledTagsSection, StyledTitleSection } from "./game-store-styles";;
import Modal from "../../components/modal/Modal";
import Filters from "../../components/filters/StoreFilters";

const GameStore = () => {
  const { games } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    age: [],      
    hardware: [], 
    franchise: [], 
    gameGender: [],
  });
  
  const applyFilters = (newFilters) => {
    console.log("Filtros aplicados:", newFilters);
    setSelectedFilters(newFilters);
  };

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
            {Object.entries(selectedFilters).map(([filter, values]) =>
              Array.isArray(values) ? (
                values.map((value) => (
                  <StyledTag key={value}>
                  {value} 
                  <button onClick={() => removeFilter(filter, value, setSelectedFilters)}><img src="/icons/close  menu - icon.svg"/></button>
                </StyledTag>
                ))
              ) : null
            )}
          </StyledTagsSection>
        </section>

        {/* Mostrar los juegos filtrados */}
        <StyledGamesContainer>
  {filterGames(games, selectedFilters).length > 0 ? (
    filterGames(games, selectedFilters).map((game) => (
      <GameStoreCard
        key={game.uuid}
        name={game.name}
        slug={game.slug}
        thumbnail={game.thumbnail}
        price={game.price.digital}
      />
    ))
  ) : (
    <p>No games found</p> 
  )}
</StyledGamesContainer>
      </StyledMainContainer>
      <Footer />

      {/* Modal de Filtros */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={"Filters"}>
        <Filters applyFilters={applyFilters} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};


const filterGames = (games, selectedFilters) => {
  const { age, hardware, franchise, gameGender } = selectedFilters;

  return games.filter(game => {
    const matchAge = age.length === 0 || age.includes(game.ageRating);
    const matchHardware = hardware.length === 0 || (
      game.system && hardware.some(value => game.system.includes(value))
    );
    const matchFranchise = franchise.length === 0 || franchise.includes(game.franchise);
    const matchGameGender = gameGender.length === 0 || gameGender.some(value => game.genres.includes(value));

    const matchAllFilters = matchAge && matchHardware && matchFranchise && matchGameGender;

    return matchAllFilters;
  });
};


const removeFilter = (filterCategory, value, setSelectedFilters) => {
  setSelectedFilters((prevFilters) => {
    const updatedFilters = { ...prevFilters };
    updatedFilters[filterCategory] = updatedFilters[filterCategory].filter((item) => item !== value);
    return updatedFilters;
  });
};

export default GameStore