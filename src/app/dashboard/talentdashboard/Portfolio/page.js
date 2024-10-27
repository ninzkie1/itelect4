"use client";
import React from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Avatar,
  Typography,
  IconButton,
  Button,
  Tabs,
  Tab,
  Card,
  CardContent,
  Rating,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Message as MessageIcon,
  Event as EventIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

export default function Portfolio() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Head>
        <title>TALENTO - Portfolio</title>
      </Head>
      <div className="flex h-screen bg-gray-100">
        <aside className="w-64 bg-blue-700 text-white">
          <div className="p-4">
            <div className="text-2xl font-bold mb-6">TALENTO</div>
            <div className="flex items-center space-x-4 mb-4">
              <Avatar src="/User-avatar.svg.png" />
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
              <a href="/dashboard/talentdashboard/Portfolio" className="flex items-center space-x-2 p-2 rounded bg-blue-600">
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
          <Container maxWidth="md">
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Avatar
                src="/User-avatar.svg.png"
                alt="Performer Avatar"
                sx={{ width: 100, height: 100, mx: "auto" }}
              />
              <IconButton color="primary" sx={{ mt: -5, ml: 8 }}>
                <EditIcon />
              </IconButton>
              <Typography variant="h4" sx={{ mt: 2 }}>ILK</Typography>
              <Typography variant="subtitle1" color="textSecondary">Musician</Typography>
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                startIcon={<EditIcon />}
              >
                Edit
              </Button>
            </Box>

            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              centered
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="Overview" />
              <Tab label="Reviews" />
              <Tab label="Highlights Video" />
            </Tabs>

            <Box sx={{ mt: 4 }}>
              {selectedTab === 0 && (
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      About ILK
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Let's Rock and Roll! <br />
                      <strong>Address:</strong> Mandaue <br />
                      <strong>Email:</strong> ILK@gmail.com <br />
                      <strong>Phone:</strong> 4240115 <br />
                      <strong>Experience:</strong> 5 years <br />
                      <strong>Genres:</strong> Rock <br />
                      <strong>Type of Performer:</strong> Group
                    </Typography>
                    <Box display="flex" alignItems="center" mt={2}>
                      <Rating value={4.5} precision={0.5} readOnly />
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        (4.5/5, 0 reviews)
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              )}
              {selectedTab === 1 && (
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Reviews
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      No reviews yet.
                    </Typography>
                  </CardContent>
                </Card>
              )}
              {selectedTab === 2 && (
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Highlights Video
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      No highlights video available.
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Box>
          </Container>
        </main>
      </div>
    </>
  );
}
