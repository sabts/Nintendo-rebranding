import { PROFILE_CHARACTERS } from "../../constants/img-picture";
import COLORS from "../../styles/colors";
import ProfileSections from "../ui/profile-sections/ProfileSections";
import { StyledBoxSelection, StyledMainContainer, StyledProfileContainer, StyledProfileImg, StyledSelectionGrid } from "./profile-picture-styles";

const ProfilePicture = ({ selectedCharacter, setSelectedCharacter, selectedColor, setSelectedColor }) => {
    return (
        <StyledMainContainer>
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
    
          {/* Grid de colores */}
          <ProfileSections title="Choose a color" icon='/icons/background-color-icon-profile.svg'>
        <StyledSelectionGrid>
          {Object.entries(COLORS.userImageBackground).map(([name, color]) => (
            < StyledBoxSelection
              key={name}
              color={color}
              $isSelected={selectedColor === color}
              onClick={() => setSelectedColor(color)}
              title={name} // Tooltip opcional
            />
          ))}
        </StyledSelectionGrid>
      </ProfileSections>
        </StyledMainContainer>
      );
};


export default ProfilePicture