import { useState } from "react"
import { StyledFavoriteButton, StyledPrimaryButton, StyledSecondaryButton, StyledTertiaryButton } from "./buttons-styles"

const PrimaryButton = ({ children, action }) => {
  return <StyledPrimaryButton>{children}</StyledPrimaryButton>
}

const SecondaryButton = ({ children, action }) => {
  return <StyledSecondaryButton>{children}</StyledSecondaryButton>
}

const TertiaryButton = ({ children, action }) => {

  return <StyledTertiaryButton>{children}</StyledTertiaryButton>
}

const FavoriteButton = ({ isCardPreview }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (event) => {
    event.preventDefault();
    event.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <StyledFavoriteButton
      $isCardPreview={isCardPreview}
      onClick={handleFavoriteClick}
    >
      <img
        src={
          isCardPreview
            ? isFavorite
              ? "/icons/favorite true - icon.svg"
              : "/icons/favorite false - icon.svg"
            : isFavorite
              ? "/icons/favorite true - icon.svg"
              : "/icons/empty-favorite-star-isnotpreview.svg"
        }
        alt="Favorite icon"
      />
    </StyledFavoriteButton>
  );
};


export { PrimaryButton, SecondaryButton, TertiaryButton, FavoriteButton }
