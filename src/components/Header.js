import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          FIFTH WALL
        </Typography>
        <Button color="inherit">About</Button>
        <Button color="inherit">Team</Button>
        <Button color="inherit">Announcement</Button>
        <Button color="inherit">My cources</Button>
        <Button color="inherit">Exam</Button>
        <Button color="inherit">Certification</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
