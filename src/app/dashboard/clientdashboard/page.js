"use client";
import React, { useState } from "react"; 
import Head from "next/head";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Fab,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { ChatBubbleOutline } from "@mui/icons-material";
import Carousel from 'react-material-ui-carousel'; // Import Carousel

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

// Sample carousel images
const carouselItems = [
  { src: '/band.png', alt: 'band' },
  { src: '/dj.png', alt: 'dj' },
  { src: '/singer.png', alt: 'singer' },
];

export default function ClientDashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

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
            <Button color="inherit" href="/">
              POST
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

        {/* Sliding Image Carousel */}
        <Container sx={{ py: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Book a Talent for your Event!
          </Typography>
          <Carousel
            interval={2000} // 2 seconds per slide
            indicators={false} // Hide indicators (dots)
            navButtonsAlwaysVisible // Keep navigation buttons visible
            animation="slide" // Smooth slide animation
          >
            {carouselItems.map((item, index) => (
              <Box key={index} sx={{ position: 'relative', width: '100%', height: '400px' }}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill // New layout mode
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Make the image fill the area
                />
              </Box>
            ))}
          </Carousel>
        </Container>

        {/* Floating Message Icon */}
        <Fab
          color="primary"
          aria-label="message"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
          onClick={toggleChat(true)}
        >
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
                  <Box
                    key={index}
                    sx={{ display: "flex", justifyContent: message.type === "sent" ? "flex-end" : "flex-start", mb: 1 }}
                  >
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
