import axios from "axios";
import React, { useState, useEffect, useContext, createContext } from "react";

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}> {children} </authContext.Provider>
    );
}

export const useAuth = () => useContext(authContext);

function useProvideAuth() {
    //const history = useHistory();
    const baseUrl = "http://localhost:8000/api";
    const [user, setUser] = useState();
    //const [token, setToken] = useState(null);
    const signin = (credentials) => {
        axios
            .post(`${baseUrl}/login`, credentials)
            .then((resp) => {
                //console.log(resp.data);
                setUser(resp.data);
                //setToken(resp.data.token);
                localStorage.setItem("user", JSON.stringify(resp.data));
                //history.push("/home");
                //console.log(user);
            })
            .catch((err) => console.log(err));
    };

    const signout = (cb) => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        setUser({});
        localStorage.clear();
        axios
            .post(`${baseUrl}/logout`, {}, config)
            .then((resp) => {
                cb();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            console.log("user set");
            setUser(foundUser);
        }
    }, []);

    return {
        user,
        signin,
        signout,
    };
}
