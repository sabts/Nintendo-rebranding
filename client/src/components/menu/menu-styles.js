import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyledMenu = styled.div`
	display: flex;
	position: fixed;
	bottom: 64px;
	left: 50%;
	transform: translateX(-50%);
	padding: 18px 24px;
	justify-content: space-evenly;
	width: 354px;
	align-items: center;
	border-radius: 44px;
	background-color: ${COLORS.base.tertiary};
	box-shadow: 0px 1px 1px 0px #e0c4c6 inset, 0px 1px 2px 0px #b6000d;
	list-style: none;
`;

const StyledRadio = styled.input`
	display: none;
`;

const StyledUl = styled.ul`
	display: flex;
	gap: 2rem;
`;

export { StyledMenu, StyledRadio, StyledUl };
