import { Link } from "react-router-dom";
import { FavoriteButton } from "../buttons/Buttons"
import { StyledCard, StyledGamePrice, StyledGameTitle, StyledInfoArea } from "./game-card-styles";
import { URL_BASE } from "../../../lib/utils/api";

export const GamePreview = ({ name, slug, thumbnail }) => {
  return (
    <Link to={`/game/${slug}`}>
      <StyledCard>
        <picture>
          <source media="(min-width: 1024px)" srcSet={URL_BASE + thumbnail.desktop} />
          <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={URL_BASE + thumbnail.tablet} />
          <source media="(min-width:380 px)" srcSet={URL_BASE + thumbnail.mobile} />
          <img src={URL_BASE + thumbnail.mobile} alt={name} />
        </picture>
        <StyledInfoArea>
          <div>
            <StyledGameTitle>{name}</StyledGameTitle>
          </div>
          <FavoriteButton $isCardPreview={true} />
        </StyledInfoArea>
      </StyledCard>
    </Link>
  );
};

export const GameStoreSite = ({ name, slug, thumbnail, price, isFavorite }) => {
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
          <StyledGamePrice>{price}</StyledGamePrice>
        </div>
        <FavoriteButton isCardPreview={false} />
      </StyledInfoArea>
    </StyledCard>
  );
};