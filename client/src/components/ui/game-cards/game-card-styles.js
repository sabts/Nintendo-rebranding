import styled from 'styled-components';

const StyledCard = styled.div`
	width: 140px;
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
	background-color: cornsilk;
	//background-image: url(${props => props.src});;
	background-size: cover;
	background-position: center;
`;

const StyledInfoArea = styled.div`
	padding: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledGameDetails = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledGameTitle = styled.span`
	font-size: 0.8rem;
	color: #555;
`;

const StyledGamePrice = styled.span`
	font-size: 0.85rem;
	font-weight: bold;
	color: #000;
`;

const StyledFavoriteWrapper = styled.div`
	width: 24px;
	height: 24px;
`;

export {
	StyledCard,
	StyledImageArea,
	StyledInfoArea,
	StyledGameDetails,
	StyledGameTitle,
	StyledGamePrice
};
