import { useState } from "react";
import { CATEGORIES_TAB } from "../../constants/home-tabs-content";
import { StyledCategoryTabsWrapper, StyledGameCard, StyledGamesGrid, StyledTabButton, StyledTabsHeader } from "./game-section-styles";
import { GamePreview } from "../ui/game-cards/GameCards";
import { GAME_DATA } from "../../constants/game-data";


const CATEGORIES = ['Recent Release', 'Best Seller', 'Offers'];

const GameSection = () => {
    const [activeTab, setActiveTab] = useState(CATEGORIES[0]);
    const filteredGames = filterGamesByCategory(activeTab);

    return (
        <StyledCategoryTabsWrapper>
          <h2>Games</h2>
          <StyledTabsHeader>
            {CATEGORIES.map((category) => (
              <StyledTabButton
                key={category}
                $active={category === activeTab}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </StyledTabButton>
            ))}
          </StyledTabsHeader>
    
          <StyledGamesGrid>
  {filteredGames.map((game) => (
    <GamePreview
    key={game.name}
    name={game.name}
    thumbnail={game.thumbnail}
    price={game.price}
    isFavorite={game.isFavorite} 
    />
  ))}
</StyledGamesGrid>
        </StyledCategoryTabsWrapper>
      );
}

const filterGamesByCategory = (category) => {
  return GAME_DATA.filter((game) => game.tags.includes(category));
};

export  default GameSection