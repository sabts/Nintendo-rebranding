import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Router from "./lib/routes/Routes";
import GameProvider from "./lib/providers/game.providers";
import UserProvider from "./lib/providers/user.providers";

const App = () => {
	return <>
		<BrowserRouter>
			<GlobalStyles />
			<UserProvider>
				<GameProvider>
					<Router />
				</GameProvider>
			</UserProvider>
		</BrowserRouter>
	</>
};

export default App;
