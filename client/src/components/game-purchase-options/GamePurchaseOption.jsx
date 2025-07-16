import { useState } from "react";
import { StyledPrimaryButton } from "../ui/buttons/buttons-styles";
import { StyledGamePurchaseSection, StyledRadioContainer, StyledRadioSelectButton, StyledSectionTitle, StyledToggleButton, StyledToggleContainer } from "./game-purchase-option-styles";


const GamePurchaseOptions = ({ game }) => {
  const [hardware, setHardware] = useState("");
  const [format, setFormat] = useState("");

  const toggle = (current, value) => (current === value ? "" : value);

  return (
    <StyledGamePurchaseSection>
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
        {game.price.digital && (
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

      <StyledPrimaryButton disabled={!hardware || !format} onClick={() => handleBuy(hardware, format, game)}>
        {game.preOrderAvailable ? "Pre-order" : "Buy Now"}
      </StyledPrimaryButton>
    </StyledGamePurchaseSection>
  );
};


const handleBuy = (hardware, format, game) => {
    if (hardware && format) {
      const price = format === "Digital" ? game.price.digital : game.price.physical;
      alert(`Buying ${game.name} for ${price}€ on ${hardware} (${format})`);
    }
  };
  
export default GamePurchaseOptions;
