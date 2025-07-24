import styled from 'styled-components';
import COLORS from '../../../styles/colors';

const StyledPrimaryButton = styled.button`
	display: flex;
	width: 116px;
	height: 40px;
	padding: 13px 11.246px 12.035px 11.691px;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	background-color: ${COLORS.base.tertiary};
	border: none;
	color: ${COLORS.base.primary};

	&:hover {
		background-color: ${COLORS.gradients.tertiary};
	}

	&:disabled {
		background-color: ${COLORS.variants.tertiarySaturated};
		cursor: not-allowed;
	}
`;

const StyledSecondaryButton = styled.button`
	display: flex;
	width: 116px;
	height: 40px;
	padding: 13px 11.246px 12.035px 11.691px;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	background-color: transparent;
	border: 1px solid
		${({ $isBackgroundDark }) =>
			$isBackgroundDark ? COLORS.base.primary : COLORS.base.tertiary};
	color: ${({ $isBackgroundDark }) =>
		$isBackgroundDark ? COLORS.base.primary : COLORS.base.tertiary};
	font-weight: 700;
`;

const StyledTertiaryButton = styled.button`
	display: flex;
	width: fit-content;
	height: 40px;
	padding: 13px 11.246px 12.035px 4px;
	justify-content: flex-start;
	align-items: center;
	background-color: transparent;
	border: none;
	border-bottom: 1px solid ${COLORS.base.tertiary};
	color: ${COLORS.base.tertiary};
	font-weight: 700;
`;

const StyledFavoriteButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 34px;
	height: 34px;
	border-radius: 50%;

	background-color: ${({ $isCardPreview }) =>
		$isCardPreview ? COLORS.base.tertiary : 'transparent'};
	border: 1px solid
		${({ $isCardPreview }) =>
			$isCardPreview ? COLORS.base.primary : COLORS.base.secondary};

	img {
		width: 24px;
		height: 24px;
		object-fit: contain;
	}
`;

export {
	StyledPrimaryButton,
	StyledFavoriteButton,
	StyledTertiaryButton,
	StyledSecondaryButton
};
