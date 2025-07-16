import { useParams } from "react-router-dom";
import { PrimaryButton } from "../../components/ui/buttons/Buttons";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../lib/context/AuthContext";

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
            <img src={game.heroBanner} alt={`Banner of ${game.name}`} />
            <div>
                {/* Mapa de imágenes del juego */}
                {game.images.map((imgObj, index) => (
                    <picture key={index}>
                        <source
                            media="(min-width: 1024px)"
                            srcSet={imgObj.desktop}
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet={imgObj.tablet}
                        />
                        <source
                            media="(min-width: 380px)"
                            srcSet={imgObj.mobile}
                        />
                        <img
                            src={imgObj.mobile}
                            alt={`Screenshot ${index + 1} of ${game.name}`}
                        />
                    </picture>
                ))}
            </div>
            <h1>{game.name}</h1>
            <div><strong>Price:</strong> {price}</div>
            {/* Botón según disponibilidad */}
            {game.preorderAvailable ? (
                <PrimaryButton>Pre-order</PrimaryButton>
            ) : game.isOnSale ? (
                <PrimaryButton>Buy Now</PrimaryButton>
            ) : (
                <PrimaryButton>Add to Cart</PrimaryButton>
            )}

            <p><strong>{game.overview.headline}</strong></p>
            <p>{game.overview.body}</p>

            <ul>
                <li><strong>Platform:</strong> {game.platform}</li>
                <li><strong>Genres:</strong> {game.genres}</li>
                <li><strong>Play Modes:</strong> {game.playModes.join(', ')}</li>
                <li><strong>Players:</strong> {game.players}</li>
                <li><strong>Languages:</strong> {game.languages.join(', ')}</li>
                <li><strong>Age Rating:</strong> {game.ageRating}</li>
                <li><strong>Publisher:</strong> {game.publisher}</li>
                <li><strong>Release Date:</strong> {game.releaseDate}</li>
                <li><strong>Franchise:</strong> {game.franchise}</li>
            </ul>
        </div>
        <Footer />
    </>);
};

export default GameProfile;