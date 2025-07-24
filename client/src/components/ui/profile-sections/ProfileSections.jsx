import { useState } from "react";
import {
    StyledStoreExpandableSection,
    StyledStoreSectionHeader,
    StyledStoreHeaderLeft,
    StyledStoreArrowToggle,
    StyledStoreSectionBody,
    StyledButton,
  } from "./profile-sections-styles";


const ProfileSections = ({ title, icon, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <StyledStoreExpandableSection>
          <StyledStoreSectionHeader onClick={() => setIsOpen(!isOpen)}>
            <StyledStoreHeaderLeft>
              <img src={icon} alt={title} />
              <span>{title}</span>
            </StyledStoreHeaderLeft>
            <StyledStoreArrowToggle $isOpen={isOpen}>
              <img src="/icons/arrow-icon.svg" alt="Toggle section" />
            </StyledStoreArrowToggle>
          </StyledStoreSectionHeader>
          {isOpen && <StyledStoreSectionBody>{children}
            <StyledButton>action</StyledButton></StyledStoreSectionBody>}
        </StyledStoreExpandableSection>
      );
    };
    
  
  export default ProfileSections