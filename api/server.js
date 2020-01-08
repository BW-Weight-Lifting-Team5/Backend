const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// IMPORT AUTH
const authRouter = require("../routers/users-router.js");

// IMPORT ROUTERS
const userRouter = require("../routers/workout-router.js");

// SETTING UP SERVER
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// RUNNING UNDER http://localhost:5000/login and /register
server.use("/api/auth", authRouter);
server.use("/api/user", userRouter);

// SET UP BASIC ENDPOINTS
server.get("/", (req, res) => {
  res.send("Server is Running!");
});

module.exports = server;
