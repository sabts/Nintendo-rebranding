import { useParams } from "react-router-dom";
import { FavoriteButton, PrimaryButton } from "../../components/ui/buttons/Buttons";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../lib/context/AuthContext";
import { URL_BASE } from "../../lib/utils/api";
import { StyledImage, StyledImagesDiv, StyledLi, StyledPage, StyledStrongLi, StyledTitle, StyledTitleContainer, StyledUl } from "./game-profile-styles";
import GamePurchaseOptions from "../../components/game-purchase-options/GamePurchaseOption";

const GameProfile = () => {
    const { slug } = useParams();
    const { games } = useContext(AuthContext)

    const game = games.find ? games.find((g) => g.slug === slug) : games[slug];
    if (!game) return <div>Game not found.</div>;

    const price = (game.price?.digital === 0 && game.price?.physical === 0) ? 'Free' : `$${game.price?.digital}`;

    return (<>
        <Header />
        {/* Imagen principal del juego */}
        <picture>
            <source media="(min-width: 1024px)" srcSet={URL_BASE + game.images[0].desktop} />
            <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={URL_BASE + game.images[0].tablet} />
            <source media="(min-width:380 px)" srcSet={URL_BASE + game.images[0].mobile} />
            <StyledImage src={URL_BASE + game.images[0].mobile} alt={`Banner of ${game.name}`} />
        </picture>

        {/*imagenes de abajo*/}
        <StyledImagesDiv>
            {/* Mapa de imágenes del juego */}
            {game.images.map((imgObj, index) => (
                <picture key={index}>
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
                <StyledLi><StyledStrongLi>System:</StyledStrongLi> {game.system.join(', ')}</StyledLi>
                <StyledLi><StyledStrongLi>Genres:</StyledStrongLi> {game.genres}</StyledLi>
                <StyledLi><StyledStrongLi>Play Modes:</StyledStrongLi> {game.playModes.join(', ')}</StyledLi>
                <StyledLi><StyledStrongLi>Players:</StyledStrongLi> {game.numOfPlayer.join(', ')}</StyledLi>
                <StyledLi><StyledStrongLi>Languages:</StyledStrongLi> {game.languages.join(', ')}</StyledLi>
                <StyledLi><StyledStrongLi>Publisher:</StyledStrongLi> {game.publisher}</StyledLi>
                <StyledLi><StyledStrongLi>Franchise:</StyledStrongLi> {game.franchise}</StyledLi>
                <StyledLi><StyledStrongLi>Age Rating:</StyledStrongLi> {game.ageRating}</StyledLi>
                <StyledLi><StyledStrongLi>Release Date:</StyledStrongLi> {game.releaseDate}</StyledLi>
            </StyledUl>
        </StyledPage>
        <Footer />
    </>);
};



//<div><strong>Price:</strong> {price}</div>
//{/* Botón según disponibilidad */}
//{game.preorderAvailable ? (
//    <PrimaryButton>Pre-order</PrimaryButton>
//) : game.isOnSale ? (
//    <PrimaryButton>Buy Now</PrimaryButton>
//) : (
//    <PrimaryButton>Add to Cart</PrimaryButton>
//)}
export default GameProfile;