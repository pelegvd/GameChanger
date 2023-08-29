import React from "react";
import "../App.css";
import AddEvent from "./AddEventPage";
import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia
} from '@mui/material'
import { Stack, Grid, Paper } from '@mui/material'
import Divider from '@mui/material/Divider';
//import Markdown from './Markdown';
import Main from "../components/Main";

function Home() {
  
  return (
    <>
      <AddEvent />
      <Main />
      <Box width='500px'>
      <Card>
        <CardMedia
          component='img'
          height='240'
          image='https://source.unsplash.com/random'
          alt='unsplash image'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            React
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            React is a JavaScript library for building user interfaces. React
            can be used as a base in the development of single-page or mobile
            applications.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
   
    </>
  );
}

export default Home;
