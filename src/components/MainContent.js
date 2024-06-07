import React from "react";
import { Box, Typography, Grid, Paper, Rating } from "@mui/material";

const MainContent = () => {
  return (
   
    <Box p={4}>
      <Typography variant="h4" bgcolor="#FCECFD" color="black" fontFamily="wild latin" fontSize="75px" gutterBottom>
       Wellcome to AcademixEdu 
      </Typography>
      <Typography variant="h6" color="red" gutterBottom>
        Classes Timing
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "16px", textAlign: "center" }}>
            <Typography variant="h5" color="blue">Java Full Stack</Typography>
            <p>07:30 - 9:30</p>
           
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "16px", textAlign: "center" }}>
            <Typography variant="h5" color="blue">Python Full Stack</Typography>
            <p>10:30 - 12:30</p>
            
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "16px", textAlign: "center" }}>
            <Typography variant="h5" color="blue">Cyber Security</Typography>
            <p>12:30 - 02:30</p>
            
          </Paper>
        </Grid>
      </Grid>
    </Box>
   
  );
};

export default MainContent;
