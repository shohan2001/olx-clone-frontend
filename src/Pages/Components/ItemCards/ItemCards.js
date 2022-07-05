import { Box } from "@mui/system";
import { Card, CardMedia, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ItemCards = ({ cardDetails }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/itemPage/${cardDetails._id}`);
    };
    return (
        <Card
            sx={{
                maxWidth: 290,
                m: 2,
                height: 408,
                backgroundColor: "#f6fff8",
                borderRadius: 2,
            }}
            onClick={handleClick}
        >
            <CardMedia
                component="img"
                width="200"
                src={cardDetails.images[0]}
                alt={cardDetails.title}
                sx={{
                    height: 290,
                    width: 280,
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
