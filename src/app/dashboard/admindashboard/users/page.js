"use client";
import React from 'react';
import {
  Box, AppBar, Toolbar, Typography, IconButton, Avatar, Badge, Container, Grid, Paper, Button
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Sidebar from '@/app/components/sidebar/page';  // Import Sidebar component

const users = [
  { name: 'Ninz Garbo', email: 'nino@gmail.com', role: 'Customer' },
  { name: 'John Doe', email: 'john@gmail.com', role: 'Admin' },
];

export default function ManageUsers() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F4F6F8' }}>
      {/* Sidebar for navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Bar */}
        <AppBar position="static" sx={{ backgroundColor: '#0A1929', boxShadow: 'none' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" noWrap component="div">
              Manage User Accounts
            </Typography>
            {/* Notifications and Profile */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" sx={{ ml: 2 }}>
                <Avatar alt="Admin" src="/User-avatar.svg.png" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Content Container */}
        <Container sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 4 }}>
            User Management
          </Typography>

          {/* User List */}
          <Grid container spacing={4}>
            {users.map((user, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {user.name}
                  </Typography>
                  <Typography variant="body1">{user.email}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Role: {user.role}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Button variant="contained" color="primary" size="small">
                      Edit
                    </Button>
                    <Button variant="contained" color="error" size="small">
                      Delete
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
