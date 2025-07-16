import { useParams } from "react-router-dom";
import { FavoriteButton, PrimaryButton } from "../../components/ui/buttons/Buttons";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../lib/context/AuthContext";
import { URL_BASE } from "../../lib/utils/api";
import { StyledImagesDiv } from "./game-profile-styles";
import GamePurchaseOptions from "../../components/game-purchase-options/GamePurchaseOption";

const GameProfile = () => {
    const { slug } = useParams();
    const { games } = useContext(AuthContext)

    const game = games.find ? games.find((g) => g.slug === slug) : games[slug];
    if (!game) return <div>Game not found.</div>;

    const price = (game.price?.digital === 0 && game.price?.physical === 0) ? 'Free' : `$${game.price?.digital}`;

    return (<>
        <Header />
        <div>
            {/* Imagen principal del juego */}
            <picture>
                <source media="(min-width: 1024px)" srcSet={URL_BASE + game.herobanner.desktop} />
                <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={URL_BASE + game.herobanner.tablet} />
                <source media="(min-width:380 px)" srcSet={URL_BASE + game.herobanner.mobile} />
                <img src={URL_BASE + game.herobanner.mobile} alt={`Banner of ${game.name}`} />
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

            <div>
                <h2>{game.name}</h2>
                <FavoriteButton isCardPreview={false} />
            </div>
            <GamePurchaseOptions game={game} />
            <p><strong>{game.overview.headline}</strong></p>
            <p>{game.overview.body}</p>

            <ul>
                <li><strong>System:</strong> {game.system.join(', ')}</li>
                <li><strong>Genres:</strong> {game.genres}</li>
                <li><strong>Play Modes:</strong> {game.playModes.join(', ')}</li>
                <li><strong>Players:</strong> {game.numOfPlayer.join(', ')}</li>
                <li><strong>Languages:</strong> {game.languages.join(', ')}</li>
                <li><strong>Publisher:</strong> {game.publisher}</li>
                <li><strong>Franchise:</strong> {game.franchise}</li>
                <li><strong>Age Rating:</strong> {game.ageRating}</li>
                <li><strong>Release Date:</strong> {game.releaseDate}</li>
            </ul>
        </div >
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