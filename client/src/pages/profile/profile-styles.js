import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyledMainContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	gap: 24px;
`;

const StyledPhoto = styled.img`
	width: 100%;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	gap: 8px;
`;

///// PERFIL CONECTADO /////

const StyledMainContainerConnect = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

const StyledProfileImg = styled.img`
	/* position: relative;
	top: -50px; */
	margin-top: -70px;
	width: 150px;
	height: 150px;
	background: ${({ bg }) => bg || 'none'};
	border: 8px solid #fbfbfb;
	border-radius: 50%;
`;
const StyledSectionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-inline: 20px;
	gap: 20px;
	justify-content: center;
	align-items: center;
`;

const StyledAchievementsandPointsContainer = styled.section`
	display: flex;
	justify-content: center;
	gap: 24px;
`;

const StyledAchievementsandPoints = styled.div`
	display: flex;
	flex-direction: column;
	width: 132px;
	height: 140px;
	padding: 12px 29px;
	justify-content: center;
	align-items: center;
	//gap: 24px;
	border-radius: 20px;
	background-color: ${COLORS.base.tertiary};
	box-shadow: 2px 1px 1.2px 0px #fbfbfb inset, 0px 3px 0px 0px #b6000d;
	color: ${COLORS.base.primary};
`;

const StyledMyinfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const StyledMyInfoDiv = styled.div`
	padding-left: 8px;
	display: flex;

	strong {
		width: 100px;
	}
`;

export {
	StyledMainContainer,
	StyledButtonsContainer,
	StyledPhoto,
	StyledMainContainerConnect,
	StyledProfileImg,
	StyledSectionsContainer,
	StyledAchievementsandPointsContainer,
	StyledAchievementsandPoints,
	StyledMyinfoContainer,
	StyledMyInfoDiv
};
