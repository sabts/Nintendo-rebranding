import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyledMainContainer = styled.section`
	display: flex;
	flex-direction: column;
	padding: 24px;
	gap: 24px;
`;

const StyledUserProfile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 24px;
`;

const StyledEdtUserProfile = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 24px;
`;

const StyledPhoto = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	background: ${({ bg }) => bg || 'none'};
	border: 1px solid ${COLORS.base.primary};
`;

const StyledFieldDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledBackButton = styled.button`
	align-self: left;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	gap: 8px;
`;


//Perfil conectado

const StyledAchievementsandPointsContainer = styled.section`
display: flex;
justify-content: center;
gap: 24px
`

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
box-shadow: 2px 1px 1.2px 0px #FBFBFB inset, 0px 3px 0px 0px #B6000D;
color: ${COLORS.base.primary}
`

export {
	StyledMainContainer,
	StyledPhoto,
	StyledBackButton,
	StyledUserProfile,
	StyledEdtUserProfile,
	StyledFieldDiv,
	StyledButtonsContainer,
	StyledAchievementsandPointsContainer,
	StyledAchievementsandPoints
};
