import styled from 'styled-components';
import COLORS from '../../../styles/colors';

const StyledInputText = styled.input`
	display: flex;
	width: 288px;
	height: 40px;
	padding: 8px 16px;
	align-items: center;
	gap: 10px;
	border-radius: 8px;
	border: 1px solid ${COLORS.variants.primaryOpacity};

	&:focus {
		border-color: ${COLORS.base.tertiary};
		outline: none;
	}
`;

const StyledPasswordInput = styled.div`
	display: flex;
	flex-wrap: wrap;
	position: relative;
`;

const StyledImgPassword = styled.img`
	position: absolute;
	top: 20%;
	right: 4%;
`;

export { StyledInputText, StyledPasswordInput, StyledImgPassword };
