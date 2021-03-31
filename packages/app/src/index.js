import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Provider as UserProvider } from "./context/useUserContext";

const App = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<Routes />
			</UserProvider>
		</BrowserRouter>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
