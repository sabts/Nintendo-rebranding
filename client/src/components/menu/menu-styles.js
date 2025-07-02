import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyledMenu = styled.div`
	display: flex;
	position: fixed;
	bottom: 64px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 10;
	padding: 18px 24px;
	justify-content: space-evenly;
	width: 354px;
	align-items: center;
	border-radius: 44px;
	background-color: ${COLORS.base.tertiary};
	box-shadow: 0px 1px 1px 0px #e0c4c6 inset, 0px 1px 2px 0px #b6000d;
	list-style: none;
`;

const StyledButton = styled.button`
	background: none;
	border: none;
`;

const StyledTabContainer = styled.div`
	position: fixed;
	display: flex;
	justify-content: space-evenly;
	bottom: 520px;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 20px 20px 0px 0px;
	background: ${COLORS.variants.primaryOpacity};
	width: 354px;
	height: 97px;
`;

const StyledContentContainer = styled.div`
	position: fixed;
	bottom: 90px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	width: 354px;
	height: 430px;
	padding: 50px 24px;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
`;

const SyledButtonCategory = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 121px;
	height: 98px;
	border: none;
	background-color: transparent;
`;

const StyledContentButtons = styled.button`
	display: flex;
	width: 298px;
	height: 48px;
	padding: 8px 16px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 10px;
	border-radius: 16px;
	border: 1px solid ${COLORS.variants.primaryOpacity};
`;

export {
	StyledMenu,
	StyledButton,
	StyledTabContainer,
	StyledContentContainer,
	SyledButtonCategory,
	StyledContentButtons
};
