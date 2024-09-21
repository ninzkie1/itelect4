"use client";
import React from "react";
import Head from "next/head";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";

export default function Category() {
  return (
    <>
      <Head>
        <title>Browse By Category - TALENTO</title>
      </Head>
      <div>
        {/* Category Section */}
        <Container sx={{ py: 8 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
            <Typography variant="h5" fontWeight="bold">
              Browse By Category
            </Typography>
            <Button href="/categories" sx={{ textTransform: "none" }}>
              View All (6)
            </Button>
          </Box>

          {/* Category Grid */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "center" }}>
              <Image src="/singer.png" alt="Singer" width={300} height={200} className="rounded-lg" />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                Singer
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "center" }}>
              <Image src="/dancer.png" alt="Dancer" width={300} height={200} className="rounded-lg" />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                Dancer
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "center" }}>
              <Image src="/musician.png" alt="Musician" width={300} height={200} className="rounded-lg" />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                Musician
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "center" }}>
              <Image src="/band.png" alt="Band" width={300} height={200} className="rounded-lg" />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                Band
              </Typography>
            </Grid>
          </Grid>

          {/* Pagination Section */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button variant="outlined" sx={{ mx: 1 }}>
              1
            </Button>
            <Button variant="outlined" sx={{ mx: 1 }}>
              2
            </Button>
            <Button variant="outlined" sx={{ mx: 1 }}>
              3
            </Button>
          </Box>
        </Container>
      </div>
    </>
  );
}
