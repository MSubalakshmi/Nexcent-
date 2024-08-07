import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid } from '@mui/material';
import heroImage from '../assets/heroimage.png'; // Ensure this path is correct
import logo from '../assets/logo.png'; // Ensure this path is correct
import dot from '../assets/dot.png';

const CombinedComponent = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#f5f5f5' }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: '#f5f5f5', color: '#000000', boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="logo" style={{ maxWidth: '220.49px', height: '100px', marginRight: '16px' }} />
              <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' }, gap: 10 }}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Service</Button>
                <Button color="inherit">Feature</Button>
                <Button color="inherit">Product</Button>
                <Button color="inherit">Testimonial</Button>
                <Button color="inherit">FAQ</Button>
              </Box>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button sx={{ color: 'green' }}>Login</Button>
              <Button variant="contained" color="success">Sign Up</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ height: '100vh', textAlign: 'center', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center' }}>
        <Container maxWidth="xl" sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{ color: '#4D4D4D', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, lineHeight: 1.2 }}
              >
                Lessons and insights
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{ color: 'green', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, lineHeight: 1.2 }}
              >
                from 8 years
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                Where to grow your business as a photographer: site or social media?
              </Typography>
              <Button variant="contained" color="success" size="large">
                Register
              </Button>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <img src={heroImage} alt="Hero" style={{ maxWidth: '100%', height: 'auto' }} />
            </Grid>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={6} alignItems="center">
                <img src={dot} alt="Hero" style={{ maxWidth: '100%', height: 'auto' }} />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CombinedComponent;
