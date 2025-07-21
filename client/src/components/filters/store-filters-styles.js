import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
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

const StyledButton = styled.button`
	padding: 8px 12px;
	background-color: red;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	margin-top: 10px;

	&:hover {
		background-color: darkred;
	}
`;

export {
	StyledForm,
	StyledFilterLabel,
	StyledInputRange,
	StyledCheckboxLabel,
	StyledButton
};
