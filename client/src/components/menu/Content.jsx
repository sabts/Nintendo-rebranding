import { Link } from 'react-router-dom';
import { StyledContentButtons, StyledContentContainer } from './menu-styles';
import { useState } from 'react';

const Content = ({ items }) => {
  const [visibleSubitems, setVisibleSubitems] = useState(false);
  return (
    <StyledContentContainer>
    {items.map((item, index) => (
      <div key={index}>
        <div
          onClick={() =>
            setVisibleSubitems((prevState) => ({
              ...prevState,
              [item.key]: !prevState[item.key], // Alterna la visibilidad de los subitems
            }))
          }
        >
          {/* Si el item tiene subitems, muestra la flecha hacia abajo o hacia arriba */}
          <div>
            {item.label}
            {item.subitems && (
              <span>{visibleSubitems[item.key] ? '↓' : '↑'}</span>
            )}
          </div>
        </div>

        {/* Mostrar los subitems solo si están visibles */}
        {visibleSubitems[item.key] && item.subitems && (
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