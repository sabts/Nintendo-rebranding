import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyledHeader = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 34px;
	padding-inline: 1.25rem;
	height: 140px;
	background-color: ${COLORS.base.tertiary};
`;

export { StyledHeader };
