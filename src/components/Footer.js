import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        color: "white",
        padding: "16px 0",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
        <Grid item xs={2}>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="body2">Careers</Typography>
            <Link href="#" color="inherit"><br></br>
              LinkedIn
            </Link> 
            <Link href="#" color="inherit">
              Twitter
            </Link> <br></br>
            <Link href="#" color="inherit">
              YouTube
            </Link> <br></br>
            <Link href="#" color="inherit">
              Instagram
            </Link> <br></br>
            <Link href="#" color="inherit">
              Facebook
            </Link><br></br>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">Fifth Wall's Weekly Newsletter</Typography>
            <Link href="#" color="inherit">
              Sign Up
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">&copy; 2024 Fifth Wall</Typography>
            <Link href="#" color="inherit"><br></br>
              Investor Login
            </Link>
            <Link href="#" color="inherit">
              Sitemap
            </Link><br></br>
            <Link href="#" color="inherit">
              Terms of Use
            </Link><br></br>
            <Link href="#" color="inherit">
              Privacy Policy
            </Link><br></br>
            <Link href="#" color="inherit">
              Disclosures
            </Link><br></br>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
