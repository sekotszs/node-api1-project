const express = require('express');

//This allows us to generate randomized id's
const shortid = require('shortid')

const server = express();

//This allows express to read JSON from the body
server.use(express.json());

//Server API
server.get("/", (req,res) => {
    res.json({api: 'Node API Project 1'})
})

let users= [
    {
    id: "shortid", // hint: use the shortid npm package to generate it
    name: "Laszlo", // String, required
    bio: "Is also known Jackie Daytona",  // String, required
},
{
    id: "shortid",
    name: "Nandor The Relentless", 
    bio: "Loves glitter and crepe paper" 
},
{
    id: "shortid",
    name: "Guillermo",
    bio: "Loves Interview with a Vampire" 
}
]

//POST - Creates a user using the information sent inside the request body
server.post('/api/users', (req,res) => {

})

//GET - Returns an array of users
server.get('/api/users', (req,res) => {
    res.json(users);
    if(!users){
        res.status(500).json({message: 'The users information could not be retrieved.'})
    } else{
    res.status(200).json()}
})


//GET - Returns the user object with the specified id
server.get('/api/users/:id', (req,res) => {
    
})

//DELETE - Removes the user with the specified Id and returns a deleted user
server.delete('/api/users/:id', (req,res) => {
    
})

//PUT - Updates the user with the specified Id using data from thr request body. Returns the modified user.
server.put('/api/users/:id', (req,res) => {
    
})


const PORT = 5000;
server.listen(PORT, () => {
    console.log('running on localhost:', PORT)
})