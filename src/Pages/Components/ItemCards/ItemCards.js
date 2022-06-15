import { Box } from "@mui/system";
import {
    Typography,
    Card,
    CardActions,
    CardMedia,
    CardContent,
    autocompleteClasses,
} from "@mui/material";

const ItemCards = ({ cardDetails }) => {
    return (
        <Card
            sx={{
                maxWidth: 290,
                m: 2,
                height: 408,
                backgroundColor: "#f6fff8",
                borderRadius: 2,
            }}
        >
            <CardMedia
                component="img"
                width="200"
                image={cardDetails.image}
                alt={cardDetails.title}
                sx={{
                    height: 290,
                    width: 290,
                }}
            />
            <CardContent>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>{cardDetails.title}</Box>
                    <Box
                        sx={{
                            color: "primary.main",
                            fontWeight: 450,
                            fontSize: 17,
                        }}
                    >
                        ₹{" "}
                        {cardDetails.price.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                        })}
                    </Box>
                    <Box sx={{ marginTop: 1 }}>
                        <Box sx={{ fontSize: 12, fontWeight: 300 }}>
                            {cardDetails.location}
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ItemCards;
