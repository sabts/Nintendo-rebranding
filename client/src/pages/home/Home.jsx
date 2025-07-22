import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import GameSection from '../../components/games-home-section/GamesSection';
import { MyNintendoBanner, NintendoOnlineBanner } from '../../components/promo-banner/PromoBanners';
import { StyledLine, StyledMainContainer } from './home-styles';
import NewsSection from '../../components/news-section/NewsSection';
import Footer from '../../components/footer/Footer';

const Home = () => {
	return (<>
		<Header />
		<Hero />
		<GameSection />
		<StyledLine />
		<NintendoOnlineBanner />
		<MyNintendoBanner />
		<StyledLine />
		<NewsSection />
		<Footer />
	</>
	);
};

export default Home;
