import { useContext } from "react";
import { GameStoreCard } from "../../components/ui/game-cards/GameCards"
import { AuthContext } from "../../lib/context/AuthContext";

const GameStore = ()=> {
      const { games } = useContext(AuthContext);
      return (
        <div>
          {games.map((game) => (
            <GameStoreCard
              key={game.uuid}
              name={game.name}
              slug={game.slug}
              thumbnail={game.thumbnail}
              price={game.price.digital}
            />
          ))}
        </div>
      );
}

export default GameStore