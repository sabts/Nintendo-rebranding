import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../lib/context/AuthContext';
import { StyledHeader, StyledMenu, StyledRadio } from './menu-styles';

const Menu = () => {
	const { user } = useContext(AuthContext);

	return (
		<>
		  <StyledHeader>
			<Link to='/'>
			  <picture>
				<source
				  srcSet='/icons/shoping cart icon ipad and desktop.svg'
				  media='(min-width: 1024px)'
				/>
				<source
				  srcSet='/icons/shoping cart icon ipad and desktop.svg'
				  media='(min-width: 768px)'
				/>
				<source
				  srcSet='/icons/nintendo logo small.png'
				  media='(min-width: 393px)'
				/>
				<img src='/icons/nintendo logo small.png' alt='Nintendo logo' />
			  </picture>
			</Link>
			
			<Link to='/'>
			  <picture>
				<source
				  srcSet='/icons/shoping cart icon ipad and desktop.svg'
				  media='(min-width: 1024px)'
				/>
				<source
				  srcSet='/icons/shoping cart icon ipad and desktop.svg'
				  media='(min-width: 768px)'
				/>
				<source
				  srcSet='/icons/shoping cart icon mobile.svg'
				  media='(min-width: 393px)'
				/>
				<img src='/icons/shoping cart icon mobile.svg' alt='Shopping cart icon' />
			  </picture>
			</Link>
		  </StyledHeader>
	

		  <section>
  <StyledMenu>
    <StyledRadio type="radio" name="menu" id="menu-home" />
    <label htmlFor="menu-home">
      <img src="/icons/menu - hamburger icon mobile.svg" alt="hamburger menu icon" />
    </label>

    <StyledRadio type="radio" name="menu" id="menu-search" />
    <label htmlFor="menu-search">
      <img src="/icons/menu icon - search.svg" alt="search menu icon" />
    </label>

    <StyledRadio type="radio" name="menu" id="menu-user" />
    <label htmlFor="menu-user">
      <img src="/icons/no user - icon.svg" alt="no user connected menu icon" />
    </label>
  </StyledMenu>
</section>

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