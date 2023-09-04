const express = require("express");
const cors = require('cors');
const app = express();

const redditExports = require('./Apps/reddit_api.js');

require('dotenv').config();
app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
    res.json({message: "Hello from server!"});
})




app.listen(3001, () => {
    console.log("Servert listening on http://localhost:3001");
});