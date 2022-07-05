import { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ReactFileReader from "react-file-reader";
import ClearIcon from "@mui/icons-material/Clear";

const Sell = () => {
  const navigate = useNavigate();


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
          borderRadius: 5,
          marginTop: 5,
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <Typography
          gutterBottom
          fontSize={20}
          component="div"
          fontWeight={100}
          textAlign="left"
        >
          Email Address
        </Typography>

        <Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ marginBottom: 2 }}
          ></Typography>

          {/* <Grid container spacing={3}></Grid>
          <Grid item xs={12} sm={12}></Grid> */}

          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="email"
              fullWidth
              // autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
        </Box>
      </Box>

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
      ></Box>
      <Box
        sx={{
          width: { lg: "34%", md: "44%", sm: "52%", xs: "80%" },

          margin: "10px auto",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          p: 3,
          borderRadius: 5,
          marginTop: 5,
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <Typography
          gutterBottom
          fontSize={20}
          component="div"
          fontWeight={100}
          textAlign="left"
        >
          Profile
        </Typography>

        <Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ marginBottom: 2 }}
          ></Typography>

          {/* <Grid container spacing={3}></Grid>
          <Grid item xs={12} sm={12}></Grid> */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
              />
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
                id="PhoneNumber"
                name="PhoneNumber"
                label="Phone Number"
                fullWidth
                variant="standard"
              />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
            <Button
              variant="contained"
              sx={{ borderRadius: 2, m: 2 }}
            >
              Submit
            </Button>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default Sell;
