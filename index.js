const express = require('express');

const server = express();

server.use(express.json());


//POST - Creates a user using the information sent inside the request body
server.post('/api/users', (req,res) => {

})

//GET - Returns an array of users
server.get('/api/users', (req,res) => {
    
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