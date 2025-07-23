import { Children, useState } from "react";
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

const TextInputPassword = ({ label, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getPasswordIcon = (isOpen) => {
    return isOpen ? '/icons/eye-open-password.svg' : '/icons/eye-close-password.svg';
  };

  return (
    <>
      <label>{label}</label>
      <input
        type={isOpen ? 'text' : 'password'}
        value={value}
        onChange={onChange}
      />
      <img
        src={getPasswordIcon(isOpen)}
        alt={isOpen ? 'Hide password' : 'Show password'}
        onClick={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

const TextInput = ({ label, value, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
};
export { DropdownCheckbox, TextInputPassword, TextInput };