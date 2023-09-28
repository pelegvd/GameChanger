import React from "react";
import "../App.css";
import AddEvent from "./AddEventPage";
import Footer from "../components/Footer";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome to Game Changer
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            A paltform for organizing social gatherings and volunteer meetings
            based on location, and interests.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Link to='/sign-up'>
            <Button variant="contained">Get Started</Button>
            </Link>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Home;
