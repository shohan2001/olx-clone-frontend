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

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Sell = () => {
        const navigate = useNavigate();

    const [category, setCategory] = useState("");
    const [title, setTtitle] = useState("");

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    return (
      <Box
        sx={{
          width: "34%",

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
          <Typography variant="h6" gutterBottom>
            Details
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Box sx={{ minWidth: 120 }}>
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
                    <MenuItem value={"Bikes/Scooters"}>Bikes/Scooters</MenuItem>
                    <MenuItem value={"Cycles"}>Cycles</MenuItem>
                    <MenuItem value={"Mobile Phones"}>Mobile Phones</MenuItem>
                    <MenuItem value={"Laptop"}>Laptop</MenuItem>
                    <MenuItem value={"Electronics Accesories"}>
                      Electronics Accesories
                    </MenuItem>
                    <MenuItem value={"Fashion"}>Fashion</MenuItem>
                    <MenuItem value={"Bedding"}>Bedding</MenuItem>
                    <MenuItem value={"Furniture"}>Furniture</MenuItem>
                    <MenuItem value={"Books"}>Books</MenuItem>
                    <MenuItem value={"Sports"}>Sports</MenuItem>
                    <MenuItem value={"Others"}>Others</MenuItem>
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
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="Pictures"
                name="Pictures"
                label="Pictures"
                fullWidth
                // autoComplete="shipping address-line1"
                variant="standard"
              />
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
              />
            </Grid>
            <Button
              variant="contained"
              sx={{ borderRadius: 2 }}
              onClick={() => {
                navigate("/sell");
              }}
            >
              Post
            </Button>
          </Grid>
        </Box>
      </Box>
    );
};

export default Sell;
