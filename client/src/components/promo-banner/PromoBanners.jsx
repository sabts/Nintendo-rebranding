import { SecondaryButton } from "../ui/buttons/Buttons"
import { BannerContentMyNintendo, BannerContentNintendoOnline, BannerImage, StyledMyNintendoWrap, StyledNintendoOnlineWrap } from "./promo-banners-styles"

const NintendoOnlineBanner = () => {
    return <StyledNintendoOnlineWrap>
        <BannerContentNintendoOnline>
            <h4>Nintendo Online</h4>
            <p>Get more out of your console with the paid subscription service Nintendo Switch Online!</p>
            <SecondaryButton>Learn More</SecondaryButton>
        </BannerContentNintendoOnline>
        <img src="/home/nintendo online mobile.png" alt="Mario, Luigi, Peach and Toad playon togethers" />
    </StyledNintendoOnlineWrap>
}

const MyNintendoBanner = () => {
    return <StyledMyNintendoWrap>
        <BannerContentMyNintendo>
            <h4>My Nintendo</h4>
            <p>Easy, fun and rewarding!</p>
            <SecondaryButton>Learn More</SecondaryButton>
        </BannerContentMyNintendo>
        <BannerImage src="/home/my nintendo mobile.png" alt="Mario looking up" />
    </StyledMyNintendoWrap>
}

export { NintendoOnlineBanner, MyNintendoBanner }