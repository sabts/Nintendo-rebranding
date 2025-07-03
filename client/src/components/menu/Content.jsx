import { Link } from 'react-router-dom';
import { StyledContentButtons, StyledContentContainer, StyledDropMenu, SyledButtonCategory } from './menu-styles';
import { useState } from 'react';

const Content = ({ items }) => {
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
  <div>
    <span>{item.label}</span>
    {item.subitems && (
      <span>{visibleSubitems[item.key] ? '↓' : '↑'}</span>
    )}
  </div>

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