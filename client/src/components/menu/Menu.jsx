import { useContext, useState } from 'react';
import { AuthContext } from '../../lib/context/AuthContext';
import { StyledButton, StyledMenu } from './menu-styles';
import Tabs from './Tabs';
import Content from './Content';
import { MENU_CONTENT } from '../../constants/menu-content';

const Menu = () => {
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(MENU_CONTENT[0].title);
  const currentSection = MENU_CONTENT.find(section => section.title === activeTab);

  return (
    <>
      <StyledMenu>
        {/* BOTÓN DE MENÚ */}
        <StyledButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img
            src={
              isMenuOpen
                ? 'public/icons/close  menu - icon.svg'
                : '/icons/menu - hamburger icon mobile.svg'
            }
            alt="menu toggle icon"
          />
        </StyledButton>

        {/* BOTÓN DE BÚSQUEDA */}
        <StyledButton onClick={() => {/* lógica de búsqueda */}}>
          <img src="/icons/menu icon - search.svg" alt="search menu icon" />
        </StyledButton>

        {/* BOTÓN DE USUARIO */}
        <StyledButton onClick={() => {/* lógica de usuario */}}>
          <img
            src={user?.profileImageUrl || '/icons/no user - icon.svg'}
            alt={user ? `${user.username} profile` : 'no user connected menu icon'}
          />
        </StyledButton>
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