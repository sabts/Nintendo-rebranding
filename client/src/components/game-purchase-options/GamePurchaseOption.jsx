import { useState } from "react";
import { StyledPrimaryButton } from "../ui/buttons/buttons-styles";
import { StyledGamePurchaseSection, StyledRadioContainer, StyledRadioSelectButton, StyledSectionTitle, StyledToggleButton, StyledToggleContainer } from "./game-purchase-option-styles";
import { useUserContext } from "../../lib/providers/user.providers";
import { addProducts } from "../../lib/utils/user-api";

const GamePurchaseOptions = ({ game }) => {
  const [hardware, setHardware] = useState("");
  const [format, setFormat] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const toggle = (current, value) => (current === value ? "" : value);

  //console.log(game._id)

  return (
    <StyledGamePurchaseSection>
      {/* Se muestra el botón para activar las opciones */}
      {!showOptions && (
        <StyledPrimaryButton onClick={() => handleShowOptions(setShowOptions)}>Buy</StyledPrimaryButton>
      )}

      {/* Las opciones de consola y versión solo se muestran si showOptions es true */}
      {showOptions && (
        <>
          <StyledSectionTitle>Choose a console</StyledSectionTitle>
          <StyledToggleContainer>
            {game.system.map((s) => (
              <StyledToggleButton
                key={s}
                $isActive={hardware === s}
                onClick={() => setHardware(toggle(hardware, s))}
              >
                {s}
              </StyledToggleButton>
            ))}
          </StyledToggleContainer>

          <StyledSectionTitle>Choose a version</StyledSectionTitle>
          <StyledRadioContainer>
            {game.price.digital >= 0 && (
              <StyledRadioSelectButton
                $isActive={format === "Digital"}
                onClick={() => setFormat(toggle(format, "Digital"))}
              >
                Digital – {game.price.digital.toFixed(2)} €
              </StyledRadioSelectButton>
            )}
            {game.price.physical && (
              <StyledRadioSelectButton
                $isActive={format === "Physical"}
                onClick={() => setFormat(toggle(format, "Physical"))}
              >
                Physical – {game.price.physical.toFixed(2)} €
              </StyledRadioSelectButton>
            )}
          </StyledRadioContainer>

          {/* Botón de compra*/}
          <StyledPrimaryButton
            disabled={!hardware || !format}
            onClick={() => handleBuy(hardware, format, game)}
          >
            {game.preOrderAvailable ? "Pre-order" : "Add to Cart"}
          </StyledPrimaryButton>
        </>
      )}
    </StyledGamePurchaseSection>
  );
};

const handleShowOptions = (setShowOptions) => {
  setShowOptions(true);
};

const handleBuy = async (hardware, format, game) => {
  if (hardware && format) {
    const price = format === "Digital" ? game.price.digital : game.price.physical;
    //console.log(`Add ${game.name} for ${price}€ on ${hardware} (${format}) in cart`);
    await addProducts(game._id); 
  }
};

export default GamePurchaseOptions