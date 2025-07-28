import { StyledCartActionSection, StyledCartDetailRow, StyledCartGameTitle, StyledCartTextSection, StyledContainer, StyledImg, StyledLeftContainer } from "./cart-cart-styles"

const CartCard = ({ gameIn }) => {
return   <StyledContainer>
    <StyledLeftContainer>
  <StyledImg src={gameIn.thumbnail} alt="Item image" />
  <StyledCartTextSection>
        <StyledCartGameTitle>Title{gameIn.title}</StyledCartGameTitle>
        <StyledCartDetailRow>
          <span>Version:</span>
          <span>{gameIn.version}</span>
        </StyledCartDetailRow>
        <StyledCartDetailRow>
          <span>Hardware:</span>
          <span>{gameIn.hardware}</span>
        </StyledCartDetailRow>
      </StyledCartTextSection>
      </StyledLeftContainer>
  <StyledCartActionSection>
    <img src="/icons/close - icon.svg" alt="Remove item" />
    <span>Price</span>
  </StyledCartActionSection>
</StyledContainer>
}

export default CartCard
