import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyleOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	backdrop-filter: blur(4px);
`;

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

const StyledUserImage = styled.img`
	height: 32px;
	width: 32px;
	border-radius: 50%;
	background: ${({ bg }) => bg || 'none'};
	border: 1px solid ${COLORS.base.primary};
`;

const StyledTabContainer = styled.div`
	position: fixed;
	display: flex;
	justify-content: space-evenly;
	bottom: 515px;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 20px 20px 0px 0px;
	background: ${COLORS.variants.primaryOpacity};
	width: 354px;
	height: 97px;
	z-index: 10;
	overflow: hidden;
`;

const StyledContentContainer = styled.div`
	position: fixed;
	bottom: 90px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	width: 354px;
	height: 430px;
	padding: 50px 24px 68px 24px;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
	background: ${COLORS.base.primary};
	z-index: 1;
	overflow: scroll;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
`;

const StyledArrowToggle = styled.div`
	transition: transform 0.3s ease;
	transform: rotate(${props => (props.$isOpen ? '180deg' : '0deg')});

	svg {
		width: 16px;
		height: 16px;
		fill: #ccc;
	}
`;

const StyledButtonCategory = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 121px;
	height: 98px;
	background: ${({ $activeTab }) =>
		$activeTab ? COLORS.base.primary : COLORS.variants.primaryOpacity};
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
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: 300%;
	padding: 8px 16px;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
	border-radius: 20px;
	border: 1px solid ${COLORS.variants.primaryOpacity};
	height: fit-content;

	ul {
		width: 298px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 16px;
		list-style: none;
		font-size: 1rem;
	}
`;

const StyledDropMenu = styled.div`
	display: flex;
	width: 270px;
	height: fit-content;
	justify-content: space-between;
	align-items: center;
`;

const StyledUl = styled.ul`
	/* ul {
		display: ${({ visibleSubitems }) => (visibleSubitems ? 'flex' : 'none')};
		flex-direction: column;
		gap: 20px;
		list-style: none;
		padding-left: 20px;
		font-size: 16px;
		border: 1px solid black;
	} */
`;

export {
	StyleOverlay,
	StyledMenu,
	StyledButton,
	StyledUserImage,
	StyledTabContainer,
	StyledContentContainer,
	StyledArrowToggle,
	StyledButtonCategory,
	StyledContentButtons,
	StyledDropMenu
};
