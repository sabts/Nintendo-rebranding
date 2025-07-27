import styled from 'styled-components';

const StyledModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	backdrop-filter: blur(4px);
`;

const StyledModalContent = styled.div`
	background-color: white;
	padding: 24px;
	border-radius: 20px;
	width: 359px;
	height: 480px;
	position: relative;
	overflow: scroll;
`;

const StyledCloseButton = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	border: none;
	background: none;
	font-size: 20px;
	cursor: pointer;
`;

export { StyledModalOverlay, StyledModalContent, StyledCloseButton };
