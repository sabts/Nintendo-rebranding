import styled from 'styled-components';

export const Card = styled.div`
	width: 140px;
	border-radius: 20px;
	background-color: #fff;
	overflow: hidden;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const ImageArea = styled.div`
	width: 100%;
	height: 140px;
	background-color: cornsilk;
	//background-image: url(${props => props.src});;
	background-size: cover;
	background-position: center;
`;

export const InfoArea = styled.div`
	padding: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const GameDetails = styled.div`
	display: flex;
	flex-direction: column;
`;

export const GameTitle = styled.span`
	font-size: 0.8rem;
	color: #555;
`;

export const GamePrice = styled.span`
	font-size: 0.85rem;
	font-weight: bold;
	color: #000;
`;

export const FavoriteWrapper = styled.div`
	width: 24px;
	height: 24px;
`;
