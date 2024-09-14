"use client";
import React from 'react';
import {
  Box, AppBar, Toolbar, Typography, IconButton, Avatar, Badge, Container, Grid, Paper
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Sidebar from '@/app/components/sidebar/page';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const salesData = [
  { month: 'Jan', sales: 4000, revenue: 2400 },
  { month: 'Feb', sales: 3000, revenue: 1398 },
  { month: 'Mar', sales: 2000, revenue: 9800 },
  { month: 'Apr', sales: 2780, revenue: 3908 },
  { month: 'May', sales: 1890, revenue: 4800 },
  { month: 'Jun', sales: 2390, revenue: 3800 },
  { month: 'Jul', sales: 3490, revenue: 4300 },
];

export default function AdminDashboard() {
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
              Admin Dashboard
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
          {/* Reporting Cards */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6">Total Sales</Typography>
                <Typography variant="h4" sx={{ color: '#1976d2', fontWeight: 'bold' }}>₱ 150,000</Typography>
                <Typography variant="body2" color="textSecondary">+12% Since last month</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6">Total Users</Typography>
                <Typography variant="h4" sx={{ color: '#1976d2', fontWeight: 'bold' }}>1,450</Typography>
                <Typography variant="body2" color="textSecondary">+5% New users</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6">Total Bookings</Typography>
                <Typography variant="h4" sx={{ color: '#1976d2', fontWeight: 'bold' }}>95</Typography>
                <Typography variant="body2" color="textSecondary">+10 Today</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6">Cancelled Bookings</Typography>
                <Typography variant="h4" sx={{ color: '#d32f2f', fontWeight: 'bold' }}>5</Typography>
                <Typography variant="body2" color="textSecondary">+1 Since last month</Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Sales Graph */}
          <Box sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Sales Performance
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#1976d2" strokeWidth={2} />
                  <Line type="monotone" dataKey="revenue" stroke="#d32f2f" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
