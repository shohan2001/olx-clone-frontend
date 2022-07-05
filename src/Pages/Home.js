import NavBar from "./Components/NavBar/NavBar";
import ItemCards from "./Components/ItemCards/ItemCards";

import { Box } from "@mui/system";
import { Typography, Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
    const [itemData, setItemData] = useState([]);

    useEffect(() => {
        fetch("/api/product").then((Response) =>
            Response.json().then((data) => setItemData(data.data))
        );
    }, []);

    return (
        <div>
            <NavBar categoryName={"Categories"} />
           
            <Box sx={{ width: "84%", margin: "0 auto" }}>
                <Typography variant="h4" sx={{ m: 3 }}>
                    Latest Deals
                </Typography>
                <Box>
                    {/*Grid */}
                    <Grid container>
                        {itemData.map((item) => (
                            <Grid item xs={12} lg={3} md={6} sm={6}>
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
