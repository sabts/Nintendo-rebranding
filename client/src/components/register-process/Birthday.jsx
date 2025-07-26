import { StyledMainContainer } from "./birthday-styles"

const Birthday = ({ birthday, setBirthday, register }) => {

  return (
    <StyledMainContainer>
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
      <span>We want to know more about you! Can you tell us when is your birthday?</span>

      <input
        id="birthday"
        name="birthday"
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        {...register('birthday', { required: true })}
      />
    </StyledMainContainer>
  );
};

export default Birthday;