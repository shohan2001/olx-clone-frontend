import NavBar from "./Components/NavBar/NavBar";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { useState } from "react";
import ItemCards from "./Components/ItemCards/ItemCards";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Typography } from "@mui/material";
const MyAds = () => {
    const [itemData, setItemData] = useState([]);

    useEffect(() => {
        fetch("/api/product").then((Response) =>
            Response.json().then((data) => setItemData(data.data))
        );
    }, []);

    const { user } = useContext(AuthContext);
    return (
        <Box>
            <NavBar categoryName={"All Categories"} />
            <Box sx={{ width: "84%", margin: "0 auto" }}>
                {/*Grid */}
                <Typography variant="h4" sx={{ m: 1 }}>
                    My Ads
                </Typography>
                <Grid container>
                    {itemData.map((item) => {
                        if (user._id === item.sellerID) {
                            return (
                                <Grid item xs={12} lg={3} md={6} sm={6}>
                                    <ItemCards cardDetails={item} />
                                </Grid>
                            );
                        } else {
                            return null;
                        }
                    })}
                </Grid>
            </Box>
        </Box>
    );
};

export default MyAds;
