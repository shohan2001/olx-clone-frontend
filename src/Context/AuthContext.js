import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [user, setUser] = useState({});
    const isLogin = document.cookie.includes("token");
    const [isLoggedIn, setIsLoggedIn] = useState(isLogin);

    useEffect(() => {
        const apiCall = () => {
            axios
                .get("https://olx-clone-iitg.herokuapp.com/user", {
                    withCredentials: true,
                })
                .then((res) => {
                    //   console.log(res.data);
                    console.res(res);
                    setUser(res.data);
                    setIsLoggedIn(true);
                })
                .catch((err) => {
                    console.log(err);
                    setIsLoggedIn(false);
                });
        };
        apiCall();
        ////////// @end
    }, []);

    return (
        <AuthContext.Provider
            value={{ user, isLoggedIn, setIsLoggedIn, setUser }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
