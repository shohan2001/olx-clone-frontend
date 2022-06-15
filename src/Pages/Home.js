import NavBar from "./Components/NavBar/NavBar";
import ItemCards from "./Components/ItemCards/ItemCards";
import iphone from "./iphone13.png";
import { Box } from "@mui/system";
import { Typography, Grid, GridC } from "@mui/material";
import { useState } from "react";

const Home = () => {
    const data = {
        title: "Iphone 13 Pro Max",
        price: 50000,
        location: "Dihing Hostel, IIT Guwahati",
        image: iphone,
        Description: "",
    }; // recieved from api call

    const [itemData, setItemData] = useState([
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
    ]);

    return (
        <div>
            <NavBar />
            {/* <img src={iphone} alt="" /> */}
            <Box sx={{ width: "84%", margin: "0 auto" }}>
                <Typography variant="h4" sx={{ m: 3 }}>
                    Latest Deals
                </Typography>
                <Box>
                    {" "}
                    {/*Grid */}
                    <Grid container>
                        {itemData.map((item) => (
                            <Grid item xs={12} lg={3} md={4} sm={6}>
                                <ItemCards cardDetails={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </div>
    );
};

export default Home;
