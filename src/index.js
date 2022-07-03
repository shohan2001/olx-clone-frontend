import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
    palette: {
        primary: {
            main: "#D23F57 ",
        },
        secondary: {
            main: "#edf2fb ",
        },
        text: {
            primary: "#000000",
        },
        background: {
            default: "#F6F9FC",
            paper: "#fff",
        },
    },
});

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
