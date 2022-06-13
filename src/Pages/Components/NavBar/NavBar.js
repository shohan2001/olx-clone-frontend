import { useState } from "react";
import navStyles from "./NavBar.module.css";
import SearchBar from "./SearchBar";
import { Container } from "@mui/system";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
    Menu,
    Fab,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
} from "@mui/material";

const NavBar = () => {
    const [isLoggdIn, setIsLoggedIn] = useState(false);
    return (
        <div className={navStyles.navBody}>
            <div className={navStyles.content}>
                <div className={navStyles.Logo}>
                    <h2>Olx IITG</h2>
                </div>
                <Container sx={{ width: "56%", fontSize: "0.85rem" }}>
                    <SearchBar />
                </Container>
                {isLoggdIn ? (
                    <div>Login</div>
                ) : (
                    <div className={navStyles.icons}>
                        <Fab
                            aria-label="like"
                            size="small"
                            color="secondary"
                            sx={{ boxShadow: "none" }}
                        >
                            <PersonOutlineIcon />
                        </Fab>
                        <Fab
                            aria-label="like"
                            size="small"
                            color="secondary"
                            sx={{ boxShadow: "none" }}
                        >
                            <ShoppingCartIcon />
                        </Fab>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
