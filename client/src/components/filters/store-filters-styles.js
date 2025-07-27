import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const StyledFilterLabel = styled.label`
	margin-bottom: 10px;
	font-size: 14px;
`;

const StyledInputRange = styled.input`
	margin-bottom: 20px;
`;

const StyledCheckboxLabel = styled.label`
	margin-bottom: 10px;
`;

const StyledBoxSelection = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

export {
	StyledForm,
	StyledFilterLabel,
	StyledInputRange,
	StyledCheckboxLabel,
	StyledBoxSelection
};
