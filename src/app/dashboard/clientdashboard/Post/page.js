"use client";
import React, { useState } from "react"; // Ensure useState is imported from React
import Head from "next/head";
import {
  Container,
  Box,
  TextField,
  Modal,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  Typography,
} from "@mui/material";

export default function Post() {
  const [isFormVisible, setIsFormVisible] = useState(false); // Track form visibility
  const [submittedPosts, setSubmittedPosts] = useState([]); // Track submitted posts

  // Form data, including avatar
  const [formData, setFormData] = useState({
    clientName: "",
    eventName: "",
    startDate: "",
    endDate: "",
    description: "",
    categories: [],
  });

  // Toggle form visibility
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible); // Toggle form visibility state
  };

  // Handle form field change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle category checkbox change
  const handleCategoryChange = (category) => {
    setFormData((prevData) => ({
      ...prevData,
      categories: prevData.categories.includes(category)
        ? prevData.categories.filter((cat) => cat !== category)
        : [...prevData.categories, category],
    }));
  };

  // Handle form submission
  const handleSubmitPost = () => {
    if (formData.clientName && formData.eventName && formData.startDate && formData.endDate) {
      setSubmittedPosts([...submittedPosts, formData]); // Save the post
      setFormData({
        clientName: "",
        eventName: "",
        startDate: "",
        endDate: "",
        description: "",
        categories: [],
      }); // Reset form
      setIsFormVisible(false); // Hide form after submission
    }
  };

  return (
    <>
      <Head>
        <title>Submit a Talent Request</title>
      </Head>
      <div>
        {/* Category Section */}
        <Container sx={{ py: 4 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5" fontWeight="bold">
              Talent Requests
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }}>
              <Typography variant="body1" sx={{ marginRight: 2 }}>
                Filter by Talent:
              </Typography>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Singer" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Dancer" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Musician" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Band" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Entertainer" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="DJ" />
            </Box>
          </Box>
        </Container>
        {/* Toggle Form Button */}
        <Container sx={{ py: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
            <Button variant="contained" color="primary" onClick={toggleForm}>
              Submit Talent Request
            </Button>
          </Box>

          {/* Modal for Form */}
          <Modal
            open={isFormVisible}
            onClose={toggleForm}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                bgcolor: "white",
                p: 4,
                borderRadius: "8px",
                width: "80%",
                maxWidth: "600px",
                boxShadow: 24,
              }}
            >
              <Typography variant="h5">Submit a Talent Request</Typography>
              <TextField
                fullWidth
                label="Client Name"
                margin="normal"
                variant="outlined"
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                label="Event Name"
                margin="normal"
                variant="outlined"
                name="eventName"
                value={formData.eventName}
                onChange={handleInputChange}
              />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Start Date"
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="End Date"
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <TextField
                fullWidth
                label="Description"
                multiline
                rows={4}
                margin="normal"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                variant="outlined"
              />
              <Typography variant="h6">Category:</Typography>
              <Box display="flex" flexWrap="wrap">
                {["Singer", "Dancer", "Musician", "Band", "DJ"].map((category) => (
                  <FormControlLabel
                    key={category}
                    control={
                      <Checkbox
                        checked={formData.categories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                    }
                    label={category}
                  />
                ))}
              </Box>
              <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmitPost}>
                Submit
              </Button>
            </Box>
          </Modal>
        </Container>

        {/* Display Submitted Posts */}
        <Container>
          {submittedPosts.map((post, index) => (
            <Box key={index} sx={{ border: "1px solid #ccc", p: 3, mb: 3 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Typography variant="h6">{post.clientName}</Typography>
                <Typography variant="h6" sx={{ ml: 2 }}>
                  {post.eventName}
                </Typography>
              </Box>
              <Typography>{`From: ${post.startDate} To: ${post.endDate}`}</Typography>
              <Typography>{post.description}</Typography>
              <Typography>Categories: {post.categories.join(", ")}</Typography>
            </Box>
          ))}
        </Container>
      </div>
    </>
  );
}
