import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [user, setUser] = useState({});

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const apiCall = () => {
            axios
                .get("https://olx-clone-iitg.herokuapp.com/user", {
                    withCredentials: true,
                })
                .then((res) => {
                    //   console.log(res.data);

                    setUser(res.data);
                    setIsLoggedIn(true);
                })
                .catch((err) => {
                    console.log(err);
                    console.log(err.message);
                    setIsLoggedIn(false);
                });
        };
        apiCall();
        // axios
        //     .get("https://olx-clone-iitg.herokuapp.com/user", {
        //         withCredentials: true,
        //     })
        //     .then((res) => {
        //         //   console.log(res.data);
        //         console.res(res);
        //         setUser(res.data);
        //         setIsLoggedIn(true);
        //     })
        //     .catch((err) => {
        //         console.log("failed");
        //         console.log(err);
        //         console.log(err.message);
        //         setIsLoggedIn(false);
        //     });
        // fetch("/user", {
        //     withCredntials: true,
        //     credentials: "include",

        //     headers: {
        //         "Content-Type": "application",
        //     },
        // }).then((Response) =>
        //     Response.json()
        //         .then((data) => {
        //             console.log(data);
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //             console.log(err.message);
        //             setIsLoggedIn(false);
        //         })
        // );
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
