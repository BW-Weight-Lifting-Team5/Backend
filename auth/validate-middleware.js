const UserModel = require("../models/user-model.js");

function validateUserId(req, res, next) {
  const id = req.params.userId;

  UserModel.getUserById(id).then(user => {
    if (!user) {
      res.status(404).json({ message: "Please check user" });
    } else {
      next();
    }
  });
}

module.exports = validateUserId;
