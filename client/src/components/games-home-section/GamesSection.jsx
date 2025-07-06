import { useState } from "react";
import { CATEGORIES_TAB } from "../../constants/home-tabs-content";
import { StyledCategoryTabsWrapper, StyledGameCard, StyledGamesGrid, StyledTabButton, StyledTabsHeader } from "./game-section-styles";
import { GamePreview } from "../ui/game-cards/GameCards";


const CATEGORIES = ['Recent Release', 'Best Seller', 'Offers'];

const GAMES = {
  'Recent Release': [
    {
      title: 'Mario Kart World',
      image: '/home/mario kart game miniature mobile.png ',
      favorite: true,
    },
    {
      title: 'Street Fighter™',
      image: '/home/street fighter game miniature mobile.png ',
      favorite: false,
    },
  ],
  'Best Seller': [
    {
        title: 'Mario Kart World',
        image: '/home/mario kart game miniature mobile.png ',
        favorite: true,
      },
  ],
  Offers: [  {
    title: 'Street Fighter™',
    image: '/home/street fighter game miniature mobile.png ',
    favorite: false,
  },],
}


const GameSection = () => {
    const [activeTab, setActiveTab] = useState(CATEGORIES[0]);

    return (
        <StyledCategoryTabsWrapper>
          <h2>Games</h2>
          <StyledTabsHeader>
            {CATEGORIES.map((category) => (
              <StyledTabButton
                key={category}
                active={category === activeTab}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </StyledTabButton>
            ))}
          </StyledTabsHeader>
    
          <StyledGamesGrid>
  {GAMES[activeTab].map((game, index) => (
    <GamePreview
      key={index}
      name={game.title}
      thumbnail={game.image}
      price={game.price}
      isFavorite={game.isFavorite}
    />
  ))}
</StyledGamesGrid>
        </StyledCategoryTabsWrapper>
      );
}


export  default GameSection