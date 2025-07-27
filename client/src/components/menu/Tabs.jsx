import { NavLink } from "react-router-dom";
import { StyledTabContainer, StyledButtonCategory } from "./menu-styles";

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <StyledTabContainer>
      {tabs.map(tab => (
        <StyledButtonCategory
          key={tab.title}
          onClick={() => onTabChange(tab.title)}
          activeTab={activeTab === tab.title}
        >
          <img src={tab.icon} alt={`${tab.title} icon`} />
          {tab.title}
        </StyledButtonCategory>
      ))}
    </StyledTabContainer>
  );
};

export default Tabs;