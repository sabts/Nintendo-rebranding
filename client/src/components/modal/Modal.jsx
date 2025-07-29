import { StyledCloseButton, StyledModalContent, StyledModalOverlay } from "./modal-styles";

const Modal = ({ title, children, isOpen, onClose }) => {
    if (!isOpen) return null; 

    return    <StyledModalOverlay>
      <StyledModalContent>
        <div>
          <h5>{title}</h5>
        <StyledCloseButton onClick={onClose}><img src="/icons/close - icon.svg"/></StyledCloseButton>
        {children}
        </div>
      </StyledModalContent>
    </StyledModalOverlay>
}

export default Modal