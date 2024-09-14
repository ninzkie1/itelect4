"use client";
import React, { useState } from "react"; // Ensure useState is imported from React
import Head from "next/head";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Select,
  MenuItem,
  Grid,
  Paper,
  Container,
  Box,
  TextField,
  Fab,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Modal,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Image from "next/image";
import { ChatBubbleOutline } from "@mui/icons-material";

// Sample contacts
const contacts = [
  { id: 1, name: "Kris Justin Oporto", avatar: "/User-avatar.svg.png", lastMessage: "Okay ra kaayo boss." },
  { id: 2, name: "Jessica Drew", avatar: "/User-avatar.svg.png", lastMessage: "Please lang ko book boss. Thank you." },
];

// Sample chat data for each contact
const chatData = {
  1: [
    { text: "Okay ra kaayo boss.", sender: "Kris", time: "10:35 AM", type: "received" },
    { text: "Pwede tika ma book sa akong event ugma?", sender: "You", time: "10:37 AM", type: "sent" },
    { text: "Play rate nimo boss?", sender: "You", time: "10:38 AM", type: "sent" },
    { text: "Depend pila ka oras boss.", sender: "Kris", time: "10:45 AM", type: "received" },
  ],
  2: [
    { text: "Hello Jessica, can you work this weekend?", sender: "You", time: "11:00 AM", type: "sent" },
    { text: "I’ll check my schedule.", sender: "Jessica", time: "11:05 AM", type: "received" },
  ],
};

