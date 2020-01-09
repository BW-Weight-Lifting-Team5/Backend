const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../models/auth-model.js");

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
  let { email, password } = req.body;

  Users.findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getJwtToken(user);

        const userId = user.id;

        res.status(200).json({ userId, token, message: "logged in!" });
      } else {
        res.status(401).json({ message: "Failed to log you in." });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
function getJwtToken(username) {
  const payload = {
    username,
    department: "dev"
  };

  const secret = process.env.JWT_SECRET || "lifting"; //env

  return jwt.sign(payload, secret, options);
}

module.exports = router;
