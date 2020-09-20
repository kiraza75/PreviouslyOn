const express = require("express");
const request = require("request");
const cors = require("cors");
const path = require("path");


const app = express();

app.use(cors());

app.post("/auth", (req, res) => {
    request("https://api.betaseries.com/members/auth", (error, response, body) => {

    });
});

app.listen(8080, function() {
 console.log("Server is running on port 8080");
});  

