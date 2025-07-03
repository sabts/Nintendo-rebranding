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
	background: ${COLORS.base.primary};
`;

const SyledButtonCategory = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 121px;
	height: 98px;
	background-color: transparent;
	padding: 20px;
	font-size: 20px;
	font-weight: 700;
	line-height: 200%;
	color: ${COLORS.base.tertiary};
	border: none;
`;

const StyledContentButtons = styled.div`
	display: flex;
	flex-direction: column;
	width: 298px;
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 300%;
	padding: 8px 16px;
	justify-content: space-between;
	align-items: flex-start;
	gap: 10px;
	border-radius: 20px;
	border: 1px solid ${COLORS.variants.primaryOpacity};
`;

const StyledDropMenu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;
export {
	StyledMenu,
	StyledButton,
	StyledTabContainer,
	StyledContentContainer,
	SyledButtonCategory,
	StyledContentButtons,
	StyledDropMenu
};
