import styled from 'styled-components';
import COLORS from '../../styles/colors';

const BaseBanner = styled.div`
	display: flex;
	flex-direction: column;
	padding: 24px;
	border-radius: 20px;
	position: relative;
	overflow: hidden;
	width: 343px;
	justify-self: center;
	padding: 20px;
`;

const StyledNintendoOnlineWrap = styled(BaseBanner)`
	height: 340px;
	background: ${COLORS.gradients.accent};
	margin-bottom: 20px;
`;

const StyledMyNintendoWrap = styled(BaseBanner)`
	height: 176px;
	background: ${COLORS.base.tertiary};
`;

const BannerContentNintendoOnline = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 2;

	h4 {
		font-size: 20px;
		margin: 0 0 8px 0;
		color: ${COLORS.base.primary};
	}

	p {
		font-size: 14px;
		margin: 0 0 16px 0;
		text-align: center;
		color: ${COLORS.base.primary};
	}
`;

const BannerContentMyNintendo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	z-index: 2;

	h4 {
		font-size: 20px;
		margin: 0 0 8px 0;
		color: ${COLORS.base.primary};
	}

	p {
		font-size: 14px;
		margin: 0 0 16px 0;
		color: ${COLORS.base.primary};
	}
`;

const BannerImage = styled.img`
	position: absolute;
	bottom: 0;
	right: 0;
	max-width: 100%;
	height: auto;
	z-index: 1;
`;

export {
	StyledNintendoOnlineWrap,
	StyledMyNintendoWrap,
	BannerContentNintendoOnline,
	BannerContentMyNintendo,
	BannerImage
};
