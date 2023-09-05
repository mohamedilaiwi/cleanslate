const express = require("express");
const cors = require('cors');
const app = express();

const redditExports = require('./Apps/reddit_api.js');
const db = require('./queries');

require('dotenv').config();
app.use(cors());
app.use(express.json());



app.get("/message", (req, res) => {
    res.json({message: "Hello from server!"});
})

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);


app.listen(3001, () => {
    console.log("Servert listening on http://localhost:3001");
});
