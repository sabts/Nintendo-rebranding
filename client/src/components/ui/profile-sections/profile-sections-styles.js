import styled from 'styled-components';
import COLORS from '../../../styles/colors';

const StyledStoreExpandableSection = styled.div`
	border: 1px solid ${COLORS.variants.primaryOpacity};
	width: 346px;
	height: fit-content;
	border-radius: 20px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
`;

const StyledStoreSectionHeader = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: transparent;
	border: none;
	width: 100%;
	padding: 16px;
	cursor: pointer;

	&:focus {
		outline: none;
	}
`;

const StyledStoreHeaderLeft = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;

	img {
		width: 32px;
		height: 32px;
		object-fit: cover;
		border-radius: 25%;
	}

	span {
		font-weight: 700;
		font-size: 1rem;
		color: ${COLORS.base.secondary};
	}
`;

const StyledStoreArrowToggle = styled.div`
	transition: transform 0.3s ease;
	transform: rotate(${props => (props.$isOpen ? '180deg' : '0deg')});

	svg {
		width: 16px;
		height: 16px;
		fill: #ccc;
	}
`;

const StyledStoreSectionBody = styled.div`
	padding: 0 16px 16px 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;

	span {
		color: ${COLORS.base.secondary};
	}

	strong {
		font-weight: bold;
		color: ${COLORS.base.secondary};
	}

	p {
		margin: 0;
		font-size: 0.95rem;
	}
`;

const StyledButton = styled.button`
	display: flex;
	height: 28px;
	padding: 8px 0 8px 0;
	justify-content: center;
	align-items: center;
	font-size: 0.875rem;
	font-weight: 600;
	color: ${COLORS.base.secondary};
	border: none;
	border-top: 1px solid ${COLORS.variants.primaryOpacity};
	background-color: transparent;
`;

export {
	StyledStoreExpandableSection,
	StyledStoreSectionHeader,
	StyledStoreHeaderLeft,
	StyledStoreArrowToggle,
	StyledStoreSectionBody,
	StyledButton
};
