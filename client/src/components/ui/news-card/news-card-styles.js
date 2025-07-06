import styled from 'styled-components';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

const StyledCard = styled.article`
	display: flex;
	flex-direction: column;
	width: ${({ variant }) => (variant === 'featured' ? '100%' : '160px')};
	background-color: #fff;
	border-radius: 16px;
	overflow: hidden;
`;

const StyledImage = styled.img`
	width: 100%;
	height: ${({ variant }) => (variant === 'featured' ? 'auto' : '90px')};
	object-fit: cover;
	border-radius: ${({ variant }) =>
		variant === 'featured' ? '16px 16px 0 0' : '12px'};
`;

const StyledContent = styled.div`
	padding: ${({ variant }) => (variant === 'featured' ? '16px' : '8px 0')};
`;

const StyledDate = styled.p`
	font-size: 0.75rem;
	color: #555;
	margin: 0 0 4px;
`;

const StyledTitle = styled.h3`
	font-size: ${({ variant }) => (variant === 'featured' ? '1rem' : '0.875rem')};
	color: #2f2f2f;
	font-weight: bold;
	margin: 0 0 4px;
`;

const StyledDescription = styled.p`
	font-size: 0.8rem;
	color: #555;
	margin-bottom: 8px;
	display: ${({ variant }) => (variant === 'featured' ? 'block' : 'none')};
`;

const StyledReadMore = styled.a`
	font-size: 0.75rem;
	color: #e70012;
	font-weight: bold;
	cursor: pointer;
`;

export {
	StyledWrapper,
	StyledCard,
	StyledImage,
	StyledContent,
	StyledDate,
	StyledTitle,
	StyledDescription,
	StyledReadMore
};
