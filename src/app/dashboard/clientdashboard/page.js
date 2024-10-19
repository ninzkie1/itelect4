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
import Carousel from "react-material-ui-carousel";

const contacts = [
  { id: 1, name: "Kris Justin Oporto", avatar: "/User-avatar.svg.png", lastMessage: "Okay ra kaayo boss." },
  { id: 2, name: "Jessica Drew", avatar: "/User-avatar.svg.png", lastMessage: "Please lang ko book boss. Thank you." },
];

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

const carouselItems = [
  { src: "/band.png", alt: "band" },
  { src: "/dj.png", alt: "dj" },
  { src: "/singer.png", alt: "singer" },
];

export default function ClientDashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState("");
  const [currentComment, setCurrentComment] = useState({});

  const toggleChat = (open) => () => {
    setIsChatOpen(open);
  };

  const handleSelectContact = (contactId) => {
    setSelectedContact(contactId);
    setMessages(chatData[contactId] || []);
  };

  const handleSendMessage = () => {
    if (currentMessage.trim() && selectedContact) {
      const newMessage = { text: currentMessage, sender: "You", time: "Just now", type: "sent" };
      setMessages([...messages, newMessage]);
      setCurrentMessage("");
    }
  };

  const handlePostSubmit = () => {
    if (currentPost.trim()) {
      const newPost = { id: Date.now(), text: currentPost, comments: [] };
      setPosts([...posts, newPost]);
      setCurrentPost("");
    }
  };

  const handleCommentSubmit = (postId) => {
    if (currentComment[postId]?.trim()) {
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          return { ...post, comments: [...post.comments, currentComment[postId]] };
        }
        return post;
      });
      setPosts(updatedPosts);
      setCurrentComment({ ...currentComment, [postId]: "" });
    }
  };

  return (
    <>
      <Head>
        <title>TALENTO - Book a Talent for Your Event</title>
      </Head>
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Image src="/logotalentos.png" alt="Talento Logo" width={40} height={40} />
            <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 2 }}>
              TALENTO
            </Typography>
            <Button color="inherit" href="/dashboard/clientdashboard">Client</Button>
            <Button color="inherit" href="/dashboard/clientdashboard/Post">POST</Button>
            <Button color="inherit" href="/dashboard/clientdashboard/category">Category</Button>
            <Button color="inherit" href="/dashboard/clientdashboard/Applicants">Applicants</Button>
            <Button color="inherit" href="#about">About Us</Button>
            <Button color="inherit" href="/profile">Profile</Button>
            <Button color="inherit" href="/authentication/login">Logout</Button>
          </Toolbar>
        </AppBar>

        <Container sx={{ py: 3, maxWidth: '100%', px: { xs: 1, sm: 2, md: 3 } }}>
          <section className="bg-gray-800 text-white py-2">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold mb-2">Book a Talent for your Event!</h1>
            </div>
          </section>
          <Carousel
            interval={2000}
            indicators={false}
            navButtonsAlwaysVisible
            animation="slide"
            sx={{ width: '100%', maxWidth: '100%', height: { xs: '200px', sm: '300px', md: '400px' } }}
          >
            {carouselItems.map((item, index) => (
              <Box key={index} sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </Box>
            ))}
          </Carousel>

          {/* Post Section */}
          <Box sx={{ my: 4 }}>
            <Typography variant="h6" gutterBottom>
              Create a Post
            </Typography>
            <TextField
              fullWidth
              placeholder="What's on your mind?"
              value={currentPost}
              onChange={(e) => setCurrentPost(e.target.value)}
              onKeyPress={(e) => (e.key === "Enter" ? handlePostSubmit() : null)}
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" onClick={handlePostSubmit}>
              Post
            </Button>
          </Box>

          {/* Posts List */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Posts
            </Typography>
            {posts.map((post) => (
              <Box key={post.id} sx={{ mb: 3, p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
                <Typography variant="body1">{post.text}</Typography>
                <Box sx={{ mt: 1 }}>
                  <TextField
                    fullWidth
                    placeholder="Add a comment..."
                    value={currentComment[post.id] || ""}
                    onChange={(e) => setCurrentComment({ ...currentComment, [post.id]: e.target.value })}
                    onKeyPress={(e) => (e.key === "Enter" ? handleCommentSubmit(post.id) : null)}
                    sx={{ mb: 1 }}
                  />
                  <Button variant="contained" color="primary" onClick={() => handleCommentSubmit(post.id)}>
                    Comment
                  </Button>
                </Box>
                {post.comments.length > 0 && (
                  <Box sx={{ mt: 1 }}>
                    {post.comments.map((comment, index) => (
                      <Typography key={index} variant="body2" sx={{ color: "gray" }}>
                        {comment}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Container>

        <Fab
          color="primary"
          aria-label="message"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
          onClick={toggleChat(true)}
        >
          <ChatBubbleOutline />
        </Fab>

        <Drawer anchor="right" open={isChatOpen} onClose={toggleChat(false)}>
          <Box sx={{ width: 500, display: "flex", height: "100%", flexDirection: "row" }}>
            <Box sx={{ width: "40%", bgcolor: "grey.200", p: 2, borderRight: "1px solid #ccc" }}>
              <Typography variant="h6" gutterBottom>Contacts</Typography>
              <List>
                {contacts.map((contact) => (
                  <ListItem button key={contact.id} onClick={() => handleSelectContact(contact.id)}>
                    <ListItemAvatar>
                      <Avatar src={                      contact.avatar} />
                    </ListItemAvatar>
                    <ListItemText primary={contact.name} />
                  </ListItem>
                ))}
              </List>
            </Box>

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

