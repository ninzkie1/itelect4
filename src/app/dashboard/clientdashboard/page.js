import React from 'react';
import { Avatar, IconButton, Card, CardContent, CardMedia, AppBar, Toolbar, Typography, Button, Container, Grid, Box } from '@mui/material';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import Image from 'next/image';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
const performers = [
  {
    id: 1,
    name: "ILK",
    talent: "Musician",
    location: "Mandaue",
    rating: 4.5,
    image: "/ilk.jpg",
    video: "/vid1.mp4",
  },
  {
    id: 2,
    name: "Oscar",
    talent: "Singer",
    location: "Mandaue",
    rating: 4.0,
    image: "/oskar.jpg",
    video: "/vid2.mp4",
  },
];

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
        <Link href="/home" passHref>
          <Button color="inherit" startIcon={<HomeIcon />} sx={{ textTransform: 'none' }}>HOME</Button>
        </Link>
        <Link href="/dashboard/clientdashboard/Applicants" passHref>
          <Button color="inherit" startIcon={<DashboardIcon />} sx={{ textTransform: 'none' }}>DASHBOARD</Button>
        </Link>
        <Link href="/dashboard/clientdashboard/Post" passHref>
          <Button color="inherit" startIcon={<PostAddIcon />} sx={{ textTransform: 'none' }}>POST</Button>
        </Link>
        <Link href="/profile" passHref>
          <Button color="inherit" startIcon={<PersonIcon />} sx={{ textTransform: 'none' }}>PROFILE</Button>
        </Link>
        <Link href="/wallet" passHref>
          <Button color="inherit" startIcon={<AccountBalanceWalletIcon />} sx={{ textTransform: 'none' }}>WALLET</Button>
        </Link>
        <Link href="/login" passHref>
          <Button color="inherit" startIcon={<LogoutIcon />} sx={{ textTransform: 'none' }}>LOGOUT</Button>
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
            Welcome to Talento
          </Typography>
          <Typography variant="subtitle1">
            Discover and book talented performers for your events. Browse through our selection of artists and find the perfect fit for your next occasion.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 4 }} className="bg-purple-700 hover:bg-purple-800">
            Book Now!
          </Button>
        </Box>

        {/* Performers Section */}
        <Box textAlign="center" my={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Performers
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* Performer Cards */}
            {performers.map((performer) => (
              <Grid item xs={12} sm={6} md={4} key={performer.id}>
                <Card className="w-80 shadow-lg relative">
                  <div className="relative">
                    <video
                      height="200"
                      src={performer.video}
                      autoPlay
                      loop
                      muted
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Avatar
                      src={performer.image}
                      alt={performer.name}
                      className="absolute top-2 left-2 w-16 h-16 border-2 border-white"
                    />
                    <IconButton className="absolute top-2 right-2 bg-white bg-opacity-70">
                      <VolumeOffIcon />
                    </IconButton>
                  </div>
                  <CardContent className="bg-gradient-to-b from-purple-300 to-transparent">
                    <Typography variant="h5" component="div" className="font-bold text-black">
                      {performer.name}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" className="text-black">
                      Talent: {performer.talent}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" className="text-black">
                      Location: {performer.location}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" className="text-black">
                      Rating: {'⭐'.repeat(Math.floor(performer.rating))}
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-around' }}>
                      <Button variant="outlined" color="primary">
                        See Details
                      </Button>
                      <Button href="/dashboard/clientdashboard/AddBook/ILK" variant="contained" color="success">
                        Book
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

