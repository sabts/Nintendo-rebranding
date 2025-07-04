import styled from 'styled-components';
import COLORS from '../../styles/colors';

const StyledCategoryTabsWrapper = styled.section`
	padding: 2rem 1rem;
	background: #fff;
`;

const StyledTabsHeader = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 1rem;
	width: 100%;
	height: 40px;
	border-radius: 20px;
	gap: 0.5rem;
	background-color: ${COLORS.variants.primaryOpacity};
`;

const StyledTabButton = styled.button`
	display: flex;
	padding: 0.5rem;
	height: 24px;
	padding: 4px 12px;
	border-radius: 999px;
	border: none;
	font-weight: bold;
	background-color: ${({ active }) =>
		active ? COLORS.base.tertiary : 'transparent'};
	color: ${({ active }) => (active ? '#fff' : '#000')};
	transition: all 0.2s ease;
	cursor: pointer;
`;

const StyledGamesGrid = styled.div`
	display: flex;
	gap: 1rem;
`;

const StyledGameCard = styled.div`
	border-radius: 1rem;
	overflow: hidden;
	background: #e70012;
	color: white;
	display: flex;
	flex-direction: column;

	img {
		width: 100%;
		height: auto;
	}

	.info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem;
		font-weight: bold;

		p {
			margin: 0;
			flex: 1;
		}

		img {
			width: 1rem;
			height: 1rem;
		}
	}
`;

export {
	StyledCategoryTabsWrapper,
	StyledTabsHeader,
	StyledTabButton,
	StyledGamesGrid,
	StyledGameCard
};
