import { Link } from "react-router-dom";
import { FavoriteButton } from "../buttons/Buttons"
import { StyledCard, StyledGamePrice, StyledGameTitle, StyledInfoArea, StyledStoreCard, StyledStoreInfo, StyledStoreTitle } from "./game-card-styles";
import { URL_BASE } from "../../../lib/utils/games-api";

export const GamePreview = ({ name, slug, thumbnail }) => {
  return (
    <StyledCard>
      <Link to={`/game/${slug}`}>
        <picture>
          <source media="(min-width: 1024px)" srcSet={URL_BASE + thumbnail.desktop} />
          <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={URL_BASE + thumbnail.tablet} />
          <source media="(min-width:380 px)" srcSet={URL_BASE + thumbnail.mobile} />
          <img src={URL_BASE + thumbnail.mobile} alt={name} />
        </picture>
      </Link>
      <StyledInfoArea>
        <div>
          <StyledGameTitle>{name}</StyledGameTitle>
        </div>
        <FavoriteButton isCardPreview={true} />
      </StyledInfoArea>
    </StyledCard>
  );
};

export const GameStoreCard = ({ name, slug, thumbnail, price, isFavorite }) => {
  return (
    <StyledStoreCard>
      <Link to={`/game/${slug}`}>
        <picture>
          <source media="(min-width: 1024px)" srcSet={URL_BASE + thumbnail.desktop} />
          <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={URL_BASE + thumbnail.tablet} />
          <source media="(max-width: 767px)" srcSet={URL_BASE + thumbnail.mobile} />
          <img src={URL_BASE + thumbnail.mobile} alt={name} />
        </picture>
      </Link>
      <StyledStoreInfo>
        <div>
          <StyledStoreTitle>{name}</StyledStoreTitle>
          <StyledGamePrice>{price}</StyledGamePrice>
        </div>
        <FavoriteButton isCardPreview={false} />
      </StyledStoreInfo>
    </StyledStoreCard>
  );
};