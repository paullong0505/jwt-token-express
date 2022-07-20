// const User = require("mongoose").model("User");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const ExtractJwt = require("passport-jwt").ExtractJwt;

exports.register = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((result) => {
      if (result) res.status(400).json({ message: "user duplicated" });
      else {
        const newuser = new User(req.body);
        newuser.password = bcrypt.hashSync(req.body.password, 10);

        newuser.save().then((response) => {
          if (response) res.status(200).json({ message: "success!" });
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Server error!" });
    });
};

exports.login = async (req, res, next) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = await jwt.sign({ user }, config.secretOrPrivateKey, {
      expiresIn: "100h",
    });

    res.status(200).json({
      message: "login success!",
      doc: { auth: user, token: `Bearer ` + token },
    });
  } else {
    res.status(400).json({ message: "no match user or password" });
  }
};
exports.loginwithtoken = async (req, res) => {
  const user = req.user;
  const token = await jwt.sign({ user }, config.secretOrPrivateKey, {
    expiresIn: "100h",
  });

  res.status(200).json({
    message: "login success again!",
    doc: { auth: user, token: `Bearer ` + token },
  });
};
