import styled from 'styled-components';
import COLORS from '../../../styles/colors';

const StyledCard = styled.div`
	width: 194px;
	border-radius: 20px;
	background-color: #fff;
	overflow: hidden;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const StyledImageArea = styled.div`
	width: 100%;
	height: 140px;
	//background-image: url(${props => props.src});
	background-size: cover;
	background-position: center;
	position: relative;
	overflow: hidden;
`;

const StyledInfoArea = styled.div`
	//width: 194px;
	height: 60px;
	padding: 8px 12px;
	display: flex;
	height: 60px;
	margin-top: -50px;
	justify-content: space-between;
	align-items: center;
	background-image: ${COLORS.gradients.tertiary};
	color: ${COLORS.base.primary};
	backdrop-filter: blur(4px);
`;

const StyledGameDetails = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledGameTitle = styled.span`
	display: flex;
	//width: 120px;
	//height: 20px;
	font-size: 0.8rem;
`;

const StyledGamePrice = styled.span`
	font-size: 0.85rem;
	font-weight: bold;
`;

export {
	StyledCard,
	StyledImageArea,
	StyledInfoArea,
	StyledGameDetails,
	StyledGameTitle,
	StyledGamePrice
};
