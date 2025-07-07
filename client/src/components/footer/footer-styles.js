import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyledFooterWrapper = styled.footer`
	background: ${COLORS.base.secondary};
	height: 312px;
	padding: 35px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	margin-top: 40px;
`;

const StyledTextLinks = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 16px 24px;
	max-width: 600px;
	text-align: center;

	span {
		color: ${COLORS.base.primary};
		font-size: 0.75rem;
		font-weight: 500;
	}
`;

const StyledIcons = styled.div`
	display: flex;
	gap: 24px;

	a picture img {
		width: 24px;
		height: 24px;
		object-fit: contain;
		transition: opacity 0.2s;

		&:hover {
			opacity: 0.6;
		}
	}
`;

export { StyledFooterWrapper, StyledTextLinks, StyledIcons };
