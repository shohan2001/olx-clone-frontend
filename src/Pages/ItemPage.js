import NavBar from "./Components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Slider from "react-slick";
import slideStyle from "./itemStyles.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { deepOrange, deepPurple } from "@mui/material/colors";
import {
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
    CardActions,
    CardHeader,
    IconButton,
    Avatar,
    Button,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

const ItemPage = () => {
    const navigate = useNavigate();
    const itemID = useParams().id;

    const [itemData, setItemData] = useState({});
    const [imageData, setImageData] = useState([]);
    const [isSold, setIsSold] = useState(false);
    useEffect(() => {
        const handleData = (data) => {
            setItemData(data);
            setIsSold(data.sold);
            setImageData(data.images);
        };

        fetch(`/api/product/${itemID}`).then((Response) =>
            Response.json().then((data) => handleData(data))
        );
    }, []);

    const SampleNextArrow = ({ onClick }) => {
        return (
            <Box onClick={onClick} className={slideStyle.arrowRight}>
                <ChevronRightIcon
                    fontSize="large"
                    color="secondary"
                    sx={{
                        opacity: "0.5",
                        backgroundColor: "#000",
                        borderRadius: "100%",
                        color: "#fff",
                    }}
                />
            </Box>
        );
    };

    const SamplePrevArrow = ({ onClick }) => {
        return (
            <Box onClick={onClick} className={slideStyle.arrowLeft}>
                <ChevronLeftIcon
                    fontSize="large"
                    color="secondary"
                    sx={{
                        opacity: "0.5",
                        backgroundColor: "#000",
                        borderRadius: "100%",
                        color: "#fff",
                    }}
                />
            </Box>
        );
    };

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        fade: false,
        autoplay: false,
        speed: 800,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <Box>
            <NavBar categoryName={"Categories"} />
            <Box
                sx={{
                    p: 2,
                    width: "80%",
                    margin: "0 auto",

                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 2,
                }}
            >
                <Grid container>
                    <Grid item xs={12} lg={7} md={7} sm={12}>
                        <Slider {...settings} className={slideStyle.content}>
                            {imageData.map((img) => (
                                <Box
                                    key={img}
                                    sx={{ width: "100%", bgcolor: "black" }}
                                >
                                    <img src={img} alt="IMG" />
                                </Box>
                            ))}
                        </Slider>
                    </Grid>
                    <Grid item xs={12} lg={5} md={5} sm={12}>
                        <Box
                            sx={{
                                marginX: 2,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Card
                                sx={{
                                    width: 400,
                                    border: "0.1px solid #D3D3D3",
                                    pointer: "none",
                                    marginBottom: 1,
                                }}
                            >
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography
                                            gutterBottom
                                            fontSize={30}
                                            component="div"
                                            fontWeight={500}
                                        >
                                            ₹{" "}
                                            {itemData.price
                                                ? itemData.price.toLocaleString(
                                                      undefined,
                                                      {
                                                          maximumFractionDigits: 2,
                                                      }
                                                  )
                                                : "0"}
                                        </Typography>
                                        <FavoriteBorderIcon
                                            sx={{ marginBottom: "0.9rem" }}
                                        />
                                    </Box>

                                    <Typography
                                        variant="body"
                                        color="text.secondary"
                                        fontSize={15}
                                    >
                                        {itemData.description}
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Box
                                        sx={{
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            fontSize={12}
                                            sx={{
                                                marginTop: 1,
                                                marginLeft: 1,
                                            }}
                                        >
                                            {itemData.location}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            fontSize={12}
                                            sx={{
                                                marginTop: 1,
                                                marginLeft: 1,
                                            }}
                                        >
                                            {new Date(
                                                itemData.postedDate
                                            ).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </Typography>
                                    </Box>
                                </CardActions>
                            </Card>

                            <Card
                                sx={{
                                    width: 400,
                                    border: "0.1px solid #D3D3D3",
                                    pointer: "none",
                                    marginY: 1,
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        fontWeight={400}
                                    >
                                        Seller Description
                                    </Typography>

                                    <CardHeader
                                        avatar={
                                            <Avatar
                                                sx={{
                                                    bgcolor: deepOrange[500],
                                                }}
                                            >
                                                S
                                            </Avatar>
                                        }
                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title="Mr Money"
                                        subheader="July 06, 2022"
                                    />

                                    <Box
                                        sx={{
                                            border: "2px solid black",
                                            p: 1,
                                            borderRadius: 1,
                                            textAlign: "center",
                                            m: 1,
                                            cursor: "pointer",
                                        }}
                                        backgroundColor={
                                            isSold ? "primary.main" : "#fff"
                                        }
                                        onClick={() => {
                                            if (isSold) {
                                                setIsSold(false);
                                            } else {
                                                setIsSold(true);
                                            }
                                            itemData.sold = itemData.sold
                                                ? false
                                                : true;

                                            fetch(
                                                `/api/product/update/${itemData._id}`,
                                                {
                                                    method: "PUT",
                                                    headers: {
                                                        "Content-Type":
                                                            "application/json",
                                                    },
                                                    body: JSON.stringify(
                                                        itemData
                                                    ),
                                                }
                                            )
                                                .then((Response) =>
                                                    console.log(Response)
                                                )
                                                .catch((err) =>
                                                    console.log(err)
                                                );
                                        }}
                                    >
                                        {!isSold
                                            ? "Mark as sold"
                                            : "Mark as not sold"}
                                    </Box>
                                    <Box
                                        sx={{
                                            border: "2px solid black",
                                            p: 1,
                                            borderRadius: 1,
                                            textAlign: "center",
                                            m: 1,
                                            cursor: "pointer",
                                        }}
                                        onClick={() => {
                                            navigate(`/edit/${itemData._id}`);
                                        }}
                                    >
                                        Edit Ad
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        backgroundColor: "#fff",
                        width: "58.5%",
                        marginTop: 3,
                        border: "0.1px solid #D3D3D3",
                        boxShadow:
                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                        borderRadius: 1,
                    }}
                >
                    <Typography
                        gutterBottom
                        fontSize={30}
                        component="div"
                        fontWeight={500}
                        sx={{ p: 2 }}
                    >
                        {itemData.title}
                        <Box
                            sx={{
                                width: "99.2%",
                                backgroundColor: "#D3D3D3",
                                height: "1px",
                                marginTop: 2,
                            }}
                        ></Box>

                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            fontWeight={500}
                            sx={{ marginTop: 1 }}
                        >
                            Overview
                        </Typography>
                        <Typography>Brand : {itemData.brand}</Typography>
                        <Typography>Category : {itemData.category}</Typography>
                    </Typography>
                </Box>

                <Box
                    sx={{
                        backgroundColor: "#fff",
                        width: "58.5%",

                        border: "0.1px solid #D3D3D3",
                        boxShadow:
                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                        borderRadius: 1,
                    }}
                >
                    <Typography
                        gutterBottom
                        fontSize={30}
                        component="div"
                        fontWeight={500}
                        sx={{ p: 2 }}
                    >
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            fontWeight={500}
                            sx={{ marginTop: 1 }}
                        >
                            Description
                        </Typography>
                        <Typography
                            color="text.secondary"
                            sx={{ paddingTop: 1 }}
                        >
                            {itemData.description}
                        </Typography>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ItemPage;
