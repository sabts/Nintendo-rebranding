import { Link } from 'react-router-dom';
import { StyledArrowToggle, StyledContentButtons, StyledContentContainer, StyledDropMenu} from './menu-styles';
import { useState } from 'react';

const Content = ({ items, onItemSelect }) => {
  
  const [visibleSubitems, setVisibleSubitems] = useState({});
  return (
    <StyledContentContainer>
      {items.map((item) => (
        <div key={item.key}>
          <Link to={item.url}>
            <div
              onClick={() =>
                setVisibleSubitems((prevState) => ({
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
                    {item.subitems.map((subitem) => (
                      <li key={subitem.key}>{subitem.label}</li>
                    ))}
                  </ul>
                )}
              </StyledContentButtons>
            </div>
          </Link>
        </div>
      ))}
    </StyledContentContainer>
  );
};

export default Content;