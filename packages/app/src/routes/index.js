import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import ProfilePage from "../views/ProfilePage";
import {useUserContext} from '../context/useUserContext';


const Routes = () => {
    const {user} = useUserContext();;
	return (
		<Switch>
			<Route exact path="/">
				<Redirect to="/login" />
			</Route>
			<Route exact path="/login" render={(props) => (user.loggedIn ? <Redirect to="/profile" /> : <LoginPage />)} />
			<Route exact path="/profile" render={(props) => (user.loggedIn ? <ProfilePage /> : <Redirect to="/login" />)} />

		</Switch>
	);
};

export default Routes;
