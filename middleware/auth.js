const passport = require("passport");

const auth = {
  required: passport.authenticate("jwt", { session: false }),
  optional: function (req, res, next) {
    next();
  },
};
module.exports = auth;

// // const { default: mongoose } = require("mongoose");
// const config = require("../config/config");
// // const User = mongoose().model("User");
// const User = require("../models/user");
// const passport = require("passport");

// const jwtAuth = (req, res, next) => {
//   const authHeader = req.headers.Authorization;
//   console.log("------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>", authHeader);
//   if (authHeader) {
//     const token = authHeader.split("Bearer ")[1];
//     console.log(token);
//     jwt.verify(token, config.secretOrPrivateKey, (err, user) => {
//       if (err) {
//         return res.sendStatus(403);
//       }
//       const result = User.findOne({ email: user.email });
//       if (result) {
//         req.user = user;
//         next();
//       }
//     });
//   } else {
//     res.sendStatus(401);
//   }
// };
// module.exports = jwtAuth;
