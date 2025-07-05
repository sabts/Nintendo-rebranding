import { useState } from "react"
import { StyledFavoriteButton, StyledSecondaryButton } from "./buttons-styles"

export const PrimaryButton = ({children, action}) => {
    return <button>{children}</button>
}

export const SecondaryButton = ({children, action}) => {
    return <StyledSecondaryButton>{children}</StyledSecondaryButton>
}

export const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState(false);
  
    return (
      <StyledFavoriteButton onClick={() => setIsFavorite(!isFavorite)}>
        <img
          src={
            isFavorite
              ? "/icons/favorite true - icon.svg"
              : "/icons/favorite false - icon.svg"
          }
          alt="Favorite icon"
        />
      </StyledFavoriteButton>
    );
  };