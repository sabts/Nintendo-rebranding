import { useContext } from 'react';
import { AuthContext } from '../../lib/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import GameSection from '../../components/games-home-section/GamesSection';
import { MyNintendoBanner, NintendoOnlineBanner } from '../../components/promo-banner/PromoBanners';
import { StyledLine, StyledMainContainer } from './home-styles';
import NewsSection from '../../components/news-section/NewsSection';

const Home = () => {
	const { user } = useContext(AuthContext);
	return (<>
			<Header/>
			<Hero/>
			<GameSection/>
			<StyledLine />
			<NintendoOnlineBanner/>
			<MyNintendoBanner/>
			<StyledLine />
			<NewsSection/>
		</>
	);
};

export default Home;
