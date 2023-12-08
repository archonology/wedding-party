import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Grid, Button, TextField } from "@mui/material";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";
import { validateEmail, validatePassword } from "../utils/helpers";
import Auth from "../utils/auth";

const Signup = () => {
  const [signupFormData, setSignupFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [createUser, { error, data }] = useMutation(CREATE_USER);
  const [value, setValue] = React.useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSignupFormChange = (event) => {
    const { name, value } = event.target;

    setSignupFormData({
      ...signupFormData,
      [name]: value,
    });
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(signupFormData.email)) {
      setErrorMessage(`
      Sorry, the email is missing something. 
      Please check it and try again, 
      thanks! 🪴
      `);
      return;
    }
    if (!validatePassword(signupFormData.password)) {
      setErrorMessage(`
      Sorry, the password is missing something. 
      Please make sure it starts with a letter, has a number a special character, and is between 6 and 16 characters long... 🪴
      `);
      return;
    }

    try {
      const { data } = await createUser({
        variables: { ...signupFormData },
      });
      Auth.login(data.createUser.token);
    } catch (error) {
      console.error(error);
    }
    // clear form values
    setSignupFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <h2>Create User</h2>
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
                "& .MuiTextField-root": { m: 1, minWidth: "300px" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSignupSubmit}
            >
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}

              <div>
                <TextField
                  id="signup-username-input"
                  label="Username"
                  type="username"
                  name="username"
                  autoComplete="current-username"
                  value={signupFormData.username}
                  onChange={handleSignupFormChange}
                />
              </div>
              <div>
                <TextField
                  id="signup-email-input"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="current-email"
                  value={signupFormData.email}
                  onChange={handleSignupFormChange}
                />
              </div>
              <div>
                <TextField
                  id="signup-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  value={signupFormData.password}
                  onChange={handleSignupFormChange}
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  type="submit"
                  color="success"
                  sx={{ m: 1 }}
                >
                  Sign up
                </Button>
              </div>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default Signup;
