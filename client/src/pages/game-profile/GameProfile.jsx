import { useParams } from "react-router-dom";
import { FavoriteButton } from "../../components/ui/buttons/Buttons";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../lib/context/AuthContext";
import { URL_BASE } from "../../lib/utils/api";
import { StyledImage, StyledImagesDiv, StyledLi, StyledLidiv, StyledPage, StyledStrongLi, StyledTitle, StyledTitleContainer, StyledUl } from "./game-profile-styles";
import GamePurchaseOptions from "../../components/game-purchase-options/GamePurchaseOption";

const GameProfile = () => {
    const { slug } = useParams();
    const { games } = useContext(AuthContext)
    const [currentHeroImgIndex, setCurrentHeroImgIndex] = useState(0);

    const game = games.find ? games.find((g) => g.slug === slug) : games[slug];
    if (!game) return <div>Game not found.</div>;

    const price = (game.price?.digital === 0 && game.price?.physical === 0) ? 'Free' : `$${game.price?.digital}`;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroImgIndex((prevIndex) => (prevIndex + 1) % game.images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [game.images.length]);
    const handleImageClick = (index) => {
        setCurrentHeroImgIndex(index); 
    };

    return (<>
        <Header />
        {/* Imagen principal del juego */}
        <picture>
                <source media="(min-width: 1024px)" srcSet={URL_BASE + game.images[currentHeroImgIndex].desktop} />
                <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={URL_BASE + game.images[currentHeroImgIndex].tablet} />
                <source media="(min-width: 380px)" srcSet={URL_BASE + game.images[currentHeroImgIndex].mobile} />
                <StyledImage src={URL_BASE + game.images[currentHeroImgIndex].mobile} alt={`Banner of ${game.name}`} />
            </picture>
            
        {/*imagenes de abajo*/}
        <StyledImagesDiv>
            {/* Mapa de imágenes del juego */}
            {game.images.map((imgObj, index) => (
                <picture key={index} onClick={() => handleImageClick(index, setCurrentHeroImgIndex)}>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={URL_BASE + imgObj.desktop}
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 768px)"
                        srcSet={URL_BASE + imgObj.tablet}
                    />
                    <source
                        media="(max-width: 380px)"
                        srcSet={URL_BASE + imgObj.mobile}
                    />
                    <img
                        src={URL_BASE + imgObj.mobile}
                        alt={`Screenshot ${index + 1} of ${game.name}`}
                    />
                </picture>
            ))}
        </StyledImagesDiv>
        <StyledPage>
            <StyledTitleContainer>
                <StyledTitle>{game.name}</StyledTitle>
                <FavoriteButton isCardPreview={false} />
            </StyledTitleContainer>
            <GamePurchaseOptions game={game} />

            <div>
                <p><strong>{game.overview.headline}</strong></p>
                <p>{game.overview.body}</p>
                <p dangerouslySetInnerHTML={{ __html: game.description.replaceAll("\n", "<br>") }}></p>
            </div>
            <StyledUl>
            <StyledLidiv>
  <StyledStrongLi>System:</StyledStrongLi>
  <StyledLi>{game.system.join(', ')}</StyledLi>
</StyledLidiv>

<StyledLidiv>
  <StyledStrongLi>Genres:</StyledStrongLi>
  <StyledLi>{game.genres}</StyledLi>
</StyledLidiv>

<StyledLidiv>
  <StyledStrongLi>Play Modes:</StyledStrongLi>
  <StyledLi>{game.playModes.join(', ')}</StyledLi>
</StyledLidiv>

<StyledLidiv>
  <StyledStrongLi>Players:</StyledStrongLi>
  <StyledLi>{game.numOfPlayer.join(', ')}</StyledLi>
</StyledLidiv>

<StyledLidiv>
  <StyledStrongLi>Languages:</StyledStrongLi>
  <StyledLi>{game.languages.join(', ')}</StyledLi>
</StyledLidiv>

<StyledLidiv>
  <StyledStrongLi>Publisher:</StyledStrongLi>
  <StyledLi>{game.publisher}</StyledLi>
</StyledLidiv>

<StyledLidiv>
  <StyledStrongLi>Franchise:</StyledStrongLi>
  <StyledLi>{game.franchise}</StyledLi>
</StyledLidiv>

<StyledLidiv>
  <StyledStrongLi>Age Rating:</StyledStrongLi>
  <StyledLi>{game.ageRating}</StyledLi>
</StyledLidiv>

<StyledLidiv>
  <StyledStrongLi>Release Date:</StyledStrongLi>
  <StyledLi>{game.releaseDate}</StyledLi>
</StyledLidiv>
            </StyledUl>
        </StyledPage>
        <Footer />
    </>);
};


const carruselHero = (setCurrentHeroImgIndex, imageLength) => {
    const interval = setInterval(() => {
        setCurrentHeroImgIndex((prevIndex) => (prevIndex + 1) % imageLength);
    }, 5000);

    return () => clearInterval(interval);
};

const handleImageClick = (index, setCurrentHeroImgIndex) => {
    setCurrentHeroImgIndex(index);
};

export default GameProfile;