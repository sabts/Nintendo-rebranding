import { useState } from "react";
import { CheckboxLabel, DropdownContainer, DropdownContent, StyledFilterLabel } from "./dropdown-styles";

const DropdownCheckbox = ({ label, options, selectedValues, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (value) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];
    onChange(updatedValues);
  };

  return (
    <DropdownContainer>
      <StyledFilterLabel onClick={() => setIsOpen(!isOpen)}>
        {label} <span>{isOpen ? "▲" : "▼"}</span>
      </StyledFilterLabel>

      {isOpen && (
        <DropdownContent>
          {options.map((item) => (
            <CheckboxLabel key={item.value}>
              <input
                type="checkbox"
                value={item.value}
                checked={selectedValues.includes(item.value)}
                onChange={() => handleCheckboxChange(item.value)}
              />
              {item.label}
            </CheckboxLabel>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export { DropdownCheckbox };