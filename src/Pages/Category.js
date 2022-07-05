import { Box } from "@mui/material";
import NavBar from "./Components/NavBar/NavBar";
import { useEffect, useState } from "react";
import ItemCards from "./Components/ItemCards/ItemCards";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
const CategoryPage = () => {
    const categoryName = useParams().id;
    const [itemData, setItemData] = useState([]);

    useEffect(() => {
        fetch(`/api/product/category/${categoryName}`).then((Response) =>
            Response.json().then((data) => setItemData(data.data))
        );
    }, [categoryName]);

    return (
        <Box>
            <NavBar categoryName={categoryName} />
            <Box sx={{ width: "84%", margin: "0 auto" }}>
                <Box>
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
        </Box>
    );
};

export default CategoryPage;
