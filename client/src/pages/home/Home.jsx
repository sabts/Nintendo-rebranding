import { useContext } from 'react';
import { AuthContext } from '../../lib/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';

const Home = () => {
	const { user } = useContext(AuthContext);
	return (<>
			<Header/>
			<Hero/>
		</>
	);
};

export default Home;
