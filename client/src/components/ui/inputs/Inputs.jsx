import { Children, useState } from "react";
import { CheckboxLabel, DropdownContainer, DropdownContent, StyledFilterLabel } from "./dropdown-styles";
import { StyledImgPassword, StyledInputContainer, StyledInputText, StyledLabel, StyledPasswordInput } from "./input-text-styles";

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

const TextInputPassword = ({ label, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getPasswordIcon = (isOpen) => {
    return isOpen ? '/icons/eye-open-password.svg' : '/icons/eye-close-password.svg';
  };

  return (
    <StyledInputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledPasswordInput>
        <StyledInputText
          type={isOpen ? 'text' : 'password'}
          value={value}
          onChange={onChange}
        />
        <StyledImgPassword
          src={getPasswordIcon(isOpen)}
          alt={isOpen ? 'Hide password' : 'Show password'}
          onClick={() => setIsOpen(!isOpen)}
        />
      </StyledPasswordInput>
    </StyledInputContainer>
  );
};

const TextInput = ({ label, value, onChange }) => {
  return (
    <StyledInputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInputText
        type="text"
        value={value}
        onChange={onChange}
      />
    </StyledInputContainer>
  );
};
export { DropdownCheckbox, TextInputPassword, TextInput };