import { useState } from "react";
import { StyledButton, StyledFilterLabel, StyledForm, StyledInputRange } from "./store-filters-styles"
import { FILTERS } from "../../constants/store-filters";
import { DropdownCheckbox } from "../ui/inputs/Inputs";

const StoreFilters = ({ applyFilters, onClose }) => {
  const [priceRange, setPriceRange] = useState(60);
  const [age, setAge] = useState([]);
  const [hardware, setHardware] = useState([]);
  const [franchise, setFranchise] = useState([]);
  const [gameGender, setGameGender] = useState([]);

  const handleSubmit = () => {
    applyFilters({
      priceRange,
      age,
      hardware,
      franchise,
      gameGender,
    });
    onClose();
  };

  return (
    <StyledForm>
      <div>
        <StyledFilterLabel>Price Range</StyledFilterLabel>
        <StyledInputRange
          type="range"
          min={0}
          max={120}
          step={5}
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <div>Price: €{priceRange}</div>
      </div>

      {/* Usamos el componente DropdownCheckbox para cada filtro */}
      <DropdownCheckbox
        label="PEGI (By Age)"
        options={FILTERS.BY_AGE}
        selectedValues={age}
        onChange={setAge}
      />

      <DropdownCheckbox
        label="Hardware"
        options={FILTERS.HARDWARE}
        selectedValues={hardware}
        onChange={setHardware}
      />

      <DropdownCheckbox
        label="Franchise"
        options={FILTERS.FRANCHISE}
        selectedValues={franchise}
        onChange={setFranchise}
      />

      <DropdownCheckbox
        label="Game Gender"
        options={FILTERS.GAME_GENDER}
        selectedValues={gameGender}
        onChange={setGameGender}
      />

      <div>
        <StyledButton type="button" onClick={handleSubmit}>
          Apply
        </StyledButton>
        <StyledButton type="button" onClick={onClose}>
          Clear
        </StyledButton>
      </div>
    </StyledForm>
  );
};

export default StoreFilters;