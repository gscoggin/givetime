const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/give_time"
);

const eventSeed = [
  {
    name: "Light in the Grove",
    synopsis:
      "Held on the eve of World AIDS Day, guests experience a moving candlelight reflection at the Circle of Friends then walk through our spectacularly-illuminated Redwood Grove to a warmly-lit banquet tent.",
    date: new Date(Date.now()),
    cityAddress: "100 1st St. San Francisco CA 94105" 
  },
  {
    name: "A Benefit for Chapter 510",
    synopsis:
      "Please join Chapter 510 and some of your favorite storytellers for an only-in-Oakland night to remember",
    date: new Date(Date.now()),
    cityAddress: "1333 Broadway St. Oakland CA 94612" 
  },
  {
    name: "Giving the Gift of a Career",
    synopsis:
      "Guests will meet former trainees and enjoy a live auction.",
    date: new Date(Date.now()),
    cityAddress: "111 Mason St. San Francisco CA 94133" 
  },
  {
    name: "Una Noche de Elegancia Girls in Tech Gala",
    synopsis:
      "This celebratory evening will be a night to remember!",
    date: new Date(Date.now()),
    cityAddress: "301 Battery St. San Francisco CA 94111" 
  },
  {
    name: "Trans Lifeline’s 4th Anniversary Celebration of Resilience",
    synopsis:
      "Join Trans Lifeline for a fundraising event celebrating four years of resilience - our own, and that of our incredible community.",
    date: new Date(Date.now()),
    cityAddress: "88 Colin P Kelly Junior St. San Francisco CA 94107" 
  }
];

db.Events
  .remove({})
  .then(() => db.Events.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
