import { useUserContext } from "../../../lib/providers/user.providers";
import { removeProductFromCart, URL_BASE } from "../../../lib/utils/user-api"
import { StyledCartActionSection, StyledCartDetailRow, StyledCartGameTitle, StyledCartTextSection, StyledContainer, StyledImg, StyledLeftContainer } from "./cart-cart-styles"

const CartCard = ({ gameIn  }) => {
  const {user} = useUserContext()
  //console.log(gameIn)
  const selectedHardware = gameIn.hardware || "Hardware not selected";
  const selectedFormat = gameIn.format || "Version not selected";
  
  const price = selectedFormat === "Digital" ? gameIn.price.digital : gameIn.price.physical;

  const handleRemove = async () => {
    console.log("Eliminando producto...");
    const updatedCart = await removeProductFromCart(gameIn._id, user._id); 
  };

  return (
    <StyledContainer>
      <StyledLeftContainer>
        {/* Mostrar la imagen del juego */}
        <StyledImg src={URL_BASE + gameIn.thumbnail.mobile} alt="Item image" />
        <StyledCartTextSection>
          {/* Mostrar el nombre del juego */}
          <StyledCartGameTitle>{gameIn.name}</StyledCartGameTitle>
          
          {/* Mostrar la versión del juego */}
          <StyledCartDetailRow>
            <span>Version:</span>
            <span>{selectedFormat}</span>
          </StyledCartDetailRow>

          {/* Mostrar el hardware seleccionado */}
          <StyledCartDetailRow>
            <span>Hardware:</span>
            <span>{selectedHardware}</span>
          </StyledCartDetailRow>
        </StyledCartTextSection>
      </StyledLeftContainer>

      {/* Sección de acción del carrito */}
      <StyledCartActionSection>
        {/* Icono para eliminar el juego */}
        <img src="/icons/close - icon.svg" alt="Remove item" onClick={handleRemove} />
        
        {/* Mostrar el precio del juego */}
        <span>{price ? price.toFixed(2) : "Price not available"} €</span>
      </StyledCartActionSection>
    </StyledContainer>
  );
};

export default CartCard;