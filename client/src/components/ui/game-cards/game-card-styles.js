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
	background-size: cover;
	background-position: center;
	position: relative;
`;

const StyledInfoArea = styled.div`
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
	width: 100px;
	height: 30px;

	font-size: 0.8rem;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const StyledStoreCard = styled.div`
	display: flex;
	width: 154px;
	height: 244px;
	align-items: center;
	gap: 8px;
	flex-direction: column;
	border-radius: 1rem;
	overflow: hidden;
	border: 1px solid ${COLORS.variants.primaryOpacity};

	@media (min-width: 768px) {
		max-width: 340px;
	}

	@media (min-width: 1024px) {
		max-width: 380px;
	}
`;

const StyledStoreInfo = styled.div`
	color: ${COLORS.base.secondary};
	display: flex;
	align-items: flex-start;
	padding: 0px 12px 8px 16px;
	gap: 0.5rem;

	@media (min-width: 768px) {
		padding: 1.25rem;
	}

	@media (min-width: 1024px) {
		padding: 1.5rem;
	}
`;

const StyledStoreTitle = styled.h3`
	font-size: 0.875rem;
	font-weight: 600;
	width: 100px;
	height: 36px;
	margin: 0;
	color: ${COLORS.base.secondary};
	overflow: hidden;
	text-overflow: ellipsis;

	@media (min-width: 768px) {
		font-size: 1.1rem;
	}

	@media (min-width: 1024px) {
		font-size: 1.2rem;
	}
`;

const StyledGamePrice = styled.p`
	font-size: 0.85rem;
	font-weight: bold;

	@media (min-width: 768px) {
		font-size: 1rem;
	}
`;

export {
	StyledCard,
	StyledImageArea,
	StyledInfoArea,
	StyledGameDetails,
	StyledGameTitle,
	StyledStoreCard,
	StyledStoreInfo,
	StyledStoreTitle,
	StyledGamePrice
};
