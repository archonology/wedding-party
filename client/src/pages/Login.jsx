import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Grid, Button, TextField } from "@mui/material";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { validateEmail } from "../utils/helpers";
import Auth from "../utils/auth";

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [loginUser, { error, data }] = useMutation(LOGIN_USER);
  const [errorMessage, setErrorMessage] = useState("");
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // update state based on login form input changes
  const handleLoginFormChange = (event) => {
    const { name, value } = event.target;

    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  // submit Login form
  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(loginFormData.email)) {
      setErrorMessage(`
      Sorry, the email is missing something. 
      Please check it and try again, 
      thanks! 🪴
      `);
      return;
    }

    try {
      const { data } = await loginUser({
        variables: { ...loginFormData },
      });
      Auth.login(data.loginUser.token);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        `There was a problem with your password or email address. Please make sure you have the correct email and password entered, then try again.`
      );
    }
    // clear form values
    setLoginFormData({
      email: "",
      password: "",
    });
  };

  return (
    <Box sx={{ margin: "2em", marginTop: "2em" }}>
      <Box>
        <h2 style={{ fontSize: "66px", lineHeight: 1.3 }}>
          Heidi and Reed's Wedding Party
        </h2>
        <h3 style={{ fontSize: "26px", fontWeight: '400' }}>Login to view your invitation!</h3>
      </Box>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="right"
        justifyContent="right"
        style={{ minHeight: "25vh" }}
      >
        <Box
          sx={{
            display: "flex",
            color: "#fff",
          }}
        >
          <Grid item>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  minWidth: "325px",
                  marginBottom: 2,
                },
              }}
              autoComplete="off"
              onSubmit={handleLoginSubmit}
            >
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}

              <div>
                <TextField
                  id="login-email-input"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="current-email"
                  color="secondary"
                  value={loginFormData.email}
                  onChange={handleLoginFormChange}
                />
              </div>
              <div>
                <TextField
                  id="login-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  color="secondary"
                  value={loginFormData.password}
                  onChange={handleLoginFormChange}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{ marginBottom: 3, marginTop: 2 }}
                >
                  Login
                </Button>
              </div>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}

export default Login;
