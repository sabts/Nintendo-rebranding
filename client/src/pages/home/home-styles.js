import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyledMainContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledLine = styled.div`
	display: flex;
	align-self: center;
	justify-self: center;
	width: 80%;
	height: 1px;
	background-color: ${COLORS.variants.secondaryOpacity};
	margin: 24px;
`;
export { StyledMainContainer, StyledLine };
