const jwt = require("jsonwebtoken");


module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const secret = process.env.JWT_SECRET || "Lift";
    jwt.verify(token, secret, function(err, decodedToken) {
      if (err) {
        res.status(401).json({ message: "Invalid token." });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Please login and try again." });
  }
};
