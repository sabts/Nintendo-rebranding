import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyledGamePurchaseSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledSectionTitle = styled.h4`
	font-size: 1.125rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
`;

const StyledToggleContainer = styled.div`
	display: flex;
	height: 42px;
	padding: 8px 30px 8px 29px;
	border-radius: 24px;
	justify-content: center;
	align-items: flex-start;
	gap: 13px;
	background-color: ${COLORS.variants.primaryOpacity};
	margin-bottom: 16px;
`;

const StyledToggleButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px 12px;
	border-radius: 24px;
	font-size: 0.875rem;
	font-weight: 700;
	border: ${({ $isActive }) =>
		$isActive ? `1px solid ${COLORS.base.tertiary}` : 'none'};

	background-color: ${({ $isActive }) =>
		$isActive ? `${COLORS.base.primary}` : 'transparent'};
	color: ${({ $isActive }) =>
		$isActive ? `${COLORS.base.tertiary}` : `${COLORS.base.secondary}`};
	cursor: pointer;
	transition: background-color 0.2s ease;
`;

const StyledRadioContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 22px;
	justify-content: center;
	gap: 13px;
	margin-bottom: 16px;
`;

const StyledRadioSelectButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 24px;
	width: 260px;
	height: 44px;
	border: 2px solid
		${({ $isActive }) =>
			$isActive ? COLORS.base.tertiary : COLORS.variants.primaryOpacity};
	background-color: ${COLORS.base.primary};
	color: ${({ $isActive }) =>
		$isActive ? COLORS.base.tertiary : COLORS.base.secondary};
	font-size: 0.875rem;
	font-weight: 700;
	cursor: pointer;
	transition: all 0.2s ease;
`;
700;

export {
	StyledGamePurchaseSection,
	StyledToggleContainer,
	StyledSectionTitle,
	StyledToggleButton,
	StyledRadioContainer,
	StyledRadioSelectButton
};
