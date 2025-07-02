import { StyledTabContainer, SyledButtonCategory } from "./menu-styles";

const Tabs = ({ tabs, activeTab, onTabChange }) => {
    return (
      <StyledTabContainer>
        {tabs.map(tab => (
          <SyledButtonCategory key={tab.title} onClick={() => onTabChange(tab.title)}>
            <img src={tab.icon} alt={`${tab.title} icon`} />
            {tab.title}
          </SyledButtonCategory>
        ))}
      </StyledTabContainer>
    );
  };
  
  export default Tabs;