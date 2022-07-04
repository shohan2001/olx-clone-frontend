import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ReactFileReader from "react-file-reader";
import ClearIcon from "@mui/icons-material/Clear";
const Sell = () => {
    const navigate = useNavigate();

    const [category, setCategory] = useState("");
    const [title, settitle] = useState("");
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState("");
    const [images, setimages] = useState([]);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const handleTitleChange = (event) => {
        settitle(event.target.value);
    };
    const handleBrandChange = (event) => {
        setBrand(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSubmit = () => {
        const data = {
            category,
            title,
            brand,
            description,
            price,
            location,
            images,
            title,
            sellerID:
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15),

            postedDate: new Date(),
        };

        // how to make post request from local react front-end to node backend

        fetch(`/api/product/sell`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((Response) =>
                Response.json().then((data) => navigate(`/itemPage/${data.id}`))
            )
            .catch((err) => console.log(err));
    };

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
                    boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    p: 3,
                    borderRadius: 1,
                    marginTop: 5,
                }}
            >
                <Typography
                    gutterBottom
                    fontSize={30}
                    component="div"
                    fontWeight={500}
                    textAlign="center"
                >
                    SELL{" "}
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
                                onChange={handlePriceChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <ReactFileReader
                                base64={true}
                                multipleFiles={true}
                                handleFiles={(files) => {
                                    setimages([...images, files.base64]);
                                }}
                            >
                                <Button>Upload</Button>
                            </ReactFileReader>{" "}
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
                            {/* <TextField
                                required
                                id="images"
                                name="images"
                                label="images"
                                fullWidth
                                // autoComplete="shipping address-line1"
                                variant="standard"
                                onChange={(e) => {
                                    // convert image to base64
                                    const reader = new FileReader();
                                    reader.onload = (e) => {
                                        setImages([...images, e.target.result]);
                                    };
                                    reader.readAsDataURL(e.target.files[0]);}}

                            /> */}
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
                                onChange={handleLocationChange}
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                        <Button
                            variant="contained"
                            sx={{ borderRadius: 2, m: 2 }}
                            onClick={handleSubmit}
                        >
                            Post
                        </Button>
                    </Box>
                </Box>
            </Box>
            {console.log(images)}
        </Box>
    );
};

export default Sell;
