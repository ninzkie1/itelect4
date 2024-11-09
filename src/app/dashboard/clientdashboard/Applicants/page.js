import React from "react";
import TalentoAppBar from "../Post/Appbar/page";
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
   <div>
    <TalentoAppBar/>
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

        </div>
     
  );
}
