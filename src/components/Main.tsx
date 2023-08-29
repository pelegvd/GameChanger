import React from 'react'
import '../stylesheets/Main.css'
import { Typography, Box , Grid} from '@mui/material'

export default function Main() {
  return (
    <div className="page-header header-filter header-small" data-parallax="true" >
    <div className="container">
		<div className="row">
    		<div className="col-md-8 ml-auto mr-auto text-center">
                <h1 className="title">Let's get started</h1>
                <h4>Platform for organizing social gatherings and volunteer meetings.
                </h4>
            </div>
        </div>
    </div>
    <Grid item xs={6} container spacing={2} borderColor={black} >
    <Typography variant="h1" >Let's get started</Typography>
    </Grid>
  </div>
  )
}

//https://github.com/mui/material-ui/tree/v5.14.6/docs/data/material/getting-started/templates/blog