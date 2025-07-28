import { useState } from "react";
import CustomSelect from "../ui/custom-select/CustomSelect";
import { StyledMainContainer } from "./birthday-styles";
import { StyledImgPassword, StyledInputText, StyledSelect, StyledSelectContainer } from "./form-styles";

const Form = ({ region, setRegion, register }) => {
  const regions = [
    { value: '', label: '-- Select a region --' },
    { value: 'america', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const getPasswordIcon = (isOpen) => {
    return isOpen ? '/icons/eye-open-password.svg' : '/icons/eye-close-password.svg';
  };

  return (
    <StyledMainContainer>
      <div>
        <label>Email</label>
        <StyledInputText type="email" {...register('email', { required: true })} />
      </div>
      <div>
        <label>Nickname</label>
        <StyledInputText  {...register('nickname', { required: true })} />
      </div>
      <div>
        <label>Name</label>
        <StyledInputText  {...register('name', { required: true })} />
      </div>

      <StyledSelectContainer>

        <StyledSelect {...register('region', { required: true })}>
          {regions.map((region) => (
            <option key={region.value} value={region.value}>
              {region.label}
            </option>
          ))}
        </StyledSelect>
      </StyledSelectContainer>

      <div>
        <label>Password</label>
        <StyledInputText type={isOpen ? 'text' : 'password'} {...register('password', { required: true })} />
        <StyledImgPassword
          src={getPasswordIcon(isOpen)}
          alt={isOpen ? 'Hide password' : 'Show password'}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </StyledMainContainer>
  );
};

export default Form