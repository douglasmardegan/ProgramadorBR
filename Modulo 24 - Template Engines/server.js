// Load things we need
const express = require("express");
const fs = require("fs");
const path = require("path");
const server = express();

server.set("views", path.join(__dirname, "/views"));
server.use(express.static('./public'));

// set the view engine to ejs
server.set("view engine", "ejs");


let users = [
  {
    id: 1,
    name: "John",
    nationality: "French",
    phone: "+33-202-555-0162",
    email: "john@exemple.com"
  },
  {
    id: 2,
    name: "Lucky",
    nationality: "American",
    phone: "+1-202-555-0162",
    email: "lucky@exemple.com"
  },
  {
    id: 3,
    name: "Marie",
    nationality: "Spanish",
    phone: "+34-202-555-0162",
    email: "marie@exemple.com"
  },
  {
    id: 4,
    name: "Susan",
    nationality: "Canadian",
    phone: "+1-514-882-0748",
    email: "susan@exemple.com"
  }
];

// use res.render to load up an ejs view file
server.get("/", (req, res) => {
  res.render("users", { users });
  /* { users } as the same to use { users: users } in this case */
});

server.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
