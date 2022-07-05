import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const apiCall = () => {
            axios
                .get("/user")
                .then((res) => {
                    //   console.log(res.data);
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
