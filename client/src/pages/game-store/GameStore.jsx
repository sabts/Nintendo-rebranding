import { useContext, useEffect, useState } from "react";
import { GameStoreCard } from "../../components/ui/game-cards/GameCards"
import { AuthContext } from "../../lib/context/AuthContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { StyledFilterButton, StyledGamesContainer, StyledMainContainer, StyledTag, StyledTagsSection, StyledTitleSection } from "./game-store-styles";;
import Modal from "../../components/modal/Modal";
import Filters from "../../components/filters/StoreFilters";
import { filtersGames } from "../../lib/utils/api";

const GameStore = () => {
  const { games } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    age: [],
    hardware: [],
    franchise: [],
    gameGender: [],
  });
  const [gamesFilter, setGamesFilter] = useState([])

  const applyFilters = async (newFilters) => {
    console.log("Filtros aplicados:", newFilters);
    const filter = await filtersGames(newFilters)
    setGamesFilter(filter)
    //lanzar peticion al back sobre la url que hemos creado para los filtros. Al metodo le pasamos por parametro newFilters
  };

  useEffect(() => {
    setGamesFilter(games)
  }, [])

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
                    <button onClick={() => removeFilter(filter, value, setSelectedFilters)}><img src="/icons/close  menu - icon.svg" /></button>
                  </StyledTag>
                ))
              ) : null
            )}
          </StyledTagsSection>
        </section>

        {/* Mostrar los juegos filtrados */}
        <StyledGamesContainer>
          {gamesFilter.map((game) => (
            <GameStoreCard
              key={game.uuid}
              name={game.name}
              slug={game.slug}
              thumbnail={game.thumbnail}
              price={game.price.digital}
            />
          ))}
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

const removeFilter = (filterCategory, value, setSelectedFilters) => {
  setSelectedFilters((prevFilters) => {
    const updatedFilters = { ...prevFilters };
    updatedFilters[filterCategory] = updatedFilters[filterCategory].filter((item) => item !== value);
    return updatedFilters;
  });
};

export default GameStore