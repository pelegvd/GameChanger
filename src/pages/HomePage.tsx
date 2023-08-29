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

function Home() {
  
  return (
    <>
      <AddEvent />
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
    <Paper sx={{ padding: '32px' }} elevation={2}>
      <Stack border='1px solid' spacing={2} direction='row'>
        <Box
          component='span'
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding: '16px',
            '&:hover': {
              backgroundColor: 'primary.light'
            }
          }}>
          Codevolution
        </Box>
        <Box
          display='flex'
          height='100px'
          width='100px'
          bgcolor='success.light'
          p={2}></Box>
      </Stack>
      <Grid rowSpacing={2} columnSpacing={1} container my={4}>
        <Grid item xs={6}>
          <Box p={2} bgcolor='primary.light'>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} bgcolor='primary.light'>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} bgcolor='primary.light'>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} bgcolor='primary.light'>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
    </>
  );
}

export default Home;
