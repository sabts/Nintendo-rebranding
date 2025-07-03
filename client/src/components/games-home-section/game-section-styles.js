import styled from 'styled-components';

const StyledCategoryTabsWrapper = styled.section`
	padding: 2rem 1rem;
	background: #fff;
`;

const StyledTabsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
	gap: 0.5rem;
`;

const StyledTabButton = styled.button`
	flex: 1;
	padding: 0.5rem;
	border-radius: 999px;
	border: none;
	font-weight: bold;
	background-color: ${({ active }) => (active ? '#2F2F2F' : '#F0F0F0')};
	color: ${({ active }) => (active ? '#fff' : '#000')};
	transition: all 0.2s ease;
	cursor: pointer;
`;

const StyledGamesGrid = styled.div`
	display: grid;
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
