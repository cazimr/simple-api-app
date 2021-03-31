import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/useUserContext";
import { rowStyle,inputStyle, formStyle, buttonStyle } from "./style";
import { getData, writeToFile, logout } from "./helpers";

function ProfilePage() {
	const [data, setData] = useState();
	const { user, setUser } = useUserContext();
	const [resMessage, setResMessage] = useState();

	useEffect(() => {
		getData(user, setUser, setData);
	}, [user, setUser]);

	return (
		<div>
			{data && (
				<form style={formStyle}>
					<h1>Profile page</h1>
					<div style={rowStyle}>
						<label>Id: </label>
						<input
							name="id"
							style={inputStyle}
							value={data.id}
							onChange={(ev) => {
								setResMessage();
								setData({...data,id: ev.target.value});
							}}
						/>
					</div>
                    <div style={rowStyle}>
						<label>Name: </label>
						<input
							name="name"
							style={inputStyle}
							value={data.name}
							onChange={(ev) => {
								setResMessage();
								setData({...data,name: ev.target.value});
							}}
						/>
					</div>
                    <div style={rowStyle}>
						<label>Email: </label>
						<input
							name="email"
							style={inputStyle}
							value={data.email}
							onChange={(ev) => {
								setResMessage();
								setData({...data,email: ev.target.value});
							}}
						/>
					</div>
                    <div style={rowStyle}>
						<label>Picture: </label>
						<input
							name="picture"
							style={inputStyle}
							value={data.picture}
							onChange={(ev) => {
								setResMessage();
								setData({...data,picture: ev.target.value});
							}}
						/>
					</div>
					<div style={{ ...rowStyle, marginTop: "2em" }}>
						<button type="button" style={buttonStyle} onClick={() => writeToFile(data, setResMessage)}>
							Write to file
						</button>
						<button type="button" style={buttonStyle} onClick={() => logout(setUser)}>
							Logout
						</button>
					</div>
					{resMessage && <div style={{ color: resMessage.color }}>{resMessage.text}</div>}
				</form>
			)}
		</div>
	);
}

export default ProfilePage;
