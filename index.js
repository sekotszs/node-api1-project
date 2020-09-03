const express = require("express");

//This allows us to generate randomized id's
const shortid = require("shortid");

const server = express();

//This allows express to read JSON from the body
server.use(express.json());

//Server API
server.get("/", (req, res) => {
  res.json({ api: "Node API Project 1" });
});

let users = [
  {
    id: 1, // hint: use the shortid npm package to generate it
    name: "Laszlo", // String, required
    bio: "Is also known Jackie Daytona", // String, required
  },
  {
    id: 2,
    name: "Nandor The Relentless",
    bio: "Loves glitter and crepe paper",
  },
  {
    id: 3,
    name: "Guillermo",
    bio: "Loves Interview with a Vampire",
  },
];

//POST - Creates a user using the information sent inside the request body
server.post("/api/users", (req, res) => {
  const body = req.body;
  //this statement means if the req body is missing the name or bio property.
  if (!body.name || !body.bio) {
    res
      .status(400)
      .json({ errormessage: "Please provide name and bio for the user" });
  } else if (body.name && body.bio) {
    //this line means if there is a body and a bio present
    body.id = shortid.generate(); //this creates and adds a new unique id to the body
    users.push(body);
    res.status(201).json(body); //posts to the body
  } else {
    res.status(500).json({
      errormessage: "There was an error while saving the user to the database",
    });
  }
});

//GET - Returns an array of users
server.get("/api/users", (req, res) => {
  res.json(users);
  if (!users) {
    res
      .status(500)
      .json({ message: "The users information could not be retrieved." });
  } else {
    res.status(200).json();
  }
});

//GET - Returns the user object with the specified id
server.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == id); //user with a specified ID

  if (user) {
    res.status(200).json(user);
  } else {
    res
      .status(404)
      .json({ errormessage: "The user with the specified ID does not exist" });
  }
});

//DELETE - Removes the user with the specified Id and returns a deleted user
server.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const deleteThis = users.find((user) => user.id === id); // this finds the value and the id

  //if this id is found
  if (deleteThis) {
    users = users.filter((user) => user.id !== id); //this filters it out of the array
    res.status(200).json({ message: "Get out of here!" });
  } else {
    res.status(404).json({ errormessage: "Could not find that id" });
  }
});

//PUT - Updates the user with the specified Id using data from thr request body. Returns the modified user.
server.put("/api/users/:id", (req, res) => {
  //get the id from req.params and get the "patch" body from req.body
  const { id } = req.params;
  const changes = req.body;

  //look to see if it is in the array
  let found = users.find((user) => user.id === id);
  if (found) {
    Object.assign(found, changes); //if it is in the array this will change it
    res.status(200).json(found);
  } else {
    res.status(404).json({ errormessage: "User does not exist" });
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log("running on localhost:", PORT);
});
