import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import client1 from '../assets/client-logos/client1.png';
import client2 from '../assets/client-logos/client2.png';
import client3 from '../assets/client-logos/client3.png';
import client4 from '../assets/client-logos/client4.png';
import client5 from '../assets/client-logos/client5.png';
import client6 from '../assets/client-logos/client6.png';
import client7 from '../assets/client-logos/client7.png';
import membership_icon from '../assets/icons/membership_icon.png';
import association_icon from '../assets/icons/association_icon.png';
import clubs_icon from '../assets/icons/clubs_icon.png';
import illustration from '../assets/illustration.png'; // Assuming you have an illustration image as in the screenshot
import membersIcon from '../assets/icons/membersIcon.png';
import clubsIcon2 from '../assets/icons/clubsIcon2.png';
import bookingsIcon from '../assets/icons/bookingsIcon.png';
import paymentsIcon from '../assets/icons/paymentsIcon.png';
import illus from '../assets/illus.png'; 
import illu from '../assets/illu.png'; 
import linelogo from '../assets/linelogo.png';
import newmarket from '../assets/newmarket.png';
  
const communitySections = [
  {
    title: 'Membership Organisations',
    description: 'Our membership management software provides full automation of membership renewals and payments',
    icon: membership_icon
  },
  {
    title: 'National Associations',
    description: 'Our membership management software provides full automation of membership renewals and payments',
    icon: association_icon
  },
  {
    title: 'Clubs And Groups',
    description: 'Our membership management software provides full automation of membership renewals and payments',
    icon: clubs_icon
  }
];



const CombinedComponent = () => {
  return (
    <Box>
     
      {/* Clients Section */}
      <Box sx={{ py: 1, backgroundColor: '#ffffff' }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#4D4D4D' }}>
            Our Clients
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ color: '#4D4D4D' }}>
            We have been working with some Fortune 500+ clients
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[client1, client2, client3, client4, client5, client6, client7].map((client, index) => (
              <Grid item xs={12} sm={6} md={1.5} key={index} sx={{ textAlign: 'center' }}>
                <img src={client} alt={`Client ${index + 1}`} style={{ width: '200px', maxWidth: '200px', height: 'auto', display: 'block', margin: '0 auto' }} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Community Section */}
      <Box sx={{ py: 8, backgroundColor: '#ffffff' }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#4D4D4D' }}>
            Manage your entire community
          </Typography>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#4D4D4D' }}>
            in a single system
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ color: '#4D4D4D' }}>
            Who is Nexcent suitable for?
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {communitySections.map((section, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper elevation={0} sx={{ p: 4, textAlign: 'center', backgroundColor: '#ffffff' }}>
                  <img src={section.icon} alt={section.title} style={{ width: '100px', height: '100px', marginBottom: '16px' }} />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {section.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {section.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
       {/* New Section */}
       <Box sx={{ py: 8, backgroundColor: '#ffffff' }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <img src={illustration} alt="Illustration" style={{ width: '100%', height: 'auto' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#4D4D4D' }}>
                The unseen of spending three years at Pixelgrade
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: '#4D4D4D' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: '#28a745', color: '#ffffff' }}>
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}  >
              <Typography variant="h4"  gutterBottom sx={{ fontWeight: 'bold', color: '#4D4D4D' }}>
                Helping a local 
              </Typography>
              <Typography variant="h4"  gutterBottom sx={{ fontWeight: 'bold', color: 'green' }}>
                business reinvent itself
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: '#4D4D4D' }}>
                We reached here with our hard work and dedication
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
              <img src={membersIcon} alt="Members Icon" style={{ width: '50px', height: '50px', marginBottom: '16px' }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#4D4D4D' }}>
                2,245,341
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Members
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
              <img src={clubsIcon2} alt="Clubs Icon" style={{ width: '50px', height: '50px', marginBottom: '16px' }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#4D4D4D' }}>
                46,328
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Clubs
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} ></Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
              <img src={bookingsIcon} alt="Event Bookings Icon" style={{ width: '50px', height: '50px', marginBottom: '16px' }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#4D4D4D' }}>
                828,867
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Event Bookings
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
              <img src={paymentsIcon} alt="Payments Icon" style={{ width: '50px', height: '50px', marginBottom: '16px' }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#4D4D4D' }}>
                1,926,436
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Payments
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* New  new Section */}
      <Box sx={{ py: 8, backgroundColor: '#ffffff' }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <img src={illus} alt="Illustration" style={{ width: '100%', height: 'auto' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#4D4D4D' }}>
              How to design your site footer like
              we did
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: '#4D4D4D' }}>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tinciduntmolestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat atlibero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at portanisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integerin nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisiac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: '#28a745', color: '#ffffff' }}>
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <img src={illu} alt="Ill" style={{ width: '70%', height: 'auto' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" gutterBottom sx={{ color: '#4D4D4D' }}>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie
mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum
id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontWeight: 'bold', color: 'green ' }}>
              Tim Smith
              </Typography>
              <Typography variant="body1" paragraph sx={{  color: '#4D4D4D ' }}>
              British Dragon Boat Racing Association
              </Typography>
              <img src={linelogo} alt="Illustration" style={{ width: '100%', height: 'auto' }} />
              <Button variant="contained" sx={{ backgroundColor: '#28a745', color: '#ffffff' }}>
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Container>
        </Box>
        <Box> <img src={newmarket} alt="Illustration" style={{ width: '100%', height: 'auto' }} /></Box>
       
      </Box>
     


    </Box>
  );
};

export default CombinedComponent;


