import { useState } from "react"

export const PrimaryButton = ({children, action}) => {
    return <button>{children}</button>
}

export const SecondaryButton = ({children, action}) => {
    return <button>{children}</button>
}

export const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState(false);
  
    return (
      <button onClick={() => setIsFavorite(!isFavorite)}>
        <img
          src={
            isFavorite
              ? "/icons/favorite true - icon.svg"
              : "/icons/favorite false - icon.svg"
          }
          alt="Favorite icon"
        />
      </button>
    );
  };