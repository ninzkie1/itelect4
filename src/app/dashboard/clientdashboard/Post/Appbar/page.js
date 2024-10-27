import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {
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
        <Link href="/dashboard/clientdashboard" passHref>
          <Button color="inherit" startIcon={<HomeIcon />} sx={{ textTransform: 'none' }}>HOME</Button>
        </Link>
        <Link href="/dashboard" passHref>
          <Button color="inherit" startIcon={<DashboardIcon />} sx={{ textTransform: 'none' }}>DASHBOARD</Button>
        </Link>
        <Link href="/post" passHref>
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

