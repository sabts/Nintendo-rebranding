import { useContext } from "react";
import { GameStoreCard } from "../../components/ui/game-cards/GameCards"
import { AuthContext } from "../../lib/context/AuthContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { StyledFilterButton, StyledGamesContainer, StyledMainContainer, StyledTag, StyledTagsSection, StyledTitleSection } from "./game-store-styles";
import { TertiaryButton } from "../../components/ui/buttons/Buttons";

const GameStore = () => {
  const { games } = useContext(AuthContext);
  return (<>
    <Header />
    <StyledMainContainer>
      <section>
        <StyledTitleSection>
          <h3>Games</h3>
          <StyledFilterButton>Filters</StyledFilterButton>
        </StyledTitleSection>
        <StyledTagsSection><StyledTag>tag</StyledTag> <StyledTag>tag</StyledTag> <StyledTag>tag</StyledTag> <StyledTag>tag</StyledTag></StyledTagsSection>
      </section>
      <StyledGamesContainer>
        {games.map((game) => (
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
  </>
  );
}

export default GameStore