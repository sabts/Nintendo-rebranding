import { Link } from 'react-router-dom';
import { StyledContentButtons, StyledContentContainer, StyledDropMenu} from './menu-styles';
import { useState } from 'react';

const Content = ({ items }) => {
  const [visibleSubitems, setVisibleSubitems] = useState({});
  return (
    <StyledContentContainer>
      {items.map((item) => (
        <div key={item.key}>
          <Link to={item.url}>
            <StyledContentButtons>
              <div
                onClick={() =>
                  setVisibleSubitems((prevState) => ({
                    ...prevState,
                    [item.key]: !prevState[item.key],
                  }))
                }
              >
                <span>{item.label}</span>
                {item.subitems && (
                  <span>{visibleSubitems[item.key] ? '↓' : '↑'}</span>
                )}
              </div>
            </StyledContentButtons>
          </Link>

          {/* Render subitems */}
          {item.subitems && visibleSubitems[item.key] && (
            <ul>
              {item.subitems.map((subitem) => (
                <li key={subitem.key}>
                  <Link to={subitem.url}>{subitem.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </StyledContentContainer>
  );
};

export default Content;