import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Profile from '../../pages/profile/Profile';
import Layout from '../layout/Layout';
import LoginPage from '../../pages/login/LoginPage';
import RegisterPage from '../../pages/register/RegisterPage';
import NewsDetail from '../../pages/news-detail/NewsDetail';
import GameProfile from '../../pages/game-profile/GameProfile';
import GameStore from '../../pages/game-store/GameStore';

const Router = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='register' element={<RegisterPage />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/games' element={<GameStore/>}/>
					<Route path='/game/:slug' element={<GameProfile />} />
					<Route path='/news/:id' element={<NewsDetail />} />
				</Route>
			</Routes>
		</>
	);
};
export default Router;
