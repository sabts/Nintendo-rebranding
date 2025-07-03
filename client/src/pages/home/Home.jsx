import { useContext } from 'react';
import { AuthContext } from '../../lib/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import GameSection from '../../components/games-home-section/GamesSection';

const Home = () => {
	const { user } = useContext(AuthContext);
	return (<>
			<Header/>
			<Hero/>
			<GameSection/>
		</>
	);
};

export default Home;
