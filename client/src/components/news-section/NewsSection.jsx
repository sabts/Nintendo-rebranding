import React from "react";
import { BiggerNewsCard, SmallNewsCard } from "../ui/news-card/NewsCard"; 
import { StyledNewsContainer, StyledSmallNewsGrid } from "./news-section-styles";

const featuredNews = {
  image: '/home/donkey kong news mobile.png',
  title: 'Oh Banana! Donkey Kong Bananza Direct',
  date: 'DD/MM/YY',
  description: 'In eros sapien, posuere non ante sit amet, venenatis consectetur metus...',
  url: '/news/donkey-kong'
};

const smallNewsList = [
  {
    image: '/home/sale news mobile.png',
    title: 'Summer Sale: Save on a cool selection of games',
    date: 'DD/MM/YY',
    url: '/news/summer-sale'
  },
  {
    image: '/home/fornite super news mobile.png',
    title: 'Unleash your true power in Fortnite Battle Royale',
    date: 'DD/MM/YY',
    url: '/news/fortnite'
  },
  {
    image: '/home/pokemon news mobile.png',
    title: 'Pokémon Legends: Z-A arrives October 16, 2025!',
    date: 'DD/MM/YY',
    url: '/news/pokemon legends-z-a'
  },
  {
    image: '/home/switch news mobile.png',
    title: 'Nintendo Switch 2 sets record, selling over 3.5 million units globally in first four days',
    date: 'DD/MM/YY',
     url: '/news/switch 2'
  }
];

const NewsSection = () => {
  return (

    < StyledNewsContainer>
      <h2>News</h2>
      <BiggerNewsCard featuredNews={featuredNews} />
      
      <StyledSmallNewsGrid>
      {smallNewsList.map((news, index) => (
        <SmallNewsCard key={index} news={news} />
      ))}
        </StyledSmallNewsGrid>
    </ StyledNewsContainer>
  );
};

export default NewsSection;