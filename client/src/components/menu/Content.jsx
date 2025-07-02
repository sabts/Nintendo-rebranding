import { Link } from 'react-router-dom';
import { StyledContentButtons, StyledContentContainer } from './menu-styles';

const Content = ({ items }) => {
  return (
    <StyledContentContainer>
      {items.map((item, index) => {
        if (item.subitems) {
          return (
            <div key={index}>
              <div>{item.label}</div>
              <ul>
                {item.subitems.map(subitem => (
                  <li key={subitem.key}>
                    <Link to={subitem.url}>{subitem.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        } else {
          return (
            <StyledContentButtons key={item.key}>
              <Link to={item.url}>{item.label}</Link>
            </StyledContentButtons>
          );
        }
      })}
    </StyledContentContainer>
  );
};

export default Content;