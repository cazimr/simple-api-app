import axios from 'axios';


export 	const logout = (setUser) => {
    setUser({ loggedIn: "false" });
    localStorage.removeItem("access-token");
};

export const getData = (user,setUser,setData) => {
    axios
    .get(`https://graph.facebook.com/me?fields=email,name,id,picture&access_token=${user.token}`)
    .then((res) => {
        setData({ ...res.data, picture: res.data.picture.data.url });
        console.log("RES", res.data);
    })
    .catch((err) => {
        console.log("ERR", err);
        setUser({ loggedIn: false });
        localStorage.removeItem("access-token");
    });
}

export const writeToFile = (data,setResMessage) => {
    axios
        .post("http://localhost:5000/writeToFile", { fileName: `user-${data.name}`, data: data })
        .then((res) => {
            setResMessage({ color: "green", text: `Successfuly written to file "user-${data.name}.json"` });
            console.log("Success");
        })
        .catch((err) => {
            setResMessage({ color: "red", text: `Error writing to file: ${err.response}` });
            console.log("Err", err);
        });
};