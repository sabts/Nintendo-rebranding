import { Link } from 'react-router-dom';
import { StyledArrowToggle, StyledContentButtons, StyledContentContainer, StyledDropMenu} from './menu-styles';
import { useState } from 'react';

const Content = ({ items }) => {
//console.log(items)
  const [visibleSubitems, setVisibleSubitems] = useState({});
  return (
    <StyledContentContainer>
      {items.map((item, index) => (
        <div key={index}>
          <div
            onClick={() =>
              setVisibleSubitems(prevState => ({
                ...prevState,
                [item.key]: !prevState[item.key],
              }))
            }
          >
          <StyledContentButtons>
  <StyledDropMenu>
    <span>{item.label}</span>
    {item.subitems && (
      <StyledArrowToggle $isOpen={visibleSubitems[item.key]}>
<img src="/icons/arrow-icon.svg" alt="Toggle section" />
</StyledArrowToggle>
    )}
  </StyledDropMenu>

  {item.subitems && visibleSubitems[item.key] && (
    <ul>
      {item.subitems.map(subitem => (
        <li key={subitem.key}>
          <Link to={subitem.url}>{subitem.label}</Link>
        </li>
      ))}
    </ul>
  )}
</StyledContentButtons>
          </div>
        </div>
      ))}
    </StyledContentContainer>
  );
};

export default Content;