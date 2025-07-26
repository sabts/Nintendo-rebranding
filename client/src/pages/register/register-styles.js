import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyledMainContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	padding: 44px;
	padding-bottom: 200px;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
`;

/////////////////////////////
//Proceso de Img de perfil //
////////////////////////////

const StyledProfileContainer = styled.div`
	width: 100px;
	height: 100px;
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
	max-width: 100%;
	max-height: 100%;
`;

const StyledImageBox = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 12px;
	background-color: #111;
	border: ${({ isSelected }) =>
		isSelected ? '2px solid red' : '1px solid white'};
	cursor: pointer;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		max-width: 100%;
		max-height: 100%;
		object-fit: cover;
	}
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
	StyledForm,
	StyledButtonsContainer,
	StyledProfileContainer,
	StyledProfileImg,
	StyledSelectionGrid,
	StyledBoxSelection
};
