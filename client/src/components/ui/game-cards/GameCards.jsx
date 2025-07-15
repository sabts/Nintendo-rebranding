import { Link } from "react-router-dom";
import { FavoriteButton } from "../buttons/Buttons"
import { StyledCard, StyledGamePrice, StyledGameTitle, StyledInfoArea } from "./game-card-styles";

export const GamePreview = ({ name, slug, thumbnail}) => {
  return (
    <Link to={`/game/${slug}`}>
    <StyledCard>
      <picture>
        <source media="(min-width:380 px)" srcSet={thumbnail.mobile} />
        <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={thumbnail.tablet} />
        <source media="(min-width: 1024px)" srcSet={thumbnail.desktop} />
        <img src={thumbnail.mobile} alt={name} />
      </picture>
      <StyledInfoArea>
        <div>
          <StyledGameTitle>{name}</StyledGameTitle>
        </div>
        <FavoriteButton />
      </StyledInfoArea>
    </StyledCard>
  </Link>
  );
};

export const GameStoreSite = ({ id, name, thumbnail, price, isFavorite }) => {
  return (
    <StyledCard>
      <Link to={`/game/${id}`}>
        <img src={thumbnail} alt={name} style={{ cursor: 'pointer' }} />
      </Link>
      <StyledInfoArea>
        <div>
          <StyledGameTitle>{name}</StyledGameTitle>
          <StyledGamePrice>{price}</StyledGamePrice>
        </div>
        <FavoriteButton active={isFavorite} />
      </StyledInfoArea>
    </StyledCard>
  );
};