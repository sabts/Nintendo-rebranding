import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { StyledEmptyCartContainer, StyledImg, StyledMainContainer, StyledTextContainer } from "./shopping-cart-styles";
import CartCard from "../../components/ui/cart-card/CartCard";
import { useUserContext } from "../../lib/providers/user.providers";

const ShoppingCart = () => {
  const {user} = useUserContext()
  const hasItem = user?.shoppingCart?.length > 0; 
  const gamesInCart =  user?.shoppingCart || []; 
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
          <CartCard gamesIn={gamesInCart} /> 
        )}
      </StyledMainContainer>
      <Footer />
    </>
  );
};

export default ShoppingCart;