export default function ClientDashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false); // Track form visibility
  const [submittedPosts, setSubmittedPosts] = useState([]); // Track submitted posts

  // Form data, including avatar
  const [formData, setFormData] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
    description: "",
    avatar: "/User-avatar.svg.png", // Default avatar
    categories: [],
  });

  // Toggle Chat Drawer
  const toggleChat = (open) => () => {
    setIsChatOpen(open);
  };

  // Handle contact selection to load chat
  const handleSelectContact = (contactId) => {
    setSelectedContact(contactId);
    setMessages(chatData[contactId] || []);
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (currentMessage.trim() && selectedContact) {
      const newMessage = { text: currentMessage, sender: "You", time: "Just now", type: "sent" };
      setMessages([...messages, newMessage]); // Add new message to current chat
      setCurrentMessage(""); // Clear the input after sending
    }
  };

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
    if (formData.eventName && formData.startDate && formData.endDate) {
      setSubmittedPosts([...submittedPosts, formData]); // Save the post
      setFormData({
        eventName: "",
        startDate: "",
        endDate: "",
        description: "",
        avatar: "/User-avatar.svg.png",
        categories: [],
      }); // Reset form
      setIsFormVisible(false); // Hide form after submission
    }
  };

  return (
    <>
      <Head>
        <title>TALENTO - Book a Talent for Your Event</title>
      </Head>
      <div>
        {/* Navigation */}
        <AppBar position="static" color="default">
          <Toolbar>
            <Image src="/logotalentos.png" alt="Talento Logo" width={40} height={40} />
            <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 2 }}>
              TALENTO
            </Typography>
            <Button color="inherit" href="/">
              Home
            </Button>
            <Button color="inherit" href="/category">
              Category
            </Button>
            <Button color="inherit" href="#about">
              About Us
            </Button>
            <Button color="inherit" href="/profile">
              Profile
            </Button>
            <Button color="inherit" href="/authentication/login">
              Logout
            </Button>
          </Toolbar>
        </AppBar>

        {/* Booking Section */}
        <Box sx={{ bgcolor: "grey.900", color: "white", py: 6 }}>
          <Container maxWidth="md" sx={{ textAlign: "center" }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Book a Talent for your Event!
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Select defaultValue="" variant="outlined" sx={{ bgcolor: "white", color: "black", width: 250 }}>
                <MenuItem value="" disabled>
                  Select Event
                </MenuItem>
              </Select>
              <Select defaultValue="" variant="outlined" sx={{ bgcolor: "white", color: "black", width: 250 }}>
                <MenuItem value="" disabled>
                  Select Theme
                </MenuItem>
              </Select>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "purple",
                  color: "white",
                  height: 56,
                  "&:hover": { bgcolor: "#6a1b9a" },
                }}
              >
                Search
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Toggle Form Button */}
        <Container sx={{ py: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button variant="contained" color="primary" onClick={toggleForm}>
              Make a Post
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
              <Typography variant="h5">Create an Event</Typography>
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
                <Avatar src={post.avatar} alt="User Avatar" sx={{ width: 50, height: 50, mr: 2 }} />
                <Typography variant="h6">{post.eventName}</Typography>
              </Box>
              <Typography>{`From: ${post.startDate} To: ${post.endDate}`}</Typography>
              <Typography>{post.description}</Typography>
              <Typography>Categories: {post.categories.join(", ")}</Typography>
            </Box>
          ))}
        </Container>

        {/* Category Section */}
        <section className="container mx-auto py-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Browse By Category</h2>
            <a href="/categories" className="hover:text-gray-700">
              View All (6)
            </a>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <img src="/singer.png" alt="Singer" className="rounded-lg mb-2" />
              <h3 className="text-lg font-semibold">Singer</h3>
            </div>
            <div className="text-center">
              <img src="/dancer.png" alt="Dancer" className="rounded-lg mb-2" />
              <h3 className="text-lg font-semibold">Dancer</h3>
            </div>
            <div className="text-center">
              <img src="/musician.png" alt="Musician" className="rounded-lg mb-2" />
              <h3 className="text-lg font-semibold">Musician</h3>
            </div>
            <div className="text-center">
              <img src="/band.png" alt="Band" className="rounded-lg mb-2" />
              <h3 className="text-lg font-semibold">Band</h3>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <ul className="flex space-x-2">
              <li className="px-3 py-1 border border-gray-300 rounded">1</li>
              <li className="px-3 py-1 border border-gray-300 rounded">2</li>
              <li className="px-3 py-1 border border-gray-300 rounded">3</li>
            </ul>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-200 py-16">
          <div className="container mx-auto flex items-center">
            <div className="w-1/2 pr-8">
              <img src="/background.png" alt="About Us" className="rounded-lg" />
            </div>
            <div className="w-1/2 pl-8">
              <h2 className="text-2xl font-bold mb-4">About us</h2>
              <p>
                Talento is a web-based and mobile-responsive talent booking management system designed to streamline
                the process of finding and booking performers for events.
              </p>
            </div>
          </div>
        </section>

        {/* Floating Message Icon */}
        <Fab color="primary" aria-label="message" sx={{ position: "fixed", bottom: 16, right: 16 }} onClick={toggleChat(true)}>
          <ChatBubbleOutline />
        </Fab>

        {/* Chat Drawer */}
        <Drawer anchor="right" open={isChatOpen} onClose={toggleChat(false)}>
          <Box sx={{ width: 500, display: "flex", height: "100%", flexDirection: "row" }}>
            {/* Contact List */}
            <Box sx={{ width: "40%", bgcolor: "grey.200", p: 2, borderRight: "1px solid #ccc" }}>
              <Typography variant="h6" gutterBottom>
                Contacts
              </Typography>
              <List>
                {contacts.map((contact) => (
                  <ListItem button key={contact.id} onClick={() => handleSelectContact(contact.id)}>
                    <ListItemAvatar>
                      <Avatar src={contact.avatar} />
                    </ListItemAvatar>
                    <ListItemText primary={contact.name} />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Chat Area */}
            <Box sx={{ width: "60%", p: 2, display: "flex", flexDirection: "column", height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                {selectedContact ? contacts.find((contact) => contact.id === selectedContact).name : "Select a contact"}
              </Typography>
              <Box sx={{ flexGrow: 1, overflowY: "auto", mb: 2 }}>
                {messages.map((message, index) => (
                  <Box key={index} sx={{ display: "flex", justifyContent: message.type === "sent" ? "flex-end" : "flex-start", mb: 1 }}>
                    <Box sx={{ maxWidth: "60%", padding: 1, bgcolor: message.type === "sent" ? "#cce5ff" : "#f1f0f0", borderRadius: 2 }}>
                      <Typography variant="body1">{message.text}</Typography>
                      <Typography variant="caption" sx={{ display: "block", textAlign: "right", marginTop: 1 }}>
                        {message.time}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Input Box */}
              {selectedContact && (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TextField
                    fullWidth
                    placeholder="Type a message..."
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => (e.key === "Enter" ? handleSendMessage() : null)}
                    sx={{ marginRight: 2 }}
                  />
                  <Button variant="contained" color="primary" onClick={handleSendMessage}>
                    Send
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Drawer>
      </div>
    </>
  );
}
