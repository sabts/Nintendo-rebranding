import React from "react";
import { BiggerNewsCard, SmallNewsCard } from "../ui/news-card/NewsCard"; 
import { StyledNewsContainer, StyledSmallNewsGrid } from "./news-section-styles";
import { NEWS } from "../../constants/news";

const NewsSection = () => {
  // Seleccionar la noticia destacada, por ejemplo, la primera del arreglo
  const featuredNews = NEWS[0];

  // Las demás noticias pequeñas
  const smallNewsList = NEWS.slice(1);

  return (
    <StyledNewsContainer>
      <h2>News</h2>
      {/* Mostrar la noticia destacada */}
      <BiggerNewsCard featuredNews={featuredNews} />
      
      {/* Mostrar las noticias pequeñas */}
      <StyledSmallNewsGrid>
        {smallNewsList.map((news, index) => (
          <SmallNewsCard key={index} news={news} />
        ))}
      </StyledSmallNewsGrid>
    </StyledNewsContainer>
  );
};

export default NewsSection;