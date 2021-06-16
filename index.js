const express = require('express');

const server = express();

// request handling methods
const handleAllTypesOfRequest = (req, res) => {
    res.send("Response from server.use")
}

const handleLoginRequest = (req, res) => {
    res.send("Login here Buddy")
}

const handleSignupRequest = (req, res) => {
    res.send("Sign Up here")
}

const handlePlayRequest = (req, res) => {
    res.send("Play here")
}

const handleGameRequest = (req, res) => {
    res.send("Download Game here")
}


server.post("/profile", handleAllTypesOfRequest)
server.get("/login",  handleLoginRequest)
server.patch("/signup", handleSignupRequest)
server.put("/play", handlePlayRequest)
server.delete("/game", handleGameRequest)

server.listen(3000, ()=> console.log('server is ready'));