import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyledMainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 20px;
	gap: 20px;
	margin-bottom: 20px;
`;

const StyledProfileContainer = styled.div`
    width: 150px;
	height: 150px;
	border-radius: 50%;
	background-color: ${({ bg }) => bg};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 24px;
	border: 2px solid ${COLORS.base.primary};
	overflow: hidden;
`;

const StyledProfileImg = styled.img`
    width: 100%;
	height: 100%;
`;

const StyledSelectionGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;
`;

const StyledBoxSelection = styled.div`
	width: 94px;
	height: 94px;
	border-radius: 20px;
	background-color: ${({ color }) => color};
	border: ${({ isSelected }) =>
		isSelected
			? `2px solid ${COLORS.base.tertiary}`
			: `1px solid ${COLORS.variants.primaryOpacity}`};
	cursor: pointer;
	transition: border 0.2s ease-in-out;
`;

export {
	StyledMainContainer,
	StyledProfileContainer,
	StyledProfileImg,
	StyledSelectionGrid,
	StyledBoxSelection
};
