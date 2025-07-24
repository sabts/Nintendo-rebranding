import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyledMainContainer = styled.section`
	display: flex;
    height: 400px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 44px;
	gap: 24px;

  h3 {
font-size: 20px;
font-weight: 700;
color: ${COLORS.base.secondary}
  }

  h4 {
 font-size: 20px;
font-weight: 700;
color: ${COLORS.base.secondary}
  }
`;

const StyledPhoto = styled.img`
  width: 100%;
  display: block;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
`;
export { StyledMainContainer, StyledForm, StyledPhoto };
