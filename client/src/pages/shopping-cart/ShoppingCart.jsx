import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { StyledEmptyCartContainer, StyledImg, StyledMainContainer, StyledTextContainer } from "./shopping-cart-styles";
import CartCard from "../../components/ui/cart-card/CartCard";
import { useUserContext } from "../../lib/providers/user.providers";
import { getProductsinCart } from "../../lib/utils/user-api";

const ShoppingCart = () => {
  const { user } = useUserContext();
  const [gamesInCart, setGamesInCart] = useState([]);

  useEffect(() => {
    const getGamesInCart = async () => {
      if (user?._id) {
        const games = await getProductsinCart(user._id);
        setGamesInCart(games); // Actualiza el estado con los juegos recibidos
      }
    };
    
    getGamesInCart();
  }, [user]); // Solo se ejecuta cuando el 'user' cambia

  // Verifica si el carrito está vacío en base al estado 'gamesInCart'
  const hasItem = gamesInCart.length > 0;

  return (
    <>
      <Header />
      <StyledMainContainer>
        <h3>Shopping Cart ({gamesInCart.length})</h3>

        {!hasItem ? (
          <StyledEmptyCartContainer>
            <StyledImg src="/icons/shopping-cart.svg" alt="Empty cart" />
            <StyledTextContainer>
              <div>
                <strong>Your cart is empty, why not</strong>
                <div>
                  <Link to={"/games"}>add something fun</Link>
                  <strong>?</strong>
                </div>
              </div>
              <span>When you spend 50€ or more you unlock free shipping</span>
            </StyledTextContainer>
          </StyledEmptyCartContainer>
        ) : (
          gamesInCart.map((game) => {
            return <CartCard key={game._id} gameIn={game} />;
          })
        )}
      </StyledMainContainer>
      <Footer />
    </>
  );
};

export default ShoppingCart;