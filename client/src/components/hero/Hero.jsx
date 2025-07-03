import { Link } from 'react-router-dom';
import { StyledHeroButtons, StyledHeroContent, StyledHeroImage, StyledHeroWrapper } from './hero-styles';

const Hero = () => {
  return (
    <StyledHeroWrapper>
      <StyledHeroContent>
        <img src="/home/nintendo switch 2 logo mobile.png " alt="Nintendo Switch 2 logo" />
        <p>Play anytime, anywhere</p>
        <StyledHeroButtons>
          <Link to="/learn-more" className="red">
            Learn More
          </Link>
          <Link to="/shop-switch2" className="outline">
            Shop Switch 2
          </Link>
        </StyledHeroButtons>
      </StyledHeroContent>

      <StyledHeroImage>
        <img src="/home/switch 2 console mobile.png" alt="Switch 2 Console" />
      </StyledHeroImage>
    </StyledHeroWrapper>
  );
};

export default Hero;