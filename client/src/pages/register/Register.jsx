import { useForm } from "react-hook-form";
import { registerUser } from "../../lib/utils/user-api";
import { TextInput, TextInputPassword } from '../../components/ui/inputs/Inputs';
import { PrimaryButton } from "../../components/ui/buttons/Buttons";
import { StyledBoxSelection, StyledMainContainer, StyledProfileContainer, StyledProfileImg, StyledSelectionGrid } from "./register-styles";
import { useState } from "react";
import ProfileSections from "../../components/ui/profile-sections/ProfileSections";
import COLORS from "../../styles/colors";
import { PROFILE_CHARACTERS } from "../../constants/img-picture";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [region, setRegion] = useState('');
  //Characters
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState();

  //Color
  const [selectedColor, setSelectedColor] = useState();


  const submitForm = async (data) => {
    const response = registerUser
    return response.data
  }


  return (<StyledMainContainer>
    <form onSubmit={handleSubmit(submitForm)}>

      {/* SECCION DE CUMPLEAÑOS */}
      <div>
        <picture>
          <source
            media='(min-width: 1024px)'
            srcSet='/register/birthday-register-process-mobile.png'
          />
          <source
            media='(min-width: 768px) and (max-width: 1023px)'
            srcSet='/register/birthday-register-process-mobile.png'
          />
          <source
            media='(min-width: 380px)'
            srcSet='/register/birthday-register-process-mobile.png'
          />
          <img
            src='/register/birthday-register-process-mobile.png'
            alt='Peach and Daisy caring a present in birtday section in register'
          />
        </picture>
        <h4>Welcome to Nintendo!</h4>
        <span>we want to know more about you! So, can you tell us when is your birthday?</span>
        <label htmlFor="birthday" />
        <input
          id="birthday"
          name="birthday"
          type="date"
          {...register("birthday", { required: true })}
        />
      </div>

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
        <select name="Region" value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="">-- Select a region --</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
        </select>
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
      <StyledProfileContainer bg={selectedColor || COLORS.base.primary}>
        <StyledProfileImg
          src={
            PROFILE_CHARACTERS.find(char => char.name === selectedCharacter)?.imageUrl ||
            '/icons/games icon menu.svg'
          }
          alt={`Selected character: ${selectedCharacter || 'none'}`}
        />
      </StyledProfileContainer>

      {/* Grid de personajes */}
      <ProfileSections title="Choose a character">
        <StyledSelectionGrid>
          {PROFILE_CHARACTERS.map(({ name, imageUrl }) => (
            <StyledBoxSelection
              key={name}
              isSelected={selectedCharacter === name}
              onClick={() => setSelectedCharacter(name)}
              title={name}
            >
              <img src={imageUrl} alt={name} />
            </StyledBoxSelection>
          ))}
        </StyledSelectionGrid>
      </ProfileSections>

      {/* Grid de Color */}
      <ProfileSections title="Choose a color">
        <StyledSelectionGrid>
          {Object.entries(COLORS.userImageBackground).map(([name, color]) => (
            <StyledBoxSelection
              key={name}
              color={color}
              isSelected={selectedColor === color}
              onClick={() => setSelectedColor(color)}
              title={name} // Tooltip opcional
            />
          ))}
        </StyledSelectionGrid>
      </ProfileSections>
      <PrimaryButton type="submit">Submit</PrimaryButton>
    </form>
  </StyledMainContainer >);
};


// 				<StyledForm onSubmit={registerUser}>
// 					<h2>Crear Cuenta</h2>
// 					<input type='text' name='name' placeholder='Name' />
// 					<input type='text' name='email' placeholder='email' />
// 					<input type='password' name='password' placeholder='password' />
// 					<button type='submit'>Registrarse</button>
// 				</StyledForm>



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
