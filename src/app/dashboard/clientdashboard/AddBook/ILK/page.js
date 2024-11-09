"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Box, Typography, TextField, Select, MenuItem, Button, InputLabel, FormControl, Rating, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function AddBook() {
  const router = useRouter(); // For navigation
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false); // Success dialog state
  
  const performer = {
    name: "ILK",
    rate: "1000 TCoins"
  };

  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    themeName: '',
    municipality: '',
    barangay: '',
    notes: '',
  });

  const themes = {
    Concert: ["Rock", "Pop", "Indie"],
    Birthday: ["Formal", "Casual", "Fun"],
    Wedding: ["Elegant", "Rustic", "Modern"],
    Corporate: ["Formal", "Tech", "Minimal"]
  };

  const barangays = {
    Mandaue: ["Umapad", "Guizo", "Looc"],
    Liloan: ["Tayud", "Yati", "Calero"],
    Lapulapu: ["Opon", "Pusok", "Tamiya"]
  };

  useEffect(() => {
    const { eventName, themeName, municipality, barangay } = eventDetails;
    if (eventName && themeName && municipality && barangay && startDate && startTime && endTime) {
      setIsSubmitEnabled(true);
    } else {
      setIsSubmitEnabled(false);
    }
  }, [eventDetails, startDate, startTime, endTime]);

  const handleEventChange = (event) => {
    const { value } = event.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      eventName: value,
      themeName: ''
    }));
  };

  const handleThemeChange = (event) => {
    const { value } = event.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      themeName: value
    }));
  };

  const handleMunicipalityChange = (event) => {
    const { value } = event.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      municipality: value,
      barangay: ''
    }));
  };

  const handleBarangayChange = (event) => {
    const { value } = event.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      barangay: value
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleConfirmBooking = () => {
    setOpenDialog(false);
    setOpenSuccessDialog(true); // Show success dialog
  };

  const handleSuccessDialogClose = () => {
    setOpenSuccessDialog(false);
    router.push('/dashboard/clientdashboard'); // Redirect to dashboard after closing success dialog
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="column" alignItems="center" padding={3} boxShadow={3} borderRadius={2}>

          {/* Profile Section */}
          <Box display="flex" alignItems="center" mb={2}>
            <Box
              component="img"
              src="/ILK.jpg" // Update the path to the profile image
              alt="Profile"
              sx={{ width: 60, height: 60, borderRadius: '50%', marginRight: 2 }}
            />
            <Box>
              <Typography variant="h6">{performer.name}</Typography>
              <Typography variant="body2">Talent: </Typography>Musician
              <Typography variant="body2">Rate: {performer.rate}</Typography>
              <Typography variant="body2">Location: Mandaue</Typography>
              <Rating value={4} readOnly />
            </Box>
          </Box>

          {/* Form Section */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Event Name</InputLabel>
            <Select
              value={eventDetails.eventName}
              name="eventName"
              onChange={handleEventChange}
            >
              <MenuItem value="Concert">Concert</MenuItem>
              <MenuItem value="Birthday">Birthday</MenuItem>
              <MenuItem value="Wedding">Wedding</MenuItem>
              <MenuItem value="Corporate">Corporate</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Theme Name</InputLabel>
            <Select
              value={eventDetails.themeName}
              name="themeName"
              onChange={handleThemeChange}
              disabled={!themes[eventDetails.eventName]?.length}
            >
              <MenuItem value="" disabled>Select Theme</MenuItem>
              {themes[eventDetails.eventName]?.map((theme) => (
                <MenuItem key={theme} value={theme}>{theme}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Select Municipality</InputLabel>
            <Select
              value={eventDetails.municipality}
              name="municipality"
              onChange={handleMunicipalityChange}
            >
              <MenuItem value="Mandaue">Mandaue</MenuItem>
              <MenuItem value="Liloan">Liloan</MenuItem>
              <MenuItem value="Lapulapu">Lapulapu</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Select Barangay</InputLabel>
            <Select
              value={eventDetails.barangay}
              name="barangay"
              onChange={handleBarangayChange}
              disabled={!barangays[eventDetails.municipality]?.length}
            >
              <MenuItem value="" disabled>Select Barangay</MenuItem>
              {barangays[eventDetails.municipality]?.map((barangay) => (
                <MenuItem key={barangay} value={barangay}>{barangay}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DatePicker
                label="Start Date"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>

            <Grid item xs={12}>
              <TimePicker
                label="Start Time"
                value={startTime}
                onChange={(newValue) => setStartTime(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>

            <Grid item xs={12}>
              <TimePicker
                label="End Time"
                value={endTime}
                onChange={(newValue) => setEndTime(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
          </Grid>

          <TextField
            label="Customer Notes (Optional)"
            name="notes"
            multiline
            rows={4}
            value={eventDetails.notes}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleSubmit}
            disabled={!isSubmitEnabled}
          >
            Confirm Booking
          </Button>

          {/* Confirmation Dialog */}
          <Dialog open={openDialog} onClose={handleDialogClose}>
            <DialogTitle>Confirm Booking</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Confirm booking? You are paying {performer.name} {performer.rate}.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose}>Cancel</Button>
              <Button onClick={handleConfirmBooking} color="primary">Confirm</Button>
            </DialogActions>
          </Dialog>

          {/* Success Dialog */}
          <Dialog open={openSuccessDialog} onClose={handleSuccessDialogClose}>
            <DialogTitle>Booking Successful</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Your booking with {performer.name} has been confirmed successfully.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSuccessDialogClose} color="primary">OK</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Container>
    </LocalizationProvider>
  );
}
