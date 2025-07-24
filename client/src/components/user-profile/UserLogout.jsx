import { Link } from 'react-router-dom';
import { StyledMainContainer, StyledPhoto } from './NoUser-styles';
import { PrimaryButton, SecondaryButton } from '../ui/buttons/Buttons';
import Footer from '../footer/Footer';


const NoUser = () => {
    return <>
        <section>
            <picture>
                <source
                    media='(min-width: 1024px)'
                    srcSet='/profile/no-user-nintendo-characters-tablet.png'
                />
                <source
                    media='(min-width: 768px) and (max-width: 1023px)'
                    srcSet='/profile/no-user-nintendo-characters-tablet.png'
                />
                <source
                    media='(min-width: 380px)'
                    srcSet='/profile/no-user-nintendo-characters-mobile.png'
                />
                <StyledPhoto
                    src='/profile/no-user-nintendo-characters-mobile.png'
                    alt='User not connected, photo of Nintendo characters'
                />
            </picture>
            <StyledMainContainer>
                <div>
                    <h3>Ready to play?</h3>
                    <h4>Log in or sign up to access your Nintendo World</h4>
                </div>
                <Link to='/login'>
                    <PrimaryButton>Log in</PrimaryButton>
                </Link>
                <Link to="/register">
                    <SecondaryButton
                        $isBackgroundDark={false} >
                        Sign up
                    </SecondaryButton>
                </Link>
            </StyledMainContainer>
        </section>
        <Footer />
    </>
}

export default NoUser