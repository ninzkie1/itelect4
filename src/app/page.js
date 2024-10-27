import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Box } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';


function TalentoAppBar() {
  return (
    <AppBar position="static" sx={{ bgcolor: 'blue' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Image src="/logotalentos.png" alt="Talento Logo" width={40} height={40} />
        <Typography variant="h6" sx={{ flexGrow: 1, ml: 2, fontWeight: 'bold', color: 'yellow' }}>
          TALENTO
        </Typography>
        <Link href="/authentication/login" passHref>
          <Button color="inherit" startIcon={<LoginIcon />} sx={{ textTransform: 'none' }}>Login</Button>
        </Link>
      
       
      </Toolbar>
    </AppBar>
  );
}

export default function Home() {
  return (
    <div>
      {/* App Bar */}
      <TalentoAppBar />

      {/* Main Content */}
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box textAlign="center" my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Talento
          </Typography>
          <Typography variant="subtitle1">
            Discover and book talented performers for your events. Browse through our selection of artists and find the perfect fit for your next occasion.
          </Typography>
          <Link href="/authentication/register" passHref>
          <Button variant="contained" color="primary" sx={{ mt: 4 }}>Get Started</Button>
          </Link> 
        </Box>

        {/* Highlights Section */}
        <Box textAlign="center" my={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Highlights
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Discover the best moments from our top talents and watch them in action.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {/* Video Cards */}
            <Grid item xs={12} sm={6} md={4}>
              <VideoCard videoSrc="/vid1.mp4" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <VideoCard videoSrc="/vid2.mp4" />
            </Grid>
          </Grid>
        </Box>

        {/* Featured Performers Section */}
        <Box textAlign="center" my={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Featured Performers
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Meet our top performers and see why they are the best choice for your events.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {/* Performer Cards */}
            <Grid item xs={12} sm={6} md={4}>
              <PerformerCard
                imageSrc="/ilk.jpg"
                name="ILK"
                talent="Musician"
                location="Mandaue"
                rating={4}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <PerformerCard
                imageSrc="/oskar.jpg"
                name="Oscar"
                talent="Singer"
                location="Mandaue"
                rating={4}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

// VideoCard Component
function VideoCard({ videoSrc }) {
  return (
    <video className="w-full rounded-lg shadow-lg" controls>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

// PerformerCard Component
function PerformerCard({ imageSrc, name, talent, location, rating }) {
  return (
    <Box border={1} borderColor="grey.300" p={2} borderRadius={2} boxShadow={3}>
      <Image src={imageSrc} alt={name} width={300} height={200} style={{ borderRadius: '8px' }} />
      <Typography variant="h6" component="h3" mt={2}>
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Talent: {talent} <br /> Location: {location}
      </Typography>
      <Typography variant="body1" color="yellow.600" mt={1}>
        Rating: {'⭐'.repeat(rating)}
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>See Details</Button>
    </Box>
  );
}
