import styled from "styled-components";
import COLORS from "../../styles/colors";

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;

const StyledTitleSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

const StyledGamesContainer = styled.div`
  display: flex;
   justify-content:center;
 align-items: flex-end;
align-content: flex-end;
gap: 24px;
flex-wrap: wrap;
`;

const StyledFilterButton = styled.button`
	display: flex;
	width: fit-content;
	justify-content: flex-start;
	align-items: center;
	background-color: transparent;
	border: none;
	color: ${COLORS.base.secondary};
	font-weight: 700;
`;

const StyledTagsSection = styled.section`
  display: flex;
 align-items: flex-start;
gap: 20px;
`;


const StyledTag = styled.div`
display: flex;
padding: 6px 14.445px 6.591px 12px;
justify-content: center;
align-items: flex-end;
gap: 21px;
	width: fit-content;
border-radius: 20px;
background-color:${COLORS.base.tertiary}
`

export { StyledMainContainer, StyledTitleSection, StyledGamesContainer, StyledFilterButton, StyledTagsSection, StyledTag }