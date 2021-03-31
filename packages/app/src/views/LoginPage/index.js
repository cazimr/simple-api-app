import React from "react";
import { useUserContext } from "../../context/useUserContext";
import FacebookLogin from "react-facebook-login";

const LoginPage = () => {
	const { setUser } = useUserContext();

    const loginAction = (res)=>{
        localStorage.setItem("access-token", res.accessToken);
        setUser({loggedIn: true, token:res.accessToken});
    }
	return (
		<div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "13em"}}>
            <h1 style={{marginBottom: '1em'}}>Login Page</h1>
			<FacebookLogin
				appId="756802681640583"
				fields="name,email,picture"
				callback={loginAction}
			/>
		</div>
	);
};

export default LoginPage;
