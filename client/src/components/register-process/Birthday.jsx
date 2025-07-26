import { PrimaryButton } from "../ui/buttons/Buttons"
import { StyledMainContainer } from "./birthday-styles"

const Birthday = () => {
    return <StyledMainContainer>
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
    />
    <PrimaryButton>Continue</PrimaryButton>
  </StyledMainContainer>
}

export default Birthday