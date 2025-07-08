import { useParams } from "react-router-dom";
import { GAME_DATA } from "../../constants/game-data";
import { PrimaryButton } from "../../components/ui/buttons/Buttons";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const GameProfile = () => {
    const { name } = useParams();
    const game = GAME_DATA.find(g => g.name === name);
    if (!game) return <div>Game not found.</div>;
  
    const price = game.price?.digital ? `$${game.price.digital}` : 'Free';

    return (<>
    <Header/>
     <div>
            {/* Imagen principal del juego */}
            <img src={game.heroBanner} alt={`Banner of ${game.name}`} />
            <div>
                {/* Mapa de imágenes del juego */}
                {game.images.map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`Screenshot ${index + 1} of ${game.name}`} 
                        style={{ width: '100%', maxWidth: '500px', marginBottom: '15px' }}
                    />
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
                <li><strong>Genres:</strong> {game.genres.join(', ')}</li>
                <li><strong>Play Modes:</strong> {game.playModes.join(', ')}</li>
                <li><strong>Players:</strong> {game.players}</li>
                <li><strong>Languages:</strong> {game.languages.join(', ')}</li>
                <li><strong>Age Rating:</strong> {game.ageRating}</li>
                <li><strong>Publisher:</strong> {game.publisher}</li>
                <li><strong>Release Date:</strong> {game.releaseDate}</li>
                <li><strong>Franchise:</strong> {game.franchise}</li>
            </ul>
        </div>
        <Footer/>
        </>);
};

export default GameProfile;