import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { Box } from "@mui/system";

import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import Button from "@mui/material/Button";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Profile = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(AuthContext);

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
                    <TextField
                        required
                        id="Email"
                        name="Email"
                        label="Email"
                        fullWidth
                        variant="standard"
                        value={user.email}
                    />

                    {/* <Grid container spacing={3}></Grid>
          <Grid item xs={12} sm={12}></Grid> */}

                    <Grid item xs={12}></Grid>
                </Box>
            </Box>
            {console.log(user)}

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
                    // take the first name
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
                                value={user.name.split(" ")[0]}
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
                                value={user.name.split(" ")[1]}
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
                                value={user.phoneNumber}
                                onChange={(e) => {
                                    setUser({
                                        ...user,
                                        phoneNumber: e.target.value,
                                    });
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                        <Button
                            variant="contained"
                            sx={{ borderRadius: 2, marginTop: 4 }}
                            onClick={() => {
                                fetch("/user/update", {
                                    method: "PUT",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(user),
                                })
                                    .then((res) => navigate("/"))
                                    .catch((err) => console.log(err));
                            }}
                        >
                            Update Profile
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Profile;
