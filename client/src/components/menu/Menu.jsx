import { useState } from 'react';
import { StyledButton, StyledMenu, StyledUserImage } from './menu-styles';
import Tabs from './Tabs';
import Content from './Content';
import { MENU_CONTENT } from '../../constants/menu-content';
import { useUserContext } from '../../lib/providers/user.providers';
import { Link, useNavigate } from 'react-router-dom';
import { URL_BASE } from '../../lib/utils/user-api';

const Menu = () => {
  const { user } = useUserContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(MENU_CONTENT[0].title);
  const currentSection = MENU_CONTENT.find(section => section.title === activeTab);
  const navigate = useNavigate();

  const profilePicture = () => {
    if (user && user.profilePicture.img) {
      return URL_BASE + user.profilePicture.img
    } else {
      return '/icons/no user - icon.svg'
    }
  }

  return (
    <>
      <StyledMenu>
        {/* BOTÓN DE MENÚ */}
        <StyledButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img
            src={
              isMenuOpen
                ? '/icons/close  menu - icon.svg'
                : '/icons/menu - hamburger icon mobile.svg'
            }
            alt="menu toggle icon"
          />
        </StyledButton>

        {/* BOTÓN DE BÚSQUEDA */}
        <StyledButton onClick={() => {/* lógica de búsqueda */ }}>
          <img src="/icons/menu icon - search.svg" alt="search menu icon" />
        </StyledButton>

        {/* BOTÓN DE USUARIO */}
        <Link to={"/profile"}>
          <StyledButton >
            <StyledUserImage bg={user?.profilePicture?.backgroundColor}
              src={profilePicture()}
              alt={user ? `${user.username} profile` : 'no user connected menu icon'}
            />
          </StyledButton>
        </Link>
      </StyledMenu>

      {/* MENÚ EXPANDIDO */}
      {isMenuOpen && (
        <div>
          <Tabs tabs={MENU_CONTENT} activeTab={activeTab} onTabChange={setActiveTab} />
          {currentSection && <Content items={currentSection.items} />}
        </div>
      )}
    </>
  );
};

export default Menu;

{/*  <div>
			{!user ? (
			  <nav>
				<StyledUl>
				  <li>
					<Link to='/login'>Login</Link>
				  </li>
				  <li>
					<Link to='/register'>Register</Link>
				  </li>
				</StyledUl>
			  </nav>
			) : (
			  <StyledUl>
				<li>
				  <Link to='/profile'>Profile</Link>
				</li>
			  </StyledUl>
			)}
		  </div> */}


{/* <img
  src={user?.profilePicture?.img || '/icons/no-user-icon.svg'}
  alt={user ? `${user.username} profile` : 'no user connected menu icon'}
  className={user?.profilePicture?.backgroundColor || ''}
/> */}