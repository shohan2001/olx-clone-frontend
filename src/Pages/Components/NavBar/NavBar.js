import { useState } from "react";
import navStyles from "./NavBar.module.css";
import SearchBar from "./SearchBar";
import { Container } from "@mui/system";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Fab, Typography, Box, Button, Menu, MenuItem } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AppsIcon from "@mui/icons-material/Apps";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useNavigate } from "react-router-dom";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AddIcon from "@mui/icons-material/Add";

const NavBar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = (e) => {
        setAnchorEl(null);
    };

    return (
        <div className={navStyles.navBody}>
            <div className={navStyles.content1}>
                <div
                    className={navStyles.Logo}
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    {" "}
                    <h2>Olx IITG</h2>
                </div>
                <Container sx={{ width: "56%", fontSize: "0.85rem" }}>
                    <SearchBar />
                </Container>
                {!isLoggedIn ? (
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

            <div className={navStyles.content2}>
                <Box
                    sx={{
                        paddingTop: 1,
                        paddingBottom: 1,

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "19vw",
                        backgroundColor: "secondary.main",
                        borderRadius: "7px",
                        paddingRight: 1,
                    }}
                    aria-controls="category-menu"
                    aria-haspopup="true"
                    aria-expanded={openMenu ? "true" : undefined}
                    onClick={handleClick}
                >
                    <Typography
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingLeft: 1,
                            width: "6.8em",
                            color: "#495057",
                        }}
                    >
                        <AppsIcon fontSize="inherit" />
                        Categories{" "}
                    </Typography>
                    {openMenu ? (
                        <KeyboardArrowDownIcon fontSize="small" />
                    ) : (
                        <ChevronRightIcon fontSize="small" />
                    )}
                </Box>
                {/* Drop Down Items */}
                <Menu
                    id="category-menu"
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleClose}
                >
                    <MenuItem
                        onClick={handleClose}
                        sx={{
                            color: "#495057",
                            width: "19vw",
                        }}
                    >
                        <TimeToLeaveIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Cars
                    </MenuItem>
                    <MenuItem
                        onClick={handleClose}
                        sx={{
                            color: "#495057",
                            width: "18.5vw",
                        }}
                    >
                        <TimeToLeaveIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Bikes/Scooters
                    </MenuItem>
                    <MenuItem
                        onClick={handleClose}
                        sx={{
                            color: "#495057",
                            width: "18.5vw",
                        }}
                    >
                        <PhoneAndroidIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Cycle
                    </MenuItem>
                    <MenuItem
                        onClick={handleClose}
                        sx={{
                            color: "#495057",
                            width: "18.5vw",
                        }}
                    >
                        <PhoneAndroidIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Mobile phones
                    </MenuItem>
                    <MenuItem
                        onClick={handleClose}
                        sx={{
                            color: "#495057",
                            width: "18.5vw",
                        }}
                    >
                        <TimeToLeaveIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Laptop
                    </MenuItem>
                    <MenuItem
                        onClick={handleClose}
                        sx={{
                            color: "#495057",
                            width: "18.5vw",
                        }}
                    >
                        <TimeToLeaveIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Electronic Accessories
                    </MenuItem>
                    <MenuItem
                        onClick={handleClose}
                        sx={{
                            color: "#495057",
                            width: "18.5vw",
                        }}
                    >
                        <TimeToLeaveIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Fashion
                    </MenuItem>
                    <MenuItem
                        onClick={handleClose}
                        sx={{
                            color: "#495057",
                            width: "18.5vw",
                        }}
                    >
                        <TimeToLeaveIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Bedding
                    </MenuItem>
                    <MenuItem
                        onClick={handleClose}
                        sx={{
                            color: "#495057",
                            width: "18.5vw",
                        }}
                    >
                        <TimeToLeaveIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Furnitures
                    </MenuItem>
                    <MenuItem
                        onClick={handleClose}
                        sx={{
                            color: "#495057",
                            width: "18.5vw",
                        }}
                    >
                        <TimeToLeaveIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Books
                    </MenuItem>
                    <MenuItem
                        onClick={handleClose}
                        sx={{
                            color: "#495057",
                            width: "18.5vw",
                        }}
                    >
                        <TimeToLeaveIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Sports
                    </MenuItem>
                    <MenuItem
                        onClick={handleClose}
                        sx={{
                            color: "#495057",
                            width: "18.5vw",
                        }}
                    >
                        <TimeToLeaveIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Others
                    </MenuItem>
                </Menu>

                <Box
                    sx={{
                        width: "24vw",
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "0.9rem",
                            fontWeight: 300,
                            cursor: "pointer",
                        }}
                    >
                        Home
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "0.9rem",
                            fontWeight: 300,
                            cursor: "pointer",
                        }}
                    >
                        User Account
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "0.9rem",
                            fontWeight: 300,
                            cursor: "pointer",
                        }}
                    >
                        Pages
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{ borderRadius: 2 }}
                        onClick={() => {
                            navigate("/sell");
                        }}
                    >
                        <AddIcon fontSize="small" sx={{ paddingRight: 0 }} />
                        Sell
                    </Button>
                </Box>
            </div>
        </div>
    );
};

export default NavBar;
