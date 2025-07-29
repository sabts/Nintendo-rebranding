import { useState } from 'react';
import { CATEGORIES_TAB } from '../../constants/home-tabs-content';
import {
  StyledCategoryTabsWrapper,
  StyledGameCard,
  StyledGamesGrid,
  StyledTabButton,
  StyledTabsHeader
} from './game-section-styles';

import { GamePreview } from '../ui/game-cards/GameCards';
import { useGameContext } from '../../lib/providers/game.providers';

const CATEGORIES = ['Recent Release', 'Best Seller', 'Offers'];

const GameSection = () => {
  const { games } = useGameContext()
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);

  //const filteredGames = filterGamesByCategory(activeTab);
  const filteredGames = Array.isArray(games) ? filterGamesByCategory(activeTab, games) : [];

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
            key={game.uuid}
            name={game.name}
            slug={game.slug}
            thumbnail={game.thumbnail}
            price={game.price}
          />
        ))}
      </StyledGamesGrid>
    </StyledCategoryTabsWrapper>
  );
};

// Filtra los juegos por categoría
const filterGamesByCategory = (category, games) => {
  return games.filter((game) => game.tags.includes(category));
};

export default GameSection;
