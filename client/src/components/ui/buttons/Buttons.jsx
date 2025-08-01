import { useState } from 'react';
import {
	StyledFavoriteButton,
	StyledPrimaryButton,
	StyledSecondaryButton,
	StyledTertiaryButton
} from './buttons-styles';
import { useUserContext } from '../../../lib/providers/user.providers';
import { addFavoriteGame } from '../../../lib/utils/user-api';

const PrimaryButton = ({ children, action }) => {
	return <StyledPrimaryButton onClick={action}>{children}</StyledPrimaryButton>;
};

const SecondaryButton = ({ children, isBackgroundDark, action }) => {
	return (
		<StyledSecondaryButton
			$isBackgroundDark={isBackgroundDark}
			onClick={action}
		>
			{children}
		</StyledSecondaryButton>
	);
};

const TertiaryButton = ({ children, action }) => {
	return <StyledTertiaryButton>{children}</StyledTertiaryButton>;
};

const FavoriteButton = ({ isCardPreview, gameId, initialFavoriteState }) => {
	const { user } = useUserContext();
	const [isFavorite, setIsFavorite] = useState(initialFavoriteState);

	const handleFavoriteClick = async event => {
		event.preventDefault();
		event.stopPropagation();

		const newFavoriteState = !isFavorite;

		await addFavoriteGame(user._id, gameId, newFavoriteState);
		setIsFavorite(newFavoriteState);
	};

	return (
		<StyledFavoriteButton
			$isCardPreview={isCardPreview}
			onClick={handleFavoriteClick}
		>
			<img
				src={
					isCardPreview
						? isFavorite
							? '/icons/favorite true - icon.svg'
							: '/icons/favorite false - icon.svg'
						: isFavorite
							? '/icons/favorite true - icon.svg'
							: '/icons/empty-favorite-star-isnotpreview.svg'
				}
				alt='Favorite icon'
			/>
		</StyledFavoriteButton>
	);
};

//problemas en favoritos: no cambia el estado cuando lo quito de favoritos (tal vez deberia crear otro de patch o simplificar la controllador que solo guarde los que tenga el estado true)

// en el controlador de favoritos controlar estado del true o false y que simplemnte cambie que lo guarde o lo quite del array

export { PrimaryButton, SecondaryButton, TertiaryButton, FavoriteButton };
