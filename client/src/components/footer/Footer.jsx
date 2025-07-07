import { StyledFooterWrapper, StyledIcons, StyledTextLinks } from "./footer-styles"

const Footer = () => {
    return   <StyledFooterWrapper>
        <StyledTextLinks>
          <span>About Nintendo</span>
          <span>Support</span>
          <span>Parents</span>
          <span>Privacy</span>
          <span>Orders</span>
          <span>Community guidelines</span>
          <span>Document and policies</span>
        </StyledTextLinks>

        <StyledIcons>
        <a
          href="https://www.facebook.com/NintendoUK"
          target="_blank"
          aria-label="Nintendo on Facebook"
          title="Nintendo on Facebook"
        >
          <picture>
            <img src="/footer/facebook.png" alt="Facebook" />
          </picture>
        </a>

        <a
          href="https://www.instagram.com/NintendoUK/"
          target="_blank"
          aria-label="Nintendo on Instagram"
          title="Nintendo on Instagram"
        >
          <picture>
            <img src="/footer/instagram.png " alt="Instagram" />
          </picture>
        </a>

        <a
          href="https://www.linkedin.com/company/nintendo-of-europe/"
          target="_blank"
          aria-label="Nintendo on LinkedIn"
          title="Nintendo on LinkedIn"
        >
          <picture>
            <img src="/footer/linkedin.png" alt="LinkedIn" />
          </picture>
        </a>

        <a
          href="https://x.com/NintendoUK"
          target="_blank"
          aria-label="Nintendo on X (Twitter)"
          title="Nintendo on X (Twitter)"
        >
          <picture>
            <img src="/footer/X logo.png " alt="X (Twitter)" />
          </picture>
        </a>

        <a
          href="https://www.twitch.tv/NintendoUK"
          target="_blank"
          aria-label="Nintendo on Twitch"
          title="Nintendo on Twitch"
        >
          <picture>
            <img src="/footer/twitch.png" alt="Twitch" />
          </picture>
        </a>

        <a
          href="https://www.youtube.com/user/Nintendo"
          target="_blank"
          aria-label="Nintendo on YouTube"
          title="Nintendo on YouTube"
        >
          <picture>
            <img src="/footer/youtube.png" alt="YouTube" />
          </picture>
        </a>
      </StyledIcons>
        </StyledFooterWrapper>
}

export default Footer