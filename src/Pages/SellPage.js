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
const Sell = () => {
    const [age, setAge] = useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
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
                SELL PAGE{" "}
            </Typography>

            <Box>
                <Typography variant="h6" gutterBottom>
                    Ad Details
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        {/* <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                        /> */}

                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Age
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="family-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Address line 2"
                            fullWidth
                            autoComplete="shipping address-line2"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="shipping address-level2"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="shipping postal-code"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="shipping country"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="secondary"
                                    name="saveAddress"
                                    value="yes"
                                />
                            }
                            label="Use this address for payment details"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Sell;
