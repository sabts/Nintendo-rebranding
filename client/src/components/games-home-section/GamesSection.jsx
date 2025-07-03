import { useState } from "react";
import { CATEGORIES_TAB } from "../../constants/home-tabs-content";
import { StyledCategoryTabsWrapper, StyledGameCard, StyledGamesGrid, StyledTabButton, StyledTabsHeader } from "./game-section-styles";


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
              <StyledGameCard key={index}>
                <img src={game.image} alt={game.title} />
                <div className="info">
                  <p>{game.title}</p>
                  <img src={game.icon} alt="arrow icon" />
                </div>
              </StyledGameCard>
            ))}
          </StyledGamesGrid>
        </StyledCategoryTabsWrapper>
      );
}


export  default GameSection