"use client";

import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import Image from 'next/image';

export default function AddBook() {
  const [performer, setPerformer] = useState(null);

  useEffect(() => {
    // Retrieve data from sessionStorage
    if (typeof window !== "undefined") {
      const storedPerformer = sessionStorage.getItem("selectedPerformer");
      if (storedPerformer) {
        setPerformer(JSON.parse(storedPerformer));
      }
    }
  }, []);

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        {performer ? (
          <>
            <Box textAlign="center" mb={4}>
              <Image src={performer.image} alt={performer.name} width={100} height={100} />
              <Typography variant="h4">{performer.name}</Typography>
              <Typography variant="body1">Talent: {performer.talent}</Typography>
              <Typography variant="body1">Location: {performer.location}</Typography>
              <Typography variant="body1">Rating: {'⭐'.repeat(Math.floor(performer.rating))}</Typography>
            </Box>
            <TextField fullWidth label="Event Name" variant="outlined" margin="normal" />
            <TextField fullWidth label="Theme Name" variant="outlined" margin="normal" />
            <TextField fullWidth label="Select Municipality" variant="outlined" margin="normal" />
            <TextField fullWidth label="Select Barangay" variant="outlined" margin="normal" />
            <TextField fullWidth label="Start Date" type="date" variant="outlined" margin="normal" InputLabelProps={{ shrink: true }} />
            <TextField fullWidth label="Start Time" type="time" variant="outlined" margin="normal" InputLabelProps={{ shrink: true }} />
            <TextField fullWidth label="End Time" type="time" variant="outlined" margin="normal" InputLabelProps={{ shrink: true }} />
            <TextField fullWidth label="Customer Notes (Optional)" variant="outlined" margin="normal" multiline rows={4} />
            <Box textAlign="center" mt={4}>
              <Button variant="contained" color="primary">Confirm Booking</Button>
            </Box>
          </>
        ) : (
          <Typography variant="h5">No performer selected for booking.</Typography>
        )}
      </Box>
    </Container>
  );
}
