import styled from 'styled-components';
import COLORS from '../../../styles/colors';

const StyledContainer = styled.section`
	display: flex;
	padding: 12px;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	width: 357px;
	height: 98px;
	border-radius: 16px;
	border: 1px solid ${COLORS.variants.primaryOpacity};
`;

const StyledLeftContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`;

const StyledImg = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 14px;
	overflow: hidden;
	object-fit: cover;
`;

const StyledCartTextSection = styled.div`
	display: flex;
	width: 170px;
	justify-content: center;
	flex-direction: column;
	height: 70px;
	gap: 4px;
`;

const StyledCartGameTitle = styled.h5`
	height: 70px;
	font-size: 14px;
	font-weight: 600;
	margin: 0;
	color: ${COLORS.base.secondary};
`;

const StyledCartDetailRow = styled.div`
	display: flex;
	gap: 8px;
	font-size: 12px;
	color: ${COLORS.base.secondary};

	span:first-child {
		font-weight: 500;
		color: ${COLORS.base.secondary};
	}

	&:not(:last-child) {
		margin-bottom: 4px;
	}
`;

const StyledCartActionSection = styled.div`
	display: flex;
	height: 70px;
	justify-content: space-around;
	flex-direction: column;
	align-items: flex-end;
	gap: 8px;

	img {
		width: 18px;
		height: 18px;
		cursor: pointer;
	}
`;

const StyledCartPrice = styled.span`
	font-size: 14px;
	font-weight: 700;
	color: ${COLORS.base.secondary};
`;

export {
	StyledContainer,
	StyledLeftContainer,
	StyledImg,
	StyledCartTextSection,
	StyledCartGameTitle,
	StyledCartDetailRow,
	StyledCartActionSection,
	StyledCartPrice
};
