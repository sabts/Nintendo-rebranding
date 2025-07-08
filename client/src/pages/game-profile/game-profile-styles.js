import styled from 'styled-components';

const StyledPage = styled.div`
	max-width: 800px;
	margin: auto;
	padding: 2rem;
`;

const StyledTitle = styled.h1`
	font-size: 2rem;
	margin-bottom: 1rem;
`;

const StyledImage = styled.img`
	width: 100%;
	border-radius: 1rem;
	margin-bottom: 1rem;
`;

const StyledTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;

const StyledTag = styled.span`
	background: #f3f4f6;
	padding: 0.25rem 0.5rem;
	border-radius: 0.25rem;
	font-size: 0.75rem;
`;

const StyledSection = styled.div`
	margin-top: 1rem;
`;

const StyledLabel = styled.p`
	font-weight: bold;
	margin: 0.5rem 0 0.25rem;
`;

const StyledText = styled.p`
	margin: 0;
`;

export {
	StyledPage,
	StyledHeroBanner,
	StyledTitle,
	StyledTag,
	StyledSection,
	StyledLabel,
	StyledText
};
