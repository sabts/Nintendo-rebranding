import styled from 'styled-components';

const StyledMainContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
`;

const StyledPhoto = styled.img`
	width: 100%;
`;
export { StyledMainContainer, StyledForm, StyledButtonsContainer, StyledPhoto };
