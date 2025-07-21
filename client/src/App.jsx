import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Router from "./lib/routes/Routes";
import GameProvider from "./lib/providers/game.providers";

const App = () => {
	return <>
	<BrowserRouter>
	<GlobalStyles/>
	<GameProvider> 
		<Router/>
	</GameProvider>
	</BrowserRouter>
	</>
};

export default App;
