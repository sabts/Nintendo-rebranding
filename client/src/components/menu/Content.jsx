import { Link } from 'react-router-dom';

const Content = ({ items }) => {
  return (
    <div>
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
            <div key={item.key}>
              <Link to={item.url}>{item.label}</Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Content;