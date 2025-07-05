import styled from 'styled-components';
import COLORS from '../../../styles/colors';

const StyledSecondaryButton = styled.button`
	display: flex;
	width: 116px;
	height: 40px;
	padding: 13px 11.246px 12.035px 11.691px;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	border: 1px solid ${COLORS.base.primary};
`;

const StyledFavoriteButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 34px;
	height: 34px;
	border-radius: 50%;
	background-color: ${COLORS.base.tertiary};
	border: 1px solid ${COLORS.base.primary};

	img {
		width: 24px;
		height: 24px;
	}
`;

export { StyledFavoriteButton, StyledSecondaryButton };
