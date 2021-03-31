import React, { createContext, useContext, useState } from "react";

const Context = createContext({});

export const Provider = (props) => {
	const { children } = props;

	const [user, setUser] = useState(
		localStorage.getItem("access-token")
			? { loggedIn: true, token: localStorage.getItem("access-token") }
			: { loggedIn: false }
	);

	const context = {
		user,
		setUser,
	};

	return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const useUserContext = () => useContext(Context);
