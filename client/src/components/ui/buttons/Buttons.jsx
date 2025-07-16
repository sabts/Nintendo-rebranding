import { useState } from "react"
import { StyledFavoriteButton, StyledPrimaryButton, StyledSecondaryButton } from "./buttons-styles"

export const PrimaryButton = ({ children, action }) => {
  return <StyledPrimaryButton>{children}</StyledPrimaryButton>
}

export const SecondaryButton = ({ children, action }) => {
  return <StyledSecondaryButton>{children}</StyledSecondaryButton>
}

export const FavoriteButton = ({ isCardPreview }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <StyledFavoriteButton
      $isCardPreview={isCardPreview}
      onClick={() => setIsFavorite(!isFavorite)}
    >
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