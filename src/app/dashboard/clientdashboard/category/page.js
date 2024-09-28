"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Container, Box, Typography, AppBar, Toolbar, Grid, Button } from "@mui/material";
import Image from "next/image";
import Star from "@mui/icons-material/Star"; // Import Star icon

const singerTalents = [
  { name: "Singer 1", image: "/singer1.png", rating: 4 },
  { name: "Singer 2", image: "/singer2.png", rating: 5 },
  { name: "Singer 3", image: "/singer3.png", rating: 3 },
];

const dancerTalents = [
  { name: "Dancer 1", image: "/dancer1.png", rating: 4 },
  { name: "Dancer 2", image: "/dancer2.png", rating: 5 },
  { name: "Dancer 3", image: "/dancer3.png", rating: 2 },
];

const musicianTalents = [
  { name: "Musician 1", image: "/musician1.png", rating: 4 },
  { name: "Musician 2", image: "/musician2.png", rating: 3 },
  { name: "Musician 3", image: "/musician3.png", rating: 5 },
];

const renderStars = (rating) => {
  return [...Array(5)].map((_, index) => (
    <Star key={index} sx={{ color: index < rating ? "gold" : "gray" }} />
  ));
};

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderTalents = () => {
    let talents = [];
    if (selectedCategory === "Singer") talents = singerTalents;
    else if (selectedCategory === "Dancer") talents = dancerTalents;
    else if (selectedCategory === "Musician") talents = musicianTalents;

    return talents.map((talent, index) => (
      <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }} key={index}>
        <Image src={talent.image} alt={talent.name} width={300} height={200} className="rounded-lg" />
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
          {talent.name}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
          {renderStars(talent.rating)} {/* Render stars based on rating */}
        </Box>
      </Grid>
    ));
  };

  return (
    <>
      <Head>
        <title>Browse By Category - TALENTO</title>
      </Head>
      <div>
        {/* Navigation */}
        <AppBar position="static" color="default">
          <Toolbar>
            <Image src="/logotalentos.png" alt="Talento Logo" width={40} height={40} />
            <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 2 }}>
              TALENTO
            </Typography>
            <Button color="inherit" href="/dashboard/clientdashboard">Home</Button>
            <Button color="inherit" href="/dashboard/clientdashboard/Post">POST</Button>
            <Button color="inherit" href="/dashboard/clientdashboard/category">Category</Button>
            <Button color="inherit" href="#about">About Us</Button>
            <Button color="inherit" href="/profile">Profile</Button>
            <Button color="inherit" href="/authentication/login">Logout</Button>
          </Toolbar>
        </AppBar>
        {/* Category Section */}
        <Container sx={{ py: 8 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
            <Typography variant="h5" fontWeight="bold">Browse By Category</Typography>
            <Button href="/categories" sx={{ textTransform: "none" }}>View All (6)</Button>
          </Box>

          {/* Category Grid */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "center" }} onClick={() => handleCategoryClick("Singer")}>
              <Image src="/singer.png" alt="Singer" width={300} height={200} className="rounded-lg" />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>Singer</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "center" }} onClick={() => handleCategoryClick("Dancer")}>
              <Image src="/dancer.png" alt="Dancer" width={300} height={200} className="rounded-lg" />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>Dancer</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "center" }} onClick={() => handleCategoryClick("Musician")}>
              <Image src="/musician.png" alt="Musician" width={300} height={200} className="rounded-lg" />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>Musician</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "center" }} onClick={() => handleCategoryClick("Band")}>
              <Image src="/band.png" alt="Band" width={300} height={200} className="rounded-lg" />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>Band</Typography>
            </Grid>
          </Grid>

          {/* Talents Section */}
          {selectedCategory && (
            <Box sx={{ mt: 4, p: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
              <Typography variant="h5" fontWeight="bold">
                Talents in {selectedCategory}
              </Typography>
              <Grid container spacing={4} sx={{ mt: 2 }}>
                {renderTalents()}
              </Grid>
            </Box>
          )}

          {/* Pagination Section */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button variant="outlined" sx={{ mx: 1 }}>1</Button>
            <Button variant="outlined" sx={{ mx: 1 }}>2</Button>
            <Button variant="outlined" sx={{ mx: 1 }}>3</Button>
          </Box>
        </Container>
        {/* About Section */}
        <footer>
          <section id="about" className="bg-gray-200 py-16">
            <div className="container mx-auto flex items-center">
              <div className="w-1/2 pr-8">
                <img src="/background.png" alt="About Us" className="rounded-lg" />
              </div>
              <div className="w-1/2 pl-8">
                <h2 className="text-2xl font-bold mb-4">About us</h2>
                <p>
                  Talento is a web-based and mobile-responsive talent booking management system designed
                  to streamline the process of finding and booking performers for events.
                </p>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}
