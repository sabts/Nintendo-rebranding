import styled from 'styled-components';
import COLORS from '../../../styles/colors';

const StyledCard = styled.article`
	display: flex;
	flex-direction: column;
	width: ${({ $variant }) => ($variant === 'featured' ? '100%' : '170px')};
	border-radius: 20px;
	overflow: hidden;
	margin-bottom: 20px;
`;

const StyledImage = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: ${({ $variant }) =>
		$variant === 'featured' ? '20px' : '14px'};
`;

const StyledContent = styled.div`
	padding: ${({ $variant }) => ($variant === 'featured' ? '16px 0' : '8px 0')};
`;

const StyledDate = styled.p`
	font-size: 0.75rem;
	color: ${COLORS.base.secondary};
	margin: 0 0 4px;
`;

const StyledTitle = styled.h3`
	font-size: ${({ $variant }) =>
		$variant === 'featured' ? '1rem' : '0.875rem'};
	color: ${COLORS.base.secondary};
	font-weight: bold;
	margin: 0 0 4px;
`;

const StyledDescription = styled.p`
	font-size: 0.8rem;
	color: ${COLORS.base.secondary};
	margin-bottom: 8px;
	display: ${({ $variant }) => ($variant === 'featured' ? 'block' : 'none')};
`;

const StyledReadMore = styled.a`
	font-size: 0.875rem;
	color: ${COLORS.base.tertiary};
	font-weight: bold;
	cursor: pointer;
	border-bottom: 1px solid ${COLORS.base.tertiary};
`;

export {
	StyledCard,
	StyledImage,
	StyledContent,
	StyledDate,
	StyledTitle,
	StyledDescription,
	StyledReadMore
};
