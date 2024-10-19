import React from "react";
import Head from "next/head";
import {
  Container,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import Image from "next/image";

export default function Applicants() {
  // Mock data for pending applicants
  const pendingApplicants = [
    {
      performer: "Ian Jeoffrey G. Casul",
      event: "Birthday",
      theme: "Pastel",
      talent: "Dancer, Singer",
      requestedOn: "2024-08-10",
      availability: "Pending",
    },
    {
      performer: "John Doe",
      event: "Wedding",
      theme: "Rustic",
      talent: "Dancer",
      requestedOn: "2024-09-15",
      availability: "Pending",
    },
  ];

  return (
    <>
      <Head>
        <title>Pending Applicants - TALENTO</title>
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

        <Container sx={{ py: 8 }}>
          {/* Pending Applicants Section */}
          <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Pending Applicants
            </Typography>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Performer</TableCell>
                  <TableCell>Event</TableCell>
                  <TableCell>Theme</TableCell>
                  <TableCell>Talent</TableCell>
                  <TableCell>Requested on</TableCell>
                  <TableCell>Availability</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pendingApplicants.map((applicant, index) => (
                  <TableRow key={index}>
                    <TableCell>{applicant.performer}</TableCell>
                    <TableCell>{applicant.event}</TableCell>
                    <TableCell>{applicant.theme}</TableCell>
                    <TableCell>{applicant.talent}</TableCell>
                    <TableCell>{applicant.requestedOn}</TableCell>
                    <TableCell>
                      <Chip label={applicant.availability} color="warning" />
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="success" sx={{ mr: 1 }}>
                        Accept
                      </Button>
                      <Button variant="contained" color="error">
                        Decline
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
