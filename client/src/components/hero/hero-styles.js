import styled from 'styled-components';

const StyledHeroWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem 1rem;
	text-align: center;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		text-align: left;
		padding: 4rem 6rem;
	}
`;

const StyledHeroContent = styled.div`
	max-width: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	img {
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 1.25rem;
		margin-bottom: 2rem;
	}
`;

const StyledHeroButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	justify-content: center;

	a {
		width: 160px;
		padding: 0.75rem 1.5rem;
		border-radius: 20px;
		font-weight: bold;
		font-size: 0.9rem;
		text-decoration: none;
		display: inline-block;

		&.red {
			background-color: #e70012;
			color: white;
		}

		&.outline {
			background-color: white;
			border: 2px solid #e70012;
			color: #e70012;
		}
	}
`;

const StyledHeroImage = styled.div`
	margin-top: 2rem;

	img {
		width: 100%;
		max-width: 400px;
	}

	@media (min-width: 768px) {
		margin-top: 0;
		img {
			max-width: 600px;
		}
	}
`;

export {
	StyledHeroWrapper,
	StyledHeroContent,
	StyledHeroButtons,
	StyledHeroImage
};
