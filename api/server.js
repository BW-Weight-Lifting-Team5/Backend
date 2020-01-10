const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

// const authenticate = require('../auth/auth-middleware.js');

const workoutRouter = require("../routers/workout-router");
const usersRouter = require("../routers/users-router");
const exerciseRouter = require("../routers/exercise-router");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", usersRouter);
server.use("/api/workout", workoutRouter);

server.use("/api/exercise", exerciseRouter);

// SET UP BASIC ENDPOINTS
server.get("/", (req, res) => {
  res.send("💚 || If you can read this, it's working! ;) || 💚");
});

module.exports = server;
