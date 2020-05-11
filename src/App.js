import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "./Common/History";
import Dashboard from "./Component/Dashboard/index";
import theme from "./Constant/Themes";
import routes from "./Router";

const App = () => {
	const showContentMenu = (routes) => {
		let result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}></Route>
				);
			});
		}
		return <Switch>{result}</Switch>;
	};
	return (
		<Router history={history}>
			<ThemeProvider theme={theme}>
				<Dashboard>{showContentMenu(routes)}</Dashboard>
			</ThemeProvider>
		</Router>
	);
};

export default App;
