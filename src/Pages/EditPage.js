import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import ReactFileReader from "react-file-reader";
import ClearIcon from "@mui/icons-material/Clear";
const Edit = () => {
    const navigate = useNavigate();
    const itemID = useParams().id;
    const [itemData, setItemData] = useState({});
    const [isInvalid, setIsInvalid] = useState(false);

    const [category, setCategory] = useState("");
    const [title, settitle] = useState("");
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState("");
    const [images, setimages] = useState([]);
    const { user } = useContext(AuthContext);

    const [sellerPhoneNumber, setSellerPhoneNumber] = useState(
        user.phoneNumber
    );
    const [sellerName, setSellerName] = useState(user.name);

    const handleChange = (event) => {
        setIsInvalid(false);
        setCategory(event.target.value);
    };
    const handleTitleChange = (event) => {
        setIsInvalid(false);
        settitle(event.target.value);
    };
    const handleBrandChange = (event) => {
        setIsInvalid(false);
        setBrand(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setIsInvalid(false);
        setDescription(event.target.value);
    };
    const handlePriceChange = (event) => {
        setIsInvalid(false);
        setPrice(event.target.value);
    };
    const handleLocationChange = (event) => {
        setIsInvalid(false);
        setLocation(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setIsInvalid(false);
        setSellerPhoneNumber(event.target.value);
    };
    const handleNameChange = (event) => {
        setIsInvalid(false);
        setSellerName(event.target.value);
    };

    const handleUpdate = () => {
        if (
            title.length > 0 &&
            description.length > 0 &&
            price > 0 &&
            category.length > 0
        ) {
            // check if price is valid number or not
            if (isNaN(price)) {
                setIsInvalid(true);
                return;
            }
            const data = {
                category,
                title,
                brand,
                description,
                price,
                location,
                images,

                sold: itemData.sold,
                sellerName,
                sellerPhoneNumber,

                postedDate: new Date(),
            };

            // how to make post request from local react front-end to node backend

            fetch(`/api/product/update/${itemData._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then(navigate(`/itemPage/${itemData._id}`))

                .catch((err) => console.log(err));
        } else {
            setIsInvalid(true);
        }
    };

    useEffect(() => {
        const handleData = (data) => {
            setItemData(data);
            setCategory(data.category);
            settitle(data.title);
            setBrand(data.brand);
            setDescription(data.description);
            setPrice(data.price);
            setLocation(data.location);
            setimages(data.images);
        };

        fetch(`/api/product/${itemID}`).then((Response) =>
            Response.json().then((data) => handleData(data))
        );
    }, [itemID]);
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    m: 2,
                    cursor: "pointer",
                }}
                onClick={() => {
                    navigate("/");
                }}
            >
                <KeyboardBackspaceIcon fontSize="large" />{" "}
            </Box>
            <Box
                sx={{
                    width: { lg: "34%", md: "44%", sm: "52%", xs: "80%" },

                    margin: "10px auto",
                    p: 3,
                    borderRadius: 5,
                    marginTop: 5,
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                // apply red border if invalid
                style={isInvalid ? { border: "1px solid red" } : {}}
            >
                <Typography
                    gutterBottom
                    fontSize={30}
                    component="div"
                    fontWeight={500}
                    textAlign="center"
                >
                    Edit Ad{" "}
                </Typography>

                <Box>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ marginBottom: 2 }}
                    >
                        Details
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <Box>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Category
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={category}
                                        label="Category"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={"Cars"}>Cars</MenuItem>
                                        <MenuItem value={"Bikes/Scooters"}>
                                            Bikes/Scooters
                                        </MenuItem>
                                        <MenuItem value={"Cycles"}>
                                            Cycles
                                        </MenuItem>
                                        <MenuItem value={"Mobile Phones"}>
                                            Mobile Phones
                                        </MenuItem>
                                        <MenuItem value={"Laptop"}>
                                            Laptop
                                        </MenuItem>
                                        <MenuItem
                                            value={"Electronics Accesories"}
                                        >
                                            Electronics Accesories
                                        </MenuItem>
                                        <MenuItem value={"Fashion"}>
                                            Fashion
                                        </MenuItem>
                                        <MenuItem value={"Bedding"}>
                                            Bedding
                                        </MenuItem>
                                        <MenuItem value={"Furniture"}>
                                            Furniture
                                        </MenuItem>
                                        <MenuItem value={"Books"}>
                                            Books
                                        </MenuItem>
                                        <MenuItem value={"Sports"}>
                                            Sports
                                        </MenuItem>
                                        <MenuItem value={"Others"}>
                                            Others
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Title"
                                name="Title"
                                label="Ad-Title"
                                value={title}
                                fullWidth
                                // autoComplete="shipping address-line1"
                                variant="standard"
                                onChange={handleTitleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Brand"
                                name="Brand"
                                label="Brand"
                                value={brand}
                                fullWidth
                                // autoComplete="shipping address-line1"
                                variant="standard"
                                onChange={handleBrandChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Description"
                                name="Description"
                                label="Description"
                                value={description}
                                fullWidth
                                // autoComplete="shipping address-line1"
                                variant="standard"
                                onChange={handleDescriptionChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Price"
                                name="Price"
                                label="Price"
                                fullWidth
                                // autoComplete="shipping address-line1"
                                variant="standard"
                                value={price}
                                onChange={handlePriceChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            {/* <TextField
                                required
                                id="images"
                                name="images"
                                label="images"
                                fullWidth
                                // autoComplete="shipping address-line1"
                                variant="standard"
                                inputProps={{ type: "file" }}
                                onChange={(e) => {
                                    setimages([...images, e.target.files]);
                                }}
                            /> */}
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Typography color="text.secondary">
                                    Images
                                </Typography>
                                <ReactFileReader
                                    base64={true}
                                    multipleFiles={true}
                                    handleFiles={(files) => {
                                        setimages([...images, files.base64]);
                                    }}
                                >
                                    <Button>Upload</Button>
                                </ReactFileReader>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                {images.map((image, indexImage) => (
                                    <Box sx={{ display: "flex", m: 0 }}>
                                        <Card
                                            sx={{
                                                width: "80px",
                                                height: "80px",
                                                border: "2px solid black",
                                                pointer: "none",
                                                marginY: 1,
                                                m: 1,
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image={image}
                                                alt="Paella dish"
                                            />
                                        </Card>
                                        <ClearIcon
                                            sx={{
                                                p: 0,
                                                m: 0,
                                                border: "1px solid black",
                                                borderRadius: "100%",
                                                cursor: "pointer",
                                                position: "relative",
                                                left: "-8px",
                                            }}
                                            onClick={() => {
                                                setimages(
                                                    images.filter(
                                                        (image, index) => {
                                                            return (
                                                                index !==
                                                                indexImage
                                                            );
                                                        }
                                                    )
                                                );
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Location"
                                name="Location"
                                label="Location"
                                fullWidth
                                // autoComplete="shipping address-line1"
                                variant="standard"
                                value={location}
                                onChange={handleLocationChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Seller Name"
                                name="Seller Name"
                                label="Seller Name"
                                fullWidth
                                // autoComplete="shipping address-line1"
                                variant="standard"
                                value={sellerName}
                                onChange={handleNameChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Phone Number"
                                name="Phone Number"
                                label="Phone Number"
                                fullWidth
                                // autoComplete="shipping address-line1"
                                variant="standard"
                                value={sellerPhoneNumber}
                                onChange={handlePhoneChange}
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                        <Button
                            variant="contained"
                            sx={{ borderRadius: 2, m: 2 }}
                            onClick={handleUpdate}
                        >
                            Update
                        </Button>
                    </Box>
                    {isInvalid ? (
                        <Typography
                            color="primary.main"
                            variant="h7"
                            sx={{ textAlign: "center" }}
                        >
                            Please fill all the fields
                        </Typography>
                    ) : (
                        <Box />
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Edit;
