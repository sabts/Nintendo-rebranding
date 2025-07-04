import { FavoriteButton } from "../buttons/Buttons"
import { Card, FavoriteWrapper, GamePrice, GameTitle, InfoArea } from "./game-card-styles";

export const GamePreview = ({ name, thumbnail, price, isFavorite }) => {
      return (
        <Card>
          <img src={thumbnail} alt={name} />
          <InfoArea>
            <div>
              <GameTitle>{name}</GameTitle>
              <GamePrice>{price}</GamePrice>
            </div>
            <FavoriteWrapper>
              <FavoriteButton active={isFavorite} />
            </FavoriteWrapper>
          </InfoArea>
        </Card>
      );
    };
export const GameStoreSite = () => {
    return <>
     <FavoriteButton/>
     </>
}