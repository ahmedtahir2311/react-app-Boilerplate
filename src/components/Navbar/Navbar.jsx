import React from "react";

import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from "@mui/material";

import { getToken } from "utils/token";

const Navbar = ({ data: { authLogin, authLogout } }) => {
  /*This function can also be the context of user 
    if avail then you can make further checks */
  const token = getToken();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            ABC
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {!!token ? (
            <Button color="inherit" onClick={authLogout}>
              LogOut
            </Button>
          ) : (
            <Button color="inherit" onClick={authLogin}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
