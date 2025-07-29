import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyledMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	padding-bottom: 70px;
	gap: 20px;

	h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: ${COLORS.base.secondary};
	}
`;

const StyledEmptyCartContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 20px;
	gap: 24px;
`;

const StyledTextContainer = styled.div`
	display: flex;
	height: 150px;
	width: 290px;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	padding: 20px;
	color: ${COLORS.base.secondary};
	text-align: center;

	a {
		font-weight: 600;
		font-size: 1rem;
		color: ${COLORS.base.tertiary};
		text-decoration: underline;
	}

	span {
		font-size: 1rem;
		color: ${COLORS.base.secondary};
		margin-top: 8px;
		display: block;
	}
`;

const StyledCardsSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 170px;
	position: relative;
`;

const StyledFinalPrice = styled.div`
	display: flex;
	position: absolute;
	bottom: -40%;
	background-color: ${COLORS.base.primary};
	border-top: 1px solid ${COLORS.variants.primaryOpacity};
	align-items: center;
	justify-content: space-between;
	width: 360px;
	height: 90px;
`;

const StyledImg = styled.img`
	width: 218px;
	height: 132px;
	display: flex;
	justify-self: center;
`;

export {
	StyledMainContainer,
	StyledEmptyCartContainer,
	StyledTextContainer,
	StyledImg,
	StyledCardsSection,
	StyledFinalPrice
};
