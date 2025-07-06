import { StyledCard, StyledContent, StyledDate, StyledDescription, StyledImage, StyledReadMore, StyledTitle, StyledWrapper } from "./news-card-styles"

const BiggerNewsCard = ({ featuredNews }) => {
  return (
    <StyledWrapper>
      <StyledCard variant="featured">
        <StyledImage src={featuredNews.image} alt={featuredNews.title} variant="featured" />
        <StyledContent variant="featured">
          <StyledDate>{featuredNews.date}</StyledDate>
          <StyledTitle variant="featured">{featuredNews.title}</StyledTitle>
          <StyledDescription variant="featured">{featuredNews.description}</StyledDescription>
          <StyledReadMore href={featuredNews.url}>Read more</StyledReadMore>
        </StyledContent>
      </StyledCard>
    </StyledWrapper>
  );
};

const SmallNewsCard = ({ news }) => {
  return (
    <StyledWrapper>
      <StyledCard variant="small">
        <StyledImage src={news.image} alt={news.title} variant="small" />
        <StyledContent variant="small">
          <StyledDate>{news.date}</StyledDate>
          <StyledTitle variant="small">{news.title}</StyledTitle>
          <StyledReadMore href={news.url}>Read more</StyledReadMore>
        </StyledContent>
      </StyledCard>
    </StyledWrapper>
  );
};

export { BiggerNewsCard ,SmallNewsCard }