"use client";
import React from "react";
import Head from "next/head";
import {
  Typography,
  Button,
  Container,
  Box,
  Avatar,
  TextField,
  Card,
  CardContent,
  Grid,
  IconButton,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Message as MessageIcon,
  Event as EventIcon,
  Logout as LogoutIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";

const posts = [
  {
    id: 1,
    user: "tes",
    eventName: "Wedding",
    themeName: "Rustic",
    location: "Liloan, Yati",
    description: "Need kog singer or kanang pang wedding",
    categories: ["Singer", "Musician"],
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
    categories: ["Musician"],
    fromTime: "18:54:00",
    toTime: "18:54:00",
  },
];

export default function ClientDashboard() {
  return (
    <>
      <Head>
        <title>TALENTO - Talent Dashboard</title>
      </Head>
      <div className="flex h-screen bg-gray-100">
        <aside className="w-64 bg-blue-700 text-white">
          <div className="p-4">
            <div className="text-2xl font-bold mb-6">TALENTO</div>
            <div className="flex items-center space-x-4 mb-4">
              <Avatar src="/ilk.jpg" />
              <div>
                <Typography variant="h6" component="div">
                  Welcome performer ILK!
                </Typography>
              </div>
            </div>
            <nav className="space-y-4">
              <a href="/dashboard/talentdashboard" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-600">
                <EventIcon />
                <span>Urgent Hiring</span>
              </a>
              <a href="/dashboard/talentdashboard/Portfolio" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-600">
                <PersonIcon />
                <span>Portfolio</span>
              </a>
              <a href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-600">
                <MessageIcon />
                <span>Messages</span>
              </a>
              <a href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-600">
                <DashboardIcon />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-600">
                <LogoutIcon />
                <span>Log Out</span>
              </a>
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-6">
          <header className="flex justify-between items-center mb-6">
            <Typography variant="h4" component="h1">
              Urgent Hiring Talent!
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Search Posts"
              fullWidth
              sx={{ maxWidth: 400, ml: 4 }}
            />
          </header>

          <Box className="flex space-x-2 mb-6">
            <Button variant="outlined" color="primary">Singer</Button>
            <Button variant="outlined" color="primary">Dancer</Button>
            <Button variant="outlined" color="primary">Musician</Button>
            <Button variant="outlined" color="primary">Band</Button>
            <Button variant="outlined" color="primary">Entertainer</Button>
            <Button variant="outlined" color="primary">DJ</Button>
          </Box>

          <Typography variant="h5" className="mb-4">
            List of Submitted Requests:
          </Typography>

          <Grid container spacing={4}>
            {posts.map((post) => (
              <Grid item xs={12} key={post.id}>
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
                      <strong>Categories:</strong> {post.categories.join(", ")}
                    </Typography>
                    <Typography variant="body1">
                      <strong>From:</strong> {post.fromTime} <strong>To:</strong> {post.toTime}
                    </Typography>

                    <Box className="flex space-x-2 mt-4">
                      <Button variant="outlined" color="primary">Apply</Button>
                      <Button variant="outlined" color="secondary">Message</Button>
                    </Box>

                    <TextField
                      variant="outlined"
                      placeholder="Add Comment"
                      fullWidth
                      sx={{ mt: 3, mb: 1 }}
                    />
                    <Button variant="contained" color="primary">
                      Submit Comment
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </main>
      </div>
    </>
  );
}
