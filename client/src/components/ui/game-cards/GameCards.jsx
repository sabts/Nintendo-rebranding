import { Link } from "react-router-dom";
import { FavoriteButton } from "../buttons/Buttons"
import { StyledCard, StyledGamePrice, StyledGameTitle, StyledInfoArea } from "./game-card-styles";

export const GamePreview = ({ name, thumbnail, isFavorite }) => {
  return (
    <Link to={`/game/${name}`}>
      <StyledCard>
        <img src={thumbnail} alt={name} />
        <StyledInfoArea>
          <div>
            <StyledGameTitle>{name}</StyledGameTitle>
          </div>
          <FavoriteButton active={isFavorite} />
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