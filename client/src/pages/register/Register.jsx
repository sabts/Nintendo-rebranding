import { useForm } from "react-hook-form";
import { registerUser } from "../../lib/utils/user-api";
import { PrimaryButton, SecondaryButton } from "../../components/ui/buttons/Buttons";
import { useState } from "react";
import HeaderProcess from "../../components/header/Header-process";
import Birthday from "../../components/register-process/Birthday";
import { StyledButtonContainer, StyledMainContainer } from "../../components/register-process/birthday-styles";
import Form from "../../components/register-process/Form";
import ProfilePicture from "../../components/register-process/ProfilePicture";
import { useNavigate } from "react-router-dom";
import COLORS from "../../styles/colors";
import { StyledSubmitButton } from "./register-styles";

const Register = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [step, setStep] = useState(1);
  const navigate = useNavigate()

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Maneja el envío del formulario
  const submitForm = async (data) => {

    const profilePicture = {
      img: selectedCharacter.imageUrl,
      backgroundColor: selectedColor
    };

    const completeData = {
      ...data,
      profilePicture,
    };

    const response = await registerUser(completeData);
    console.log(completeData);

    if (response && response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    navigate('/profile');
    return response.data;
  };


  const handleFinalSubmit = (event) => {
    event.preventDefault();
    handleSubmit(submitForm)();
  };
  return (
    <>
      <HeaderProcess />
      <StyledMainContainer>
        <form onSubmit={handleFinalSubmit}>
          {step === 1 && (
            <Birthday register={register} />
          )}

          {step === 2 && (
            <Form register={register} />
          )}
          {step === 3 && (
            <ProfilePicture
              selectedCharacter={selectedCharacter}
              setSelectedCharacter={setSelectedCharacter}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              setValue={setValue}
            />)}
          <StyledButtonContainer>
            {step > 1 && (
              <SecondaryButton action={prevStep}>Back</SecondaryButton>
            )}
            {step < 3 ? (
              <PrimaryButton action={nextStep}>Continue</PrimaryButton>
            ) : (
              <StyledSubmitButton type="submit">Finish</StyledSubmitButton>
            )}
          </StyledButtonContainer>
        </form>
      </StyledMainContainer >
    </>
  );
};

export default Register;
