import { useForm } from "react-hook-form";
import { registerUser } from "../../lib/utils/user-api";
import { PrimaryButton, SecondaryButton } from "../../components/ui/buttons/Buttons";
import { useState } from "react";
import HeaderProcess from "../../components/header/Header-process";
import Birthday from "../../components/register-process/Birthday";
import { StyledButtonContainer, StyledMainContainer } from "../../components/register-process/birthday-styles";
import Form from "../../components/register-process/Form";
import ProfilePicture from "../../components/register-process/ProfilePicture";

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Maneja el envío del formulario
  const submitForm = async (data) => {
    console.log('holis')
    const completeData = {
      ...data,
      selectedCharacter,
      selectedColor,
    };

    //const response = await registerUser(completeData); 
    console.log(completeData)
    //return response.data;
  };

  const onError = (errors) => {
    console.log("Errores de validación:", errors);
  };
  return (
    <>
      <HeaderProcess />
      <StyledMainContainer>
        <form onSubmit={handleSubmit(submitForm, onError)}>
          <pre>{JSON.stringify(watch(), null, 2)}</pre>
          {/* {step === 1 && ( */}
          <Birthday register={register} />
          {/* )} */}

          {/* {step === 2 && ( */}
          <Form register={register} />
          {/* )} */}
          {/* {step === 3 && ( */}
          <ProfilePicture
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          {/* )}
          <StyledButtonContainer>
            {step > 1 && (
              <SecondaryButton action={prevStep}>Back</SecondaryButton>
            )}
            {step < 3 ? (
              <PrimaryButton action={nextStep}>Continue</PrimaryButton>
            ) : (
              null
            )} */}
          <input type="submit" value="Finish" />
          {/* </StyledButtonContainer> */}
        </form>
      </StyledMainContainer >
    </>
  );
};

export default Register;
