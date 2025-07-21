import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { StyledEmptyCartContainer, StyledImg, StyledMainContainer, StyledTextContainer } from "./shopping-cart-styles";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const hasItem = cart.length > 0; 

  return (
    <>
    <Header/>
    <StyledMainContainer>
      <h3>Shopping Cart ({cart.length})</h3>

      {!hasItem ? (
        <StyledEmptyCartContainer>
          <StyledImg src="/icons/shopping-cart.svg " alt="Empty cart" />
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
        <section>
          <div>
            <img src="/icons/shop icon menu.svg" alt="Item image" />
            <div>
              <h5>Game title</h5>
              <div>
                <span>Version:</span>
                <span>digital</span>
              </div>
              <div>
                <span>Hardware:</span>
                <span>Switch 2</span>
              </div>
            </div>
            <div>
              <img src="/icons/close - icon.svg" alt="Remove item" />
              <span>Price</span>
            </div>
          </div>
        </section>
      )}
      </StyledMainContainer>
      <Footer/>
    </>
  );
};

export default ShoppingCart;