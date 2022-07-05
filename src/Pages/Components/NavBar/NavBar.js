import { useState } from "react";
import navStyles from "./NavBar.module.css";
import SearchBar from "./SearchBar";
import { Container } from "@mui/system";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Fab, Typography, Box, Button, Menu, MenuItem } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AppsIcon from "@mui/icons-material/Apps";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AddIcon from "@mui/icons-material/Add";

// context import
import { AuthContext } from "../../../Context/AuthContext";
import { useContext } from "react";

const NavBar = ({ categoryName }) => {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const [anchorEl2, setAnchorEl2] = useState(null);
    const openMenu2 = Boolean(anchorEl2);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick2 = (e) => {
        setAnchorEl2(e.currentTarget);
    };
    const handleClose2 = (event) => {
        setAnchorEl2(null);
    };

    return (
        <div className={navStyles.navBody}>
            <div className={navStyles.content1}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <div
                        className={navStyles.Logo}
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        {" "}
                        <div>
                            <h2>Olx IITG</h2>
                        </div>
                        <div>
                            {isLoggedIn ? (
                                <div className={navStyles.icons2}>
                                    <Fab
                                        aria-label="like"
                                        size="small"
                                        color="secondary"
                                        sx={{ boxShadow: "none" }}
                                        aria-controls="user-menu"
                                        aria-haspopup="true"
                                        aria-expanded={
                                            openMenu2 ? "true" : undefined
                                        }
                                        onClick={handleClick2}
                                    >
                                        <PersonOutlineIcon />
                                    </Fab>
                                </div>
                            ) : (
                                <Box
                                    onClick={() => {
                                        window.open(
                                            "http://localhost:5000/auth/outlook",
                                            "_self"
                                        );
                                    }}
                                    sx={{
                                        cursor: "pointer",
                                        display: {
                                            lg: "none",
                                            md: "none",
                                            sm: "none",
                                            xs: "block",
                                        },
                                    }}
                                >
                                    Login
                                </Box>
                            )}
                        </div>
                    </div>
                </Box>
                <Container sx={{ width: "56%", fontSize: "0.85rem" }}>
                    <SearchBar />
                </Container>

                {!isLoggedIn ? (
                    <Box
                        onClick={() => {
                            window.open(
                                "http://localhost:5000/auth/outlook",
                                "_self"
                            );
                        }}
                        sx={{
                            cursor: "pointer",
                            display: {
                                lg: "block",
                                md: "block",
                                sm: "block",
                                xs: "none",
                            },
                        }}
                    >
                        Login
                    </Box>
                ) : (
                    <div className={navStyles.icons1}>
                        <Fab
                            aria-label="like"
                            size="small"
                            color="secondary"
                            sx={{ boxShadow: "none" }}
                            aria-controls="user-menu"
                            aria-haspopup="true"
                            aria-expanded={openMenu2 ? "true" : undefined}
                            onClick={handleClick2}
                        >
                            <PersonOutlineIcon />
                        </Fab>
                        <Menu
                            id="user-menu"
                            anchorEl={anchorEl2}
                            open={openMenu2}
                            onClose={handleClose2}
                        >
                            <MenuItem
                                onClick={() => {
                                    navigate("/profile");
                                }}
                            >
                                Profile
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    navigate("/myAds");
                                }}
                            >
                                My Ads
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    window.open(
                                        "http://localhost:5000/auth/logout",
                                        "_self"
                                    );
                                }}
                            >
                                Logout
                            </MenuItem>
                        </Menu>

                        {/* <Button
                            onClick={() => {
                                window.open(
                                    "http://localhost:5000/auth/logout",
                                    "_self"
                                );
                            }}
                        >
                            Logout
                        </Button> */}
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

                        backgroundColor: "secondary.main",
                        borderRadius: "7px",
                        paddingRight: 1,
                        width: { lg: "23.5%", md: "30%", sm: "50%", xs: "50%" },
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

                            color: "#495057",
                        }}
                    >
                        <AppsIcon fontSize="inherit" sx={{ marginRight: 1 }} />
                        {categoryName}{" "}
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
                        value="Cars"
                        onClick={(e) => {
                            handleClose(e);
                            navigate("/category/Cars");
                            window.location.reload();
                        }}
                        sx={{
                            color: "#495057",
                            width: { lg: "19vw", xs: "40vw%" },
                        }}
                    >
                        <TimeToLeaveIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Cars
                    </MenuItem>
                    <MenuItem
                        onClick={(e) => {
                            handleClose(e);
                            navigate("/category/Bikes");
                            window.location.reload();
                        }}
                        sx={{
                            color: "#495057",
                            width: { lg: "19vw", xs: "40vw%" },
                        }}
                    >
                        <TimeToLeaveIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Bikes/Scooters
                    </MenuItem>
                    <MenuItem
                        sx={{
                            color: "#495057",
                            width: { lg: "19vw", xs: "40vw%" },
                        }}
                        onClick={(e) => {
                            handleClose(e);
                            navigate("/category/Cycle");
                            window.location.reload();
                        }}
                    >
                        <PhoneAndroidIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Cycle
                    </MenuItem>
                    <MenuItem
                        onClick={(e) => {
                            handleClose(e);
                            navigate("/category/Phones");
                            window.location.reload();
                        }}
                        sx={{
                            color: "#495057",
                            width: { lg: "19vw", xs: "40vw%" },
                        }}
                    >
                        <PhoneAndroidIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Mobile phones
                    </MenuItem>
                    <MenuItem
                        onClick={(e) => {
                            handleClose(e);
                            navigate("/category/Laptops");
                            window.location.reload();
                        }}
                        sx={{
                            color: "#495057",
                            width: { lg: "19vw", xs: "40vw%" },
                        }}
                    >
                        <TimeToLeaveIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Laptop
                    </MenuItem>
                    <MenuItem
                        onClick={(e) => {
                            handleClose(e);
                            navigate("/category/Electronics");
                            window.location.reload();
                        }}
                        sx={{
                            color: "#495057",
                            width: { lg: "19vw", xs: "40vw%" },
                        }}
                    >
                        <TimeToLeaveIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Electronic Accessories
                    </MenuItem>
                    <MenuItem
                        onClick={(e) => {
                            handleClose(e);
                            navigate("/category/Fashion");
                            window.location.reload();
                        }}
                        sx={{
                            color: "#495057",
                            width: { lg: "19vw", xs: "40vw%" },
                        }}
                    >
                        <TimeToLeaveIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Fashion
                    </MenuItem>
                    <MenuItem
                        onClick={(e) => {
                            handleClose(e);
                            navigate("/category/Beddings");
                            window.location.reload();
                        }}
                        sx={{
                            color: "#495057",
                            width: { lg: "19vw", xs: "40vw%" },
                        }}
                    >
                        <TimeToLeaveIcon
                            fontSize="medium"
                            sx={{ paddingRight: 1 }}
                        />
                        Bedding
                    </MenuItem>
                    <MenuItem
                        onClick={(e) => {
                            handleClose(e);
                            navigate("/category/Furnitures");
                            window.location.reload();
                        }}
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
                        onClick={(e) => {
                            handleClose(e);
                            navigate("/category/Books");
                            window.location.reload();
                        }}
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
                        onClick={(e) => {
                            handleClose(e);
                            navigate("/category/Sports");
                            window.location.reload();
                        }}
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
                        onClick={(e) => {
                            handleClose(e);
                            navigate("/category/Others");
                            window.location.reload();
                        }}
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
                    {/* <Typography
                        sx={{
                            fontSize: "0.9rem",
                            fontWeight: 300,
                            cursor: "pointer",

                            textDecoration: "none",
                        }}
                        onClick={(e) => {
                            navigate("/userPage");
                        }}
                    >
                        User Account
                    </Typography> */}

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
