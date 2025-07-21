import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Profile from '../../pages/profile/Profile';
import Layout from '../layout/Layout';
import NewsDetail from '../../pages/news-detail/NewsDetail';
import GameProfile from '../../pages/game-profile/GameProfile';
import GameStore from '../../pages/game-store/GameStore';
import ShoppingCart from '../../pages/shopping-cart/ShoppingCart';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';

const Router = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/games' element={<GameStore/>}/>
					<Route path='/game/:slug' element={<GameProfile />} />
					<Route path='/news/:id' element={<NewsDetail />} />
					<Route path='/shopping-cart' element={<ShoppingCart />} />
				</Route>
			</Routes>
		</>
	);
};
export default Router;
