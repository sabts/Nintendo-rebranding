import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {
	StyledCardsSection,
	StyledEmptyCartContainer,
	StyledFinalPrice,
	StyledImg,
	StyledMainContainer,
	StyledTextContainer
} from './shopping-cart-styles';
import CartCard from '../../components/ui/cart-card/CartCard';
import { useUserContext } from '../../lib/providers/user.providers';
import {
	getProductsinCart,
	removeProductFromCart
} from '../../lib/utils/user-api';
import { PrimaryButton } from '../../components/ui/buttons/Buttons';

const ShoppingCart = () => {
	const { user } = useUserContext();
	const [gamesInCart, setGamesInCart] = useState([]);

	useEffect(() => {
		const getGamesInCart = async () => {
			if (user?._id) {
				const games = await getProductsinCart(user._id);
				setGamesInCart(games);
			}
		};

		getGamesInCart();
	}, [user]);

	const hasItem = gamesInCart.length > 0;

	const getTotalPrice = () => {
		//	console.log(gamesInCart.reduce((total, game) => total + game.price, 0));
		return gamesInCart.reduce(
			(total, game) => total + game.price.digital || game.price.physical,
			0
		);
	};

	const handleRemove = async (gameId, userId) => {
		console.log('Eliminando producto...');
		const updatedCart = await removeProductFromCart(gameId, userId);
		console.log(updatedCart);
		const games = await getProductsinCart(user._id);
		setGamesInCart(games);
	};

	return (
		<>
			<Header />
			<StyledMainContainer>
				<h3>Shopping Cart ({gamesInCart.length})</h3>

				{!hasItem ? (
					<StyledEmptyCartContainer>
						<StyledImg src='/icons/shopping-cart.svg' alt='Empty cart' />
						<StyledTextContainer>
							<div>
								<strong>Your cart is empty, why not</strong>
								<div>
									<Link to={'/games'}>add something fun</Link>
									<strong>?</strong>
								</div>
							</div>
							<span>When you spend 50€ or more you unlock free shipping</span>
						</StyledTextContainer>
					</StyledEmptyCartContainer>
				) : (
					<StyledCardsSection>
						{gamesInCart.map(game => {
							return (
								<CartCard
									key={game._id}
									gameIn={game}
									onRemove={() => handleRemove(game._id, user._id)}
								/>
							);
						})}
						<StyledFinalPrice>
							{gamesInCart && <span>Total Price: {getTotalPrice()} €</span>}
							<PrimaryButton>Continue</PrimaryButton>
						</StyledFinalPrice>
					</StyledCardsSection>
				)}
			</StyledMainContainer>
			<Footer />
		</>
	);
};

export default ShoppingCart;
