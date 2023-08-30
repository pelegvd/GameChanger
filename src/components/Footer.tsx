import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import useStyles from '../stylesheets/Footer';

const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
      <Typography className={classes.footerText}>
        Provided by{' '}
        <Link href="https://appseed.us" target="_blank" underline="none">
          AppSeed
        </Link>
      </Typography>
      <Typography className={classes.footerDate}>Open-Source Sample - Buit with MUI</Typography>
    </Box>
  );
};

export default Footer;

//https://github.com/app-generator/sample-react-mui-introduction/blob/main/src/styles/styles.js
//https://blog.appseed.us/mui-react-coding-landing-page/
//https://v3.mui.com/getting-started/page-layout-examples/