import { FavoriteButton } from "../buttons/Buttons"
import { StyledCard, StyledGamePrice, StyledGameTitle, StyledInfoArea } from "./game-card-styles";

export const GamePreview = ({ name, thumbnail, price, isFavorite }) => {
      return (
        <StyledCard>
          <img src={thumbnail} alt={name} />
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
export const GameStoreSite = () => {
    return <>
     <FavoriteButton/>
     </>
}