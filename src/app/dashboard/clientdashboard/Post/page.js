"use client";
import React from "react";
import Head from "next/head";
import TalentoAppBar from "./Appbar/page";
import {
  Typography,
  Button,
  Container,
  Box,
  TextField,
  Card,
  CardContent,
  CardActions,
  Grid,
  IconButton,
  Avatar,
} from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import Chat from "./Chat/page";
const posts = [
  {
    id: 1,
    user: "tes",
    eventName: "Wedding",
    themeName: "Rustic",
    location: "Liloan, Yati",
    description: "need kog singer or kanang pang wedding",
    categories: "Singer, Musician",
    fromTime: "18:47:00",
    toTime: "06:48:00",
  },
  {
    id: 2,
    user: "ninzkie",
    eventName: "Concert",
    themeName: "Rock",
    location: "Mandaue City, Maguikay",
    description: "Need mig Bahista or kanang drummer lang",
    categories: "Musician",
    fromTime: "18:54:00",
    toTime: "18:54:00",
  },
  {
    id: 3,
    user: "tes",
    eventName: "Wedding",
    themeName: "Rustic",
    location: "Mandaue City, Ibabao-Estancia",
    description: "ngita kog bahista or musician",
    categories: "Musician",
    fromTime: "20:04:00",
    toTime: "10:04:00",
  },
];

export default function ClientDashboard() {
  return (
    <>
      <Head>
        <title>TALENTO - Book a Talent for Your Event</title>
      </Head>
      <div>
        <TalentoAppBar />
        <Chat/>
        <Container sx={{ py: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Post Your Urgent Event!
          </Typography>
          <Button variant="contained" color="primary" sx={{ display: "block", mx: "auto", my: 2 }}>
            Submit a Request
          </Button>
          <TextField
            variant="outlined"
            placeholder="Search Posts"
            fullWidth
            sx={{ mb: 4 }}
          />

          <Grid container spacing={4}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card sx={{ borderRadius: 3 }}>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Avatar sx={{ mr: 2 }} />
                      <Typography variant="h6">{post.user}</Typography>
                      <IconButton sx={{ ml: "auto" }}>
                        <MoreVertIcon />
                      </IconButton>
                    </Box>
                    <Typography variant="body1">
                      <strong>Event Name:</strong> {post.eventName}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Theme Name:</strong> {post.themeName}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Location:</strong> {post.location}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Description:</strong> {post.description}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Categories:</strong> {post.categories}
                    </Typography>
                    <Typography variant="body1">
                      <strong>From:</strong> {post.fromTime} <strong>To:</strong> {post.toTime}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <TextField
                      variant="outlined"
                      placeholder="Add Comment"
                      fullWidth
                      sx={{ mr: 1 }}
                    />
                    <Button variant="contained" color="primary">
                      Submit Comment
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}
