import { useContext } from 'react';
import { AuthContext } from '../../lib/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { StyledMainContainer } from './home-styles';
import Header from '../../components/header/Header';

const Home = () => {
	const { user } = useContext(AuthContext);
	return (<>
			<Header/>
			<StyledMainContainer>
		</StyledMainContainer>
		</>
	);
};

export default Home;
