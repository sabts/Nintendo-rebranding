import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyledPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	align-self: stretch;
	padding-inline: 20px;
	color: ${COLORS.base.secondary};
	font-size: 14px;
`;

const StyledTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;
`;

const StyledTitle = styled.h2`
	font-size: 20px;
	margin-bottom: 1rem;
	width: 280px;
	font-weight: 600;
`;

const StyledImage = styled.img`
	width: 100%;
	margin-bottom: 4px;
`;

const StyledImagesDiv = styled.div`
	display: flex;
	height: 78px;
	justify-content: flex-end;
	align-items: flex-start;
	gap: 4px;
	align-self: stretch;
`;

const StyledSection = styled.div`
	margin-top: 1rem;
`;

const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
	align-self: stretch;
`;

const StyledLidiv = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 24px;
	align-self: stretch;
`;

const StyledStrongLi = styled.strong`
	width: 170px;
	font-weight: 700;
	color: ${COLORS.base.secondary};
`;

const StyledLi = styled.li`
	width: 190px;
`;

export {
	StyledPage,
	StyledImage,
	StyledImagesDiv,
	StyledTitleContainer,
	StyledTitle,
	StyledSection,
	StyledUl,
	StyledLidiv,
	StyledStrongLi,
	StyledLi
};
