import { StyledCard, StyledContent, StyledDate, StyledDescription, StyledImage, StyledReadMore, StyledTitle} from "./news-card-styles"

const BiggerNewsCard = ({ featuredNews }) => {
  return (
    <>
      <StyledCard $variant="featured"> 
        <StyledImage src={featuredNews.thumbnail} alt={featuredNews.title} $variant="featured" /> 
        <StyledContent $variant="featured">
          <StyledDate>{featuredNews.date}</StyledDate>
          <StyledTitle $variant="featured">
            {featuredNews.title}
          </StyledTitle>
          <StyledDescription $variant="featured"> 
            {featuredNews.body.summary}
          </StyledDescription>
          <StyledReadMore href={featuredNews.url}>Read more</StyledReadMore>
        </StyledContent>
      </StyledCard>
    </>
  );
};

const SmallNewsCard = ({ news }) => {
  return (
    <>
      <StyledCard $variant="small"> 
        <StyledImage src={news.thumbnail} alt={news.title} $variant="small" /> 
        <StyledContent $variant="small"> 
          <StyledDate>{news.date}</StyledDate>
          <StyledTitle $variant="small">
            {news.title}
          </StyledTitle>
          <StyledReadMore href={news.url}>Read more</StyledReadMore>
        </StyledContent>
      </StyledCard>
    </>
  );
};
export { BiggerNewsCard ,SmallNewsCard }