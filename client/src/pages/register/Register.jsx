import { useForm } from "react-hook-form";
import { registerUser } from "../../lib/utils/user-api";
import { TextInput, TextInputPassword } from '../../components/ui/inputs/Inputs';
import { PrimaryButton } from "../../components/ui/buttons/Buttons";
import { StyledBoxSelection, StyledMainContainer, StyledProfileContainer, StyledProfileImg, StyledSelectionGrid } from "./register-styles";
import { useState } from "react";
import ProfileSections from "../../components/ui/profile-sections/ProfileSections";
import COLORS from "../../styles/colors";
import { PROFILE_CHARACTERS } from "../../constants/img-picture";
import Footer from "../../components/footer/Footer";
import CustomSelect from "../../components/ui/custom-select/CustomSelect";
import HeaderProcess from "../../components/header/Header-process";
import Birthday from "../../components/register-process/Birthday";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [region, setRegion] = useState('');
  
  //Characters
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState();

  //Color
  const [selectedColor, setSelectedColor] = useState();


  const regions = [
    { value: "", label: "-- Select a region --" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
  ];

  const submitForm = async (data) => {
    const response = registerUser
    return response.data
  }

  const handleChange = (e) => {
    setRegion(e.target.value);
  };

  return (<>
    <HeaderProcess/>
  <StyledMainContainer>
    <form onSubmit={handleSubmit(submitForm)}>

      {/* SECCION DE CUMPLEAÑOS */}
      <Birthday/>
      {/* SECCION DE FORMULARIO */}
      <div>
        <label>Email</label>
        <TextInput
          id="email"
          type="email"
          {...register("email", { required: true })}
        />
      </div>

      <div>
        <label>Nickname</label>
        <TextInput
          id="nickname"
          {...register("nickname", { required: true })}
        />
      </div>

      <div>
        <label>Name</label>
        <TextInput
          id="name"
          {...register("name", { required: true })}
        />
      </div>

      <div>
      <label>Region</label>
        <CustomSelect
        options={regions}
        value={region}
        onChange={handleChange}/>
      </div>

      <div>
        <label>Password</label>
        <TextInputPassword
          id="password"
          {...register("password", { required: true })}
        />
      </div>

      {/* SECCION DE IMAGEN DE PERFIL */}

      {/* Imagen seleccionada con fondo */}
      <StyledProfileContainer bg={selectedColor || COLORS.variants.primaryOpacity}>
        <StyledProfileImg
          src={
            PROFILE_CHARACTERS.find(char => char.name === selectedCharacter)?.imageUrl ||
            '/icons/no user - icon.svg '
          }
          alt={`Selected character: ${selectedCharacter || 'none'}`}
        />
      </StyledProfileContainer>

      {/* Grid de personajes */}
      <ProfileSections title="Choose a character" icon='/icons/user-icon-profile.svg'
      >
        <StyledSelectionGrid>
          {PROFILE_CHARACTERS.map(({ name, imageUrl }) => (
            <StyledBoxSelection
              key={name}
              $isSelected={selectedCharacter === name}
              onClick={() => setSelectedCharacter(name)}
              title={name}
            >
              <img src={imageUrl} alt={name} />
            </StyledBoxSelection>
          ))}
        </StyledSelectionGrid>
      </ProfileSections>

      {/* Grid de Color */}
      <ProfileSections title="Choose a color" icon='/icons/background-color-icon-profile.svg'>
        <StyledSelectionGrid>
          {Object.entries(COLORS.userImageBackground).map(([name, color]) => (
            <StyledBoxSelection
              key={name}
              color={color}
              $isSelected={selectedColor === color}
              onClick={() => setSelectedColor(color)}
              title={name} // Tooltip opcional
            />
          ))}
        </StyledSelectionGrid>
      </ProfileSections>
      <PrimaryButton type="submit">Submit</PrimaryButton>
    </form>
  </StyledMainContainer >
  </>);
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
