import React from "react";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import "tailwindcss/tailwind.css";

const performers = [
  {
    id: 1,
    name: "ILK",
    talent: "Musician",
    location: "Mandaue",
    rating: 4.5,
    image: "ilk.jpg", 
  },
  {
    id: 2,
    name: "Oscar",
    talent: "Singer",
    location: "Mandaue",
    rating: 4.0,
    image: "oskar.jpg",
  },
];

export default function Client() {
  return (
    <div className="p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Talento</h1>
        <p className="text-lg mb-6">
          Discover and book talented performers for your events. Browse through
          our selection of artists and find the perfect fit for your next
          occasion.
        </p>
        <Button variant="contained" color="primary" className="bg-purple-700 hover:bg-purple-800">
          Book Now!
        </Button>
      </header>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-8">Performers</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {performers.map((performer) => (
            <Card key={performer.id} className="w-80 shadow-lg">
              <CardMedia
                component="img"
                height="200"
                image={performer.image}
                alt={performer.name}
                className="object-cover"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {performer.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Talent: {performer.talent}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Location: {performer.location}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Rating: {"\u2B50".repeat(Math.floor(performer.rating))}
                </Typography>
                <div className="mt-4 flex justify-between">
                  <Button variant="outlined" color="primary">
                    See Details
                  </Button>
                  <Button variant="contained" color="success">
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
