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
  const { register, handleSubmit, setValue } = useForm();
  
  const [region, setRegion] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [birthday, setBirthday] = useState('');
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1); 
  const prevStep = () => setStep((prev) => prev - 1); 

  const regions = [
    { value: '', label: '-- Select a region --' },
    { value: 'america', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
  ];

  // Maneja el envío del formulario
  const submitForm = async (data) => {
    const completeData = {
      ...data,
      region,
      selectedCharacter,
      selectedColor,
      birthday,
    };

    //const response = await registerUser(completeData); 
    console.log(completeData)
    //return response.data;
  };

  const handleRegionChange = (e) => setRegion(e.target.value);

  return (
    <>
      <HeaderProcess />
      <StyledMainContainer>
        <form onSubmit={handleSubmit(submitForm)}>
        {step === 1 && (
            <Birthday birthday={birthday} setBirthday={setBirthday} register={register} />
          )}

{step === 2 && (
            <Form region={region} setRegion={setRegion} register={register} />
          )}
       {step === 3 && (
            <ProfilePicture
              selectedCharacter={selectedCharacter}
              setSelectedCharacter={setSelectedCharacter}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          )}
        <StyledButtonContainer>
            {step > 1 && (
              <SecondaryButton action={prevStep}>Back</SecondaryButton>
            )}
            {step < 3 ? (
              <PrimaryButton  action={nextStep}>Continue</PrimaryButton>
            ) : (
              <PrimaryButton type="submit">Finish</PrimaryButton>
            )}
          </StyledButtonContainer>
        </form>
      </StyledMainContainer>
    </>
  );
};
// const Register = () => {
//   const { setUser } = useUserContext();

//   const submitForm = async (data) => {
//     try {
//       const newUser = await registerUser(data);
//       setUser(newUser); // ← guarda al usuario recién registrado
//     } catch (error) {
//       console.error('Registration failed:', error.response?.data || error);
//     }
//   };

export default Register;
