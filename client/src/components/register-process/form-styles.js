import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyledMainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 20px;
	gap: 20px;
	margin-bottom: 20px;
`;

const StyledInputText = styled.input`
	display: flex;
	width: 288px;
	height: 40px;
	padding: 8px 16px;
	align-items: center;
	gap: 10px;
	border-radius: 8px;
	border: 1px solid ${COLORS.variants.primaryOpacity};
	position: relative;

	&:focus {
		border-color: ${COLORS.base.tertiary};
		outline: none;
	}
`;

const StyledSelectContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 288px;
	height: 40px;
`;

const StyledSelect = styled.select`
	display: flex;
	width: 288px;
	height: 40px;
	padding: 8px 16px;
	align-items: center;
	gap: 10px;
	border-radius: 8px;
	border: 1px solid ${COLORS.variants.primaryOpacity};
	/* background-image: url('/public/icons/arrow-icon.svg');
	background-repeat: no-repeat;
	background-position: right 16px center; */
	//appearance: none;
	cursor: pointer;

	&:focus {
		border-color: ${COLORS.base.tertiary};
		outline: none;
	}

	option {
		padding: 10px;
		font-size: 16px;
	}

	option:hover {
		background-color: #f4f4f4;
	}

	option:active {
		background-color: #ddd;
	}
`;

const StyledImgPassword = styled.img`
position: relative;
top: -34px;
left: 88%;
`;


export { StyledMainContainer, StyledInputText, StyledSelectContainer, StyledSelect, StyledImgPassword };
