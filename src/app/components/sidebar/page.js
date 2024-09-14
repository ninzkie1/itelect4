import React from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        backgroundColor: '#0A1929',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 2,
      }}
    >
      <List>
        {/* Dashboard navigation */}
        <ListItem button component="a" href="/dashboard/admindashboard">
          <ListItemIcon sx={{ color: '#fff' }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        {/* Bookings navigation */}
        <ListItem button component="a" href="/bookings">
          <ListItemIcon sx={{ color: '#fff' }}>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Bookings" />
        </ListItem>

        {/* Users navigation */}
        <ListItem button component="a" href="/dashboard/admindashboard/users">
          <ListItemIcon sx={{ color: '#fff' }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </List>

      {/* Log Out button */}
      <ListItem button component="a" href="/logout">
        <ListItemIcon sx={{ color: '#fff' }}>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Log Out" />
      </ListItem>
    </Box>
  );
};

export default Sidebar;
