const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../models/user-model");
const restricted = require("../auth/auth-middleware");

const Projects = require("../models/user-model");

router.get("/", (req, res) => {
  Projects.find()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Error reaching server." });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Projects.findById(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Error reaching server." });
    });
});

// Requires 4 fields: email, password, firstName, lastName
router.post("/register", (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.addUser(user)
    .then(user => {
      res.status(201).json({
        id: user.id,
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName
      });
    })
    .catch(err => {
      res.status(400).json({ Error: `Bad request: ${err}` });
    });
});

router.post("/login", (req, res) => {
  // implement login
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);

        res.status(200).json({
          token,
          message: `Welcome! Your id number is ${user.id}!`
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/users", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

function signToken(user) {
  const payload = {
    username: user.username
  };
  const secret = process.env.JWT_SECRET || "is it secret, is it safe?";

  const options = {
    expiresIn: "1h"
  };
  return jwt.sign(payload, secret, options);
}

module.exports = router;